const sequelize = require("../utils/database");
const Gpost = require('../models/groupomania-post');
const User = require ('../models/user');
const Comment = require('../models/comment');

exports.getAllPosts = async (req, res) => {
    const result = await Gpost.findAll({
        order: [
            ['Gpost_date', 'DESC']
        ],
        raw: true
    });
    return res.status(200).json(result);
}

exports.getOnePost = (req, res) => {
    Gpost.findOne({ where: {Gpost_id: req.params.id}, raw: true })
        .then(Gpost => res.status(200).json(Gpost))
        .catch(error => res.status(500).json({ error }));
};
 
exports.createPost = (req, res) => {
    User.findOne({ where: {user_id: req.params.user_id}, raw: true })
        .then((User) => {
            const firstname = User.user_firstname;
            const lastname = User.user_lastname;
            const post = new Gpost({
                Gpost_title: req.body.Gpost_title,
                Gpost_text: req.body.Gpost_text,
                Gpost_firstNameAuthor: firstname,
                Gpost_lastNameAuthor: lastname
                })
            ;
            post.save()
                .then(() => res.status(201).json({ message: 'Poste correctement enregistré !'}))
                .catch(error => res.status(401).json({ error }));
            })
        .catch(error => res.status(500).json({ error })); 
    }
;

exports.deletePost = (req, res) => {
try {
        User.findOne({ where: {user_id: req.params.user_id}, raw: true })
        .then((User) => {
            if (User.user_admin === true || User.user_admin === 1) {
                Comment.destroy({ where: {related_postId: req.params.Gpost_id}, raw: true })
                .then(() => Gpost.destroy({ where: {Gpost_id: req.params.Gpost_id}, raw: true }))
                .then(() => res.status(200).json({ message: 'Le post et ses commentaires ont été supprimés !'}))
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