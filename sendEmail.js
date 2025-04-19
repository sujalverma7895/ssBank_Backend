const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, 
  auth: {
    user: "sujalsoni7895@gmail.com",
    pass: "dzhgxpulcwxacoof",
  },
});

async function main(emailId , content) {
  try {
    const info = await transporter.sendMail({
      from: 'sujalsoni7895@gmail.com', 
      to: emailId, 
      subject: 'Welcome to SS Bank!', 
      text: content,
      html:content,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = main;
