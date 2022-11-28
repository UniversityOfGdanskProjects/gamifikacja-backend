'use strict';
const express = require('express');
const router = express.Router();
const registerController = require('../Controller/registerController');

router.post('/signup',registerController.signUp);

module.exports = router;
