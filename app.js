'use strict';

//Standard express boilerplate
const express = require('express');
const app = express();
app.use(express.json());
const {PORT} = require('./config/variables')

//Controllers Imports
const registerRouter = require('./Routes/register')

// controller routes
app.use('/register',registerRouter);
async function start() {
    const db = require('./config/database');
    await db.connectDB()
    app.listen(PORT)
}
start();