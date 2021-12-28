const express= require('express');
const app = express();
const API_KEY = '2787179e050d585834d374729abeb7ac-fb87af35-3d7cadcf';
const DOMAIN = 'www.dillonkyleportfolio.com';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.json());


//routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  const data = {
    from: req.body.email,
    to: 'dillonkyleportfolio@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  };
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
    if(error) {
      console.log(error);
    }
  });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})