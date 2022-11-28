'use strict';
const {DB_PASSWORD} = require('../config/variables');
const registerService = require('../Service/registerService')
exports.signUp = (req,res) => {
    const result = registerService.saveUserToDB(req.body);
    res.json(result);
}

