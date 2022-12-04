'use strict';
const {User} = require('../Model/userModel')
const { v4: uuidv4 } = require('uuid');

exports.saveUserToDB = async (req) => {
    const {name,password,email} = req;
    const newUser = new User({
        name: name,
        password: password,
        email: email,
        role: "USER",
        active: false,
        val_id: uuidv4()
    })

    try {
        const user = await newUser.save()
        console.log(user);
        return {status: 200, message: `user ${name} saved to DB, check your email: ${email}`}
    }
    catch (error) {
        console.log(error);
        return{status: 501, message: error.message}
    }
}