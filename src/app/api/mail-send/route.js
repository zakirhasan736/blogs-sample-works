import { NextResponse } from "next/server";
import emailjs from 'emailjs-com';

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

        emailjs
            .send(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, {
                firstName,
                lastName,
                serviceType,
                industry,
                investmentRabge,
                bussinesSize,
                projectIdea,
                desc,
                PivacyCheckmark,
                call,
                email,
            })
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