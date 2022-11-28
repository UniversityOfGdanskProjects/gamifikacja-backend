'use strict';
const mongoose = require('mongoose');
const {DB_PASSWORD, DB_USERNAME} = require('./variables')
const CONNECTION_STRING = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@pwasil.pl:27017/dev_gamifikacja`
let db;
module.exports.connectDB = async () => {
    const client = await mongoose.connect(CONNECTION_STRING)
  
    db = client
  }
  module.exports.getDB = () => {
    return db
  }

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));