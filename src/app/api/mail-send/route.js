import { NextResponse } from "next/server";
import { useMailSender } from "../../../libs/mailsender";

export async function POST(req) {
 
  try {
    const info = await req.json();

    const mailsent = await useMailSender(info);

    if (mailsent) {
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "Fail to send message" }, { status: 400 });
  } catch (error) {
    console.log(error);
    return NextResponse.error("Internal Server Error");
  }
}

export const dynamic = 'force-dynamic'