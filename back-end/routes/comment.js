const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.post('/post/:Gpost_id', auth, commentCtrl.createComment);
router.delete('/:comment_id', auth, commentCtrl.deleteComment);

module.exports = router;