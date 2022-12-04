'use strict';
const express = require('express');
const router = express.Router();
const registerController = require('../Controller/registerController');

router.get('/verify/:id', registerController.verifyUser);

router.post('/signup',registerController.signUp);

module.exports = router;
