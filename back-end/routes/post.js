const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');

router.get('/', postCtrl.getAllPosts);
router.get('/:Gpost_id', postCtrl.getOnePost, commentCtrl.getAllRelatedComments);
router.post('/:user_id', auth, postCtrl.createPost);
//router.put('/post/:Gpost_id', auth, postCtrl.modifyPost);
/*router.delete('/post/:Gpost_id', auth, postCtrl.deletePost);*/

module.exports = router;