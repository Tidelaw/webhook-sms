const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env['sender_email']}`,
        pass: `${process.env['email_password']}`
    }
});

export default async function handler(req, res) {

    try {

        if (req.method === "POST") {

            let mailOptions = {
                from: `${process.env['sender_email']}`,
                to: `${process.env['receiver_email']}`,
                subject: 'Sending Email using Node.js',
                text: req.body[0].description
            };
            
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    res.status(200).json("Success!");
                }
            })
        };
    }

    catch (err) { console.log(err) }

}
