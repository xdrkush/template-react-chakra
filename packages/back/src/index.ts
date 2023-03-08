import express from "express";
import path from "path";
import cors from "cors";
import * as nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

require('dotenv').config();
const { DEV, PROD, DOMAIN, DOMAIN_DEV, PORT, MAIL_SERVICE, MAIL_HOST, MAIL_PORT, MAIL_CLIENT, MAIL_PASSWORD, MAIL_TO } = process.env;

const app = express()

// Body-Parser
app.use(express.json())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../front/build')));

// Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', DEV ? DOMAIN_DEV : DOMAIN);
    // res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Cors
app.use(cors({
    origin: "*",
    // origin: [
    //     'http://localhost:8080', 'http://localhost:3000', 'http://localhost', 'http://172.20.0.1',
    //     `http://${process.env.DOMAIN}`, `https://${process.env.DOMAIN}`, `http://www.${process.env.DOMAIN}`, `https://www.${process.env.DOMAIN}`
    // ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

let transporter = nodemailer.createTransport({
    service: MAIL_SERVICE,
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
        user: MAIL_CLIENT,
        pass: MAIL_PASSWORD
    },
    // tls: {
    //     ciphers: MAIL_TLS
    // }
} as SMTPTransport.Options);

app.post('/api/mail', async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('mail', req.body)

    let mailOptions = {
        from: `WEBSITE: <${email}>`,
        to: MAIL_TO,
        subject: `[WEBSITE] ${email} : ${subject}`,
        html: message
    };

    const mail = await transporter.sendMail(mailOptions);
    transporter.close();

    console.log('mail', mail)

    res.json({
        message: "Message envoyé !",
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../front/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`APP run on port: ${PORT}`)
})
