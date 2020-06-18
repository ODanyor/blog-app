const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

exports.sendMail = async (to, subject, text, message) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: "Otamurodov Doniyor(Developer)", // sender address
    to, // list of receivers
    subject, // Subject line
    text,
    html: `<h1>${message}</h1>`, // html body
  });
};
