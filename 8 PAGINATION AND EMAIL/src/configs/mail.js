const nodemailser = require("nodemailer");

module.exports = nodemailser.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "871212eeeb395f", // generated ethereal user
      pass: "313cd29279a433", // generated ethereal password
    },
})