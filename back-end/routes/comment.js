const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.get('/:Gpost_id', /*auth,*/ commentCtrl.getAllRelatedComments);
router.post('/:user_email', /*auth,*/ commentCtrl.createComment);
router.delete('/:user_email/:comment_id', /*auth,*/ commentCtrl.deleteComment);

module.exports = router;

//régler problèmes de back-end, ceux qui sont possibles (delete user + post) MAS PAS comment
//lire docu sur vue.js 3
//régler pb de front-end
//commencer à rédiger le code javascript des différentes pages en commencant par signup.vue
//APRES AVOIR testé la requete dans POSTMAN et avoir copié le code au format JSON