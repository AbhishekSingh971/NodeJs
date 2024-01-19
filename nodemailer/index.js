const nodemailer = require('nodemailer')


//connect with the smtp
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'abhitil654@gmail.com',
      pass: 'gvzs oysa scom cskj'
    }
  });
  
  var mailOptions = {
    from: '"Abhishek " <abhitil654@gmail.com>',
    to: 'nehasingh01756@gmail.com, abhitil654@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });