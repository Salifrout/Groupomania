const sequelize = require("../utils/database");
const cryptojs = require('crypto-js');
const Gpost = require('../models/groupomania-post');
const User = require ('../models/user');
const fs = require('fs');

exports.getAllPosts = (req, res) => {
    const MySQL_request = 'SELECT * FROM `Gpost` ORDER BY `Gpost_date` DESC';
    sequelize.query(MySQL_request, (err, result) => {
        if (err) {
            res.status(404).json({ err });
            throw err;
        }
        res.status(200).json(result);
    });
    //rajouter les commentaires qui vont avec depuis le fichier comment
};

exports.getOnePost = (req, res, next) => {
    Gpost.findOne({ Gpost_id: req.params.id })
        .then(Gpost => res.status(200).json(Gpost))
        .then(() => next())
        .catch(error => res.status(401).json({ error }));
};

exports.createPost = (req, res) => {
    const emailCryptoJs = cryptojs.HmacSHA256(req.params.user_email, process.env.EMAIL_PROTECTED).toString();
    User.findOne({ where: {user_email: emailCryptoJs}, raw: true })
        .then((User) => {
            const firstname = User.user_firstname;
            const lastname = User.user_lastname;
            const MEDIA = req.file ? `${req.protocol}://${req.get('host')}/media/${req.file.filename}` : null;
            const post = new Gpost({
                Gpost_title: req.body.Gpost_title,
                Gpost_text: req.body.Gpost_text,
                Gpost_media: MEDIA,
                Gpost_firstNameAuthor: firstname,
                Gpost_lastNameAuthor: lastname
                });
            /*console.log(firstname + ('test126'));
            console.log(...req.body);*/
            post.save()
                .then(() => res.status(201).json({ message: 'Poste correctement enregistré !'}))
                .catch(error => res.status(401).json({ error }));
            })
        .catch(error => res.status(500).json({ error }));
    }
;
//identifier avec user.findbyID/findOne : user_id et const pour le définir et req.params
//mysql request join first name et last name + join Gpost_id à user_id

//create post : le related_postID = Gpost_id !

/*exports.modifyPost = (req, res) => {
    const GroupomaniaPost = req.file ?
      {
        ...JSON.parse(req.body), //req.body.sauce
        Gpost_media: `${req.protocol}://${req.get('host')}/media/${req.file.filename}`
      } : { ...req.body };
      Gpost.updateOne({ Gpost_id: req.params.id }, { ...GroupomaniaPost, Gpost_id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post correctement modifié !'}))
        .catch(error => res.status(400).json({ error }));
};*/

/*
if user_admin = true pour  delete les commentaires */ //modify et delete !

/*exports.deletePost = (req, res) => {
    //supprimer le post et son image et ses commentaires dont related_postId = Gpost_Id
};*/