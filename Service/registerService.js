'use strict';
const {User} = require('../Model/userModel')
const { v4: uuidv4 } = require('uuid');
const client = require('../config/database')

exports.saveUserToDB = (req) => {
    const {name,password,email} = req;
    const newUser = new User({
        name: name,
        password: password,
        email: email,
        active: false,
        val_id: uuidv4()
    })

    return newUser.save((err,res) => {
        err ? err : res;
    })
}