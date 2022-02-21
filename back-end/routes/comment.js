const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.get('/comment/:related_postId', commentCtrl.getAllRelatedComments);
router.post('/comment', auth, commentCtrl.createComment);
router.delete('/comment/:comment_id', auth, commentCtrl.deleteComment);

module.exports = router;