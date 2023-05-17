

export default async function handler(req, res) {

  try {
    if (req.method === "POST") {

      let webhook_data = req.body

      console.log(webhook_data)
      console.log(webhook_data.description)

      // const client = require('twilio')(process.env.accountSid, process.env.authToken);
      
      // client.messages
      //     .create({
      //                 to: `+${process.env.number}`
      //     })
      //     .then(message => console.log(message.sid))
      //     .done();
      res.status(200)
    };

  }

  catch (err) { console.log(err) }
}



