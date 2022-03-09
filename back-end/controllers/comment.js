const Comment = require('../models/comment');
const Gpost = require('../models/groupomania-post');


exports.getAllRelatedComments = (req, res) => {
    /*const MySQL_request = 'SELECT * FROM `comment` WHERE `related_postId` = ' + req.params.Gpost_id + 'ORDER BY `comment_date` DESC';
    sequelize.query(MySQL_request, (err, result) => {

        if (err) {
            res.status(404).json({ err});
            throw err;
        }
        res.status(200).json(result);
    });*/
    try {
        const comments = Comment.findAll({where: { related_postId: req.params.Gpost_id}, order: ['comment_date', 'DESC'], raw: true });
        return res.status(200).json(comments);
    } catch {
        res.status(404).json({ err });
        throw err;
    }
};

exports.createComment = (req, res) => {
    Gpost.findOne({ Gpost_id: req.params.Gpost_id })
        .then(() => {
            const comment = new Comment ({
                comment_text: req.body.comment_text,
                comment_firstname: req.body.comment_firstname,
                comment_lastname: req.body.comment_lastname,
                related_userId: req.body.related_userId,
                related_postId: req.params.Gpost_id
            })
            comment.save()
                .then(() => res.status(201).json({ message: 'Commentaire correctement enregistré !'}))
                .catch(error => res.status(401).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    }
;

exports.deleteComment = (req, res) => {
    //action prévue uniquement pour les admin

    //vérifier si user-admin: true (if)
        //try

        //catch

    //si user-admin: false (else if) rejeter car pas authorisé

    //(else) error

};