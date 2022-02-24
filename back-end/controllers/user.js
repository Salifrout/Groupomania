const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const User = require('../models/user');
require('dotenv').config();

exports.signup = (req, res) => {
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
                .then(() => res.status(201).json({ message: 'Un nouvel utilisateur a été enregistré !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res) => {
    const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, process.env.EMAIL_PROTECTED).toString();
      User.findOne({ email: emailCryptoJs })
        .then(user => {
          if (!user) {
            return res.status(401).json({ error });
          }
          bcrypt.compare(req.body.user_password, user.user_password)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error });
              }
              res.status(200).json({
                userId: User.user_id,
                token: jwt.sign(
                  { userId: User.user_id },
                  process.env.SECRET_KEY,
                  { expiresIn: '8h' }
                )
              });
            })
            .catch(error => res.status(500).json({ error }));
          })
        .catch(error => res.status(500).json({ error }));
    }
;

exports.logout = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json('disconnected !')
};

exports.accessUserProfile = (req,res) => {
  User.findOne({ user_id: req.params.id })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(401).json({ error }));
};

/*exports.updateUser = (req, res) => {
  const newUser = { ...req.body };
    User.updateOne({ user_id: req.params.id }, { ...newUser, user_id: req.params.id })
      .then(() => res.status(200).json({ message: 'Profil correctement modifié !'}))
      .catch(error => res.status(400).json({ error }));
};*/

exports.deleteAccount = (req, res) => {

};

//delete : supprimer compte et ses posts et ses comments + clear cookie + retour page de login
