const nodemailer = require("nodemailer");


const mailHelper = async ({ email, subject, message }) =>{
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

    const mailOptions = {
        from: 'goswamiatmik@gmail.com', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res
                .status(500)
                .send(error.toString())
      } else {
        console.log('Email sent: ', info.response);
        return res
                .status(200)
                .send('The OTP was sent successfully. Please check your email.')
      }
    });
}

module.exports = mailHelper