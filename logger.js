const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abdulsalamlanre6@gmail.com",
    pass: "fzpgwwazvuuvxabi",
  },
});

const logger = (req, res, next) => {
  const { name, email, message, subject } = req.body;

  const mailOptions = {
    from: email,
    to: "abdulsalamlanre6@gmail.com",
    subject: subject,
    html: `
            <div>
                <h3>${subject}</h3>
                <p>
                    <b>Full Name: </b>${name}
                </p>
                <p>
                    <b>Email: </b>${email}
                </p>
                <p>
                    <b>Message: </b>${message}
                </p>
            </div>
            `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.sendFile(path.join(__dirname, "static", "mssError.html"));
    } else {
      console.log("Email sent: " + info.response);
      return res.sendFile(path.join(__dirname, "static", "mss.html"));
    }
  });

  next();
};

module.exports = logger;
