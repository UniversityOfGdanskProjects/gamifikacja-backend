'use strict';
const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    val_id: String,
    active: Boolean
})
const User = mongoose.model('User', userSchema);
module.exports = {User};