const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/access/:user_email', auth, userCtrl.accessUserProfile);
router.get('/logout', auth, userCtrl.logout);
router.delete('/:user_email', /*auth,*/ userCtrl.deleteAccount);

module.exports = router;

/*
-régler protection des routes dans front-end avec vue js (essayer de le faire en renvoyant catch coté back si mdp correspond pas à email ou si email pas enregistré dans BDD)
-vérifier pk après avoir supprimé un compte user, parfois après back-end se crashe et on peut pas recréer compte et se connecter,etc ?
*/