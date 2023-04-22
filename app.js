const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
PORT = 3000



// using ethereal.email : read Readme.md to use yourself
app.get('/',(req,res) =>{
    res.send('server is running')
})

app.get('/mail',async (req,res) =>{

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'audra.purdy75@ethereal.email',
            pass: 'ABznTfknTGMtVKG4Gm'
        }

    });
    let info = await transporter.sendMail({
        from: '"Saranya" <saranyaa365@gmail.com>',
        to: "saranya.anandakumari@gmail.com",
        subject: "hello testing",
        html: "<b>Hello World</b>"
    });
    res.json(info)

    
})

// realtime email sender, localhost:3000/sendemail/yourGmailId@gmail.com , recommended video for password creating: https://youtu.be/thAP7Fvrql4

app.get('/sendmail/:email',async (req,res) =>{
        
    let mailTransporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'saranyaa365@gmail.com',
            pass:'bxdtqbyfedatgsqd'
        }
    })

    let details = await mailTransporter.sendMail({
        from:'from mail enter here', //enter your currect email
        to: req.params.email, //.....dont change.....
        subject:'Subject', //enter your subject
        html: "<b>Hello World</b>" //enter your email
    });
    res.json(details)
    

})







app.listen(PORT,()=>{
    console.log(`Server Is Running in ${PORT}`);
})