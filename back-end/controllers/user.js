const bcrypt = require('bcrypt');
const sequelize = require("../utils/database");
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const User = require('../models/user');
require('dotenv').config();

exports.signup = (req, res) => {
  try {
    const correctEmail = new RegExp(/[a-z|0-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}/);
    const correctPassword = new RegExp(/.{12,30}/);
    if (correctEmail.test(req.body.user_email) && correctPassword.test(req.body.user_password)) {
      const emailCryptoJs = cryptojs.HmacSHA256(req.body.user_email, process.env.EMAIL_PROTECTED).toString();
      bcrypt.hash(req.body.user_password, 10)
        .then(hash => {
          const user = new User ({
          user_email: emailCryptoJs,
          user_password: hash,
          user_firstname: req.body.user_firstname,
          user_lastname: req.body.user_lastname,
          user_admin: req.body.user_admin
          });
        user.save()
        .then(() => res.status(201).json({ message: 'Un nouvel utilisateur a été enregistré !'}))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    } else {
      res.status(401).json( 'L\'email ou le mot de passe ne correspondent pas à des données attendues.' )
    }
  } catch {
      res.status(401).json( 'Une erreur est survenu et empêche la création d\'un nouvel uilisateur.')
  }
};

exports.login = (req, res, next) => {
  const emailCryptoJs = cryptojs.HmacSHA256(req.body.user_email, process.env.EMAIL_PROTECTED).toString();
    User.findOne({ where: {user_email: emailCryptoJs}, raw: true })
      .then(User => {
        if (!User) {
          return res.status(401).json({ error });
        }
        bcrypt.compare(req.body.user_password, User.user_password)
          .then(valid => {
            if (!valid) {
              return res.status(403).json({ error });
            }
            const TEST = jwt.sign(
                { userId: User.user_id },
                process.env.SECRET_KEY,
                { expiresIn: '4h' } 
              );
            res.status(200).json({
              userId: User.user_id,
              token: TEST
            });
          })
          .catch(error => res.status(500).json({ error }));
        })
      .catch(error => res.status(500).json({ error }));
  }
;

exports.logout = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json('Déconnecté !')
};

exports.accessUserProfile = (req,res) => {
  User.findOne({ where: {user_id: req.params.user_id}, raw: true })
    .then(user => { if (!user) { return res.status(401).json({ error }); }
      res.status(200).json(user)})
    .catch(error => res.status(401).json({ error }));
};

exports.deleteAccount = (req, res) => {
  try {
    User.destroy({ where:{user_id: req.params.user_id}, raw: true})
    .then(() => res.status(200).json({ message: 'Le compte utilisateur a été supprimé !'}))
    .then(() => res.clearCookie('jwt')) 
    .catch(error => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error })
  }
};