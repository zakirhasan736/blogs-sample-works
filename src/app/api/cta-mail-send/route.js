import { NextResponse } from "next/server";
const emailjs = require("@emailjs/nodejs");

export async function POST(req) {
    try {
        const body = await req.json();

        const template_params = {
            from_name: `${body.fullName}`,
            to_name: "Particular",
            call: body.call,
            email: body.email,
            desc: body.desc,
        };

        const response = await emailjs.send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            template_params,
            {
                publicKey: process.env.PUBLIC_KEY,
                privateKey: process.env.PRIVATE_KEY,
            }
        );
        if (response.status === 200) {
            return NextResponse.json({
                status: 200,
                message: "Mail send successfully",
            });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            message: "Mail send failed",
        });
    }
}

export const dynamic = "force-dynamic";
