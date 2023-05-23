// Paste into a repl.it to run (will need to add .env variables)

const client = require('twilio')(process.env['accountSid'], process.env['authToken']);
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhooks", async (req, res) => {

  const { body } = req;

  client.messages.create({
    to: process.env['number'],
    from: process.env['sender'],
    body: `${body[0].description}`
  }).then( () => { res.status(200).json("Success!") });
  
});

app.listen(3000);