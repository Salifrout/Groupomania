const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.get('/:Gpost_id', auth, commentCtrl.getAllRelatedComments);
router.post('/:user_id', auth, commentCtrl.createComment);
router.delete('/:user_id/:Gpost_id', auth, commentCtrl.deleteComments);

module.exports = router;