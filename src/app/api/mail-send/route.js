import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.HOST_NAME,
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASS,
    },
});

export async function POST(req) {
    try {
        const info = await req.json();
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
                return NextResponse.json(
                    { message: "Message sent successfully" },
                    { status: 200 }
                );
            } else {
                return NextResponse.json(
                    { message: "Fail to send message" },
                    { status: 400 }
                );
            }
        } catch (error) {
            return NextResponse.json(
                { message: "Fail to send message" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.log(error);
        return NextResponse.error("Internal Server Error");
    }
}

export const dynamic = "force-dynamic";