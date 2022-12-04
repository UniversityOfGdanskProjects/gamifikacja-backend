'use strict';
const {User} = require('../Model/userModel')
const { v4: uuidv4 } = require('uuid');
const {signupMail} = require('../Utils/emailSender')
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
        // console.log(user);
        await signupMail(email, newUser.val_id)
        return {status: 200, message: `user ${name} saved to DB, check your email: ${email}`}
    }
    catch (error) {
        console.log(error);
        return{status: 501, message: error.message}
    }
}

exports.verifyUser = async (id) => {
    try {
        await User.findOneAndUpdate({val_id: id}, {$set: {active: true}})  
        const {name} = await User.findOne({val_id: id})
        return {status:200, message: `${name} is now activated`}
    } catch (error) {
        return {status:404, message: `user not found`}
    }
    
}