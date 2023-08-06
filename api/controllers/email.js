app.post('/api/v1/contact', (req, res) => {
    var data = req.body;
    var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
    user: 'username',
    pass: 'password'
    }
    });
    var mailOptions = {
    from: data.email,
    replyto: data.email,
    to: 'goshareitio@gmail.com',
    subject: data.title,
    html: `<p>${data.email}</p>
    <p>${data.message}</p>`,
    attachments: [
    {
    filename: data.title + ".jpg",
    contentType:  'image/jpeg',
    content: new Buffer.from(req.body.image.split("base64,")[1], "base64"),
    }
    ]
    };
    smtpTransport.sendMail(mailOptions,
    (error, response) => {
    if (error) {
    res.status(400).send(error)
    } else {
    res.send('Success')
    }
    smtpTransport.close();
    });
    })