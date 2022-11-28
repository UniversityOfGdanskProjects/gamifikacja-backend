'use strict';
require('dotenv').config()
const {DB_PASSWORD} = process.env;
const {PORT} = process.env;
const {DB_USERNAME} = process.env;

module.exports = {DB_PASSWORD, PORT, DB_USERNAME};