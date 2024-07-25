import { NextResponse } from "next/server";

const emailjs = require("@emailjs/nodejs");

export async function POST(req) {
  try {
    const body = await req.json();

    const template_params = {
      to_name: "Particular",
      email: body.email,
    };

    const response = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID_2,
      template_params,
      {
        publicKey: process.env.PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
      }
    );
    if (response.status === 200) {
      return NextResponse.json({
        status: 200,
        message: "Subcription Successfully",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Subcription failed",
    });
  }
}

// export const dynamic = "force-dynamic";
