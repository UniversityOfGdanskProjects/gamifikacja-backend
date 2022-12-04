'use strict';
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'ugamifikacja@gmail.com',
        pass: 'nrxrclddahwxllil',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

const mailData = {
    from: 'ugamifikacja@gmail.com',
    subject: 'Rejestracja w serwisie'
}

module.exports = {transporter,mailData};