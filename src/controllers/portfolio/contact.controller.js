const { MailtrapClient } = require("mailtrap");
require("dotenv").config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

const contactController = async (req, res, next) => {
  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      status: "failed",
      message: "All fields are required",
      fields: ["name", "email", "message"]?.filter((item) => !req.body[item]),
    });
  }

  const sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: process.env.MAILTRAP_RECIPIENT_MAIL,
    },
  ];

  const response = await client.send({
    from: sender,
    to: recipients,
    subject: `NEW CONTACT - ${name} - ${email}`,
    text: message,
    category: "Portfolio Contacts",
  });

  if (response?.success) {
    res.status(201).json({
      status: "success",
      message: "Your message has been received successfully.",
    });
  } else if (!response.success) {
    res.status(500).json({
      status: "failed",
      message: "Ooops! There was an error delivering your message",
    });
  }
};

module.exports = { contactController };
