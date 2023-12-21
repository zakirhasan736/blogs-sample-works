const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_NAME,
    pass: process.env.MAIL_PASS,
  },
});

export const useMailSender = async (info) => {
  const {
    firstName,
    lastName,
    call,
    email,
    serviceType,
    industry,
    investmentRabge,
    bussinesSize,
    projectIdea,
    desc,
    PivacyCheckmark,
  } = info;

  const mailOptions = {
    from: info.email,
    to: process.env.MAIL_NAME,
    subject: `New message from ${firstName + " " + lastName}`,
    html: `<div>
    <h4> ${firstName + " " + lastName}</h4>

    <p>ServiceType: ${serviceType}</p>

    <p>Industry: ${industry}</p>

    <p>Investment range: ${investmentRabge}</p>

    <h6>Bussiness size: ${bussinesSize}</h6>

    <p>Project idea: ${projectIdea}</p>

    <p>Description: ${desc}</p>

    <p>I accepted the , ${PivacyCheckmark}</p>
    <ul>
        <li>${call}</li>
        <li>${email}</li>
    </ul>
</div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    const responseParts = info.response.split(" ");
    const statusCode = responseParts[0];
    if (statusCode === "250") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
