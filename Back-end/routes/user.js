const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const password = require('../middleware/password');
const email_ok = require('../middleware/email');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/user/:user_id/access', auth, userCtrl.accessUserProfile);
/* router.put('/user/:user_id/update', auth, userCtrl.updateUser); //ne peux pas changer mdp et email */
router.get('/user/logout', userCtrl.logout);
router.get('/user/delete', auth, userCtrl.deleteAccount);

module.exports = router;