'use strict';
const {DB_PASSWORD} = require('../config/variables');
const registerService = require('../Service/registerService')
exports.signUp = async (req, res) => {
    const result = await registerService.saveUserToDB(req.body);
    if(result.status === 200) res.status(200).json(result)
    else res.status(501).json(result)
}

