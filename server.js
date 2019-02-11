const next = require("next");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

app.prepare().then(() => {
  const server = express();
  const transport = {
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  };
  const transporter = nodemailer.createTransport(transport);

  transporter.verify(error => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  server.post("/sendemail", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    console.log(process.env);

    let content = `Name: ${name} \n Email: ${email} \n Subject: ${subject} \n Message: ${message} `;

    var mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message from AMINROSLAN : ${subject}`,
      text: content
    };

    transporter.sendMail(mail, err => {
      if (err) {
        res.json({
          msg: "fail"
        });
      } else {
        res.json({
          msg: "success"
        });
      }
    });
  });

  server.get("/posts/:slug", (req, res) => {
    return app.render(req, res, "/post", { title: req.params.slug });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
