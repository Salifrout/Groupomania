const Comment = require('../models/comment');
const Gpost = require('../models/groupomania-post');
const cryptojs = require('crypto-js');
const User = require ('../models/user');

exports.getAllRelatedComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({where: { related_postId: req.params.Gpost_id}, order: [['comment_date', 'ASC']], raw: true });
        return res.status(200).json(comments);
    } catch {
        res.status(404).json({ err });
        throw err;
    }
};

exports.createComment = (req, res) => {
    const emailCryptoJs = cryptojs.HmacSHA256(req.params.user_email, process.env.EMAIL_PROTECTED).toString();
    User.findOne({ where: {user_email: emailCryptoJs}, raw: true })
        .then((User) => {
            const firstname = User.user_firstname;
            const lastname = User.user_lastname;
            const comment = new Comment ({
                comment_text: req.body.comment_text,
                comment_firstname: firstname,
                comment_lastname: lastname,
                related_userEmail: req.params.user_email,
                related_postId: req.body.Gpost_id
            })
            comment.save()
                .then(() => res.status(201).json({ message: 'Commentaire correctement enregistré !'}))
                .catch(error => res.status(401).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    }
;

exports.deleteComments = (req, res) => {
    try {
        const emailCryptoJs = cryptojs.HmacSHA256(req.params.user_email, process.env.EMAIL_PROTECTED).toString();
        User.findOne({ where: {user_email: emailCryptoJs}, raw: true })
        .then((User) => {
            if (User.user_admin === true || User.user_admin === 1) {
                Comment.destroy({ where: {related_postId: req.params.Gpost_id}, raw: true })
                .then(() => res.status(200).json({ message: 'Les commentaires ont été supprimés !'}))
                .catch(error => res.status(400).json({ error }));
            } else if (User.user_admin === false || User.user_admin === 0) {
                res.status(401).json ({ error: 'La requête n\'est pas authorisée aux utilisateurs ne disposant pas de privilèges administrateurs.'})
            } else {
                res.status(400).json({ error })
            }
        })
        .catch(error => res.status(400).json({ error }));
    } catch {
        return res.status(500).json({ error })
    }
};