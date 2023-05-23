const client = require('twilio')(process.env.accountSid, process.env.authToken);

export default async function handler(req, res) {

  try {

    if (req.method === "POST") {

      client.messages.create({
        to: process.env.number,
        from: process.env.sender,
        body: `${req.body[0].description}`
      }).then(function(message) {
        res.status(200);
      });

    };
  }

  catch (err) { console.log(err) }

}
