const {transporter,mailData} = require("../config/mail")
const {createMessage} = require("./mailTemplate");
const signupMail = async (receiver, id) => {
    const mailTemplate = {
        ...mailData,
        to: receiver,
        html: createMessage(id)
    }

    try {
        await transporter.sendMail(mailTemplate);
        return {message: 'Mail sent', status: 200}
    } catch (error) {
            return {message: error.message, status: 500}
    }
}

module.exports = {signupMail};