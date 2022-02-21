const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');

router.get('/post', auth, postCtrl.getAllPosts);
router.get('/post/:Gpost_id', auth, postCtrl.getOnePost);
router.post('/post', auth, postCtrl.createPost);
router.put('/post/:Gpost_id', auth, postCtrl.modifyPost);
router.delete('/post/:Gpost_id', auth, postCtrl.deletePost);

module.exports = router;