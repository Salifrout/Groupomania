const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');

router.get('/', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.post('/:user_id', auth, postCtrl.createPost);
router.delete('/:user_id/:Gpost_id', auth, postCtrl.deletePost);

module.exports = router; 