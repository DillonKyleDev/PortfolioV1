const express= require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.json());


//routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dillonkyleportfolio@gmail.com',
      pass: 'sdflky5543Ekrke$343'
    }
  });
  const mailOptions = {
    from: `${req.body.personName}: ${req.body.email}`,
    to: 'dillonkyleportfolio@gmail.com',
    subject: `Message from ${req.body.email} Subject: ${req.body.subject}`,
    text: req.body.message
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
      res.send('error occured');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('success');
    }
  })
})
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})