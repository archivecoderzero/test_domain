
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sendData = require('./contactform/sendData');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var msg = {
  to: 'archivecoderzero@gmail.com',
  from: sendData[0].email,
  subject: sendData[0].subject,
  text: sendData[0].message,
};

// const msg = {
//   to: 'archivecoderzero@gmail.com',
//   from: "testemail@abc.com",
//   subject: "test Subject",
//   text: "test te",
// };

function submit() { sgMail.send(msg);}

$(document).on("click", "#submit", submit);
