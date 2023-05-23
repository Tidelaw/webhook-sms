// Paste into a repl.it to run (will need to add .env variables)

const nodemailer = require('nodemailer');
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env['sender_email']}`,
    pass: `${process.env['email_password']}`
  }
});

app.post("/webhooks", async (req, res) => {
  const { body } = req;
  console.log(body)
  let mailOptions = {
    from: `${process.env['sender_email']}`,
    to: `${process.env['receiver_email']}`,
    subject: 'Sending Email using Node.js',
    text: body[0].description
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json("Success!");
    }
  })

});

app.listen(3000);

