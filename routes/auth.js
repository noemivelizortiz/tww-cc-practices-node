const express = require('express');
const { loginCtrl, registerCtrl } = require('../controllers/auth')
const  router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/auth');

/**
 * crear un registro
 */
 

router.post('/register', validatorRegister, registerCtrl);

router.post('/login', validatorLogin, loginCtrl);



 module.exports = router;                  