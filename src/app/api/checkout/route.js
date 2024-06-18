import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import Stripe from "stripe";
const emailjs = require("@emailjs/nodejs");

const stripe = new Stripe(process.env.STRIPE_S_KEY, {
	apiVersion: "2020-08-27",
});

export async function POST(req) {
	try {
		const body = await req.json();


		// Create payment intent with Stripe
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(parseFloat(amount) * 100),
			currency,
			payment_method: paymentMethodId,
			confirm: true,
			automatic_payment_methods: {
				enabled: true,
			},
			return_url: `${process.env.NEXT_PUBLIC_API_URL}/confirmation`,
		});

		if (paymentIntent.status === "succeeded") {
			// Prepare email data
			const templateParams = {
				from_name: `${body.firstName} ${body.lastName}`,
				to_name: "Particular Lite",
				call: body.contactNumber,
				email: body.email,
				package_Type: body.packageTitle,
				package_Id: body.planId,
				package_price: body.packagePrice,
				addons: JSON.stringify(body.addons),
				packageTotalPrice: body.totalPrice,
			};

			// Send email using EmailJS
			const response = await emailjs.send(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID_2,
				templateParams,
				{
					publicKey: process.env.PUBLIC_KEY,
					privateKey: process.env.PRIVATE_KEY,
				},
			);

			if (response.status === 200) {
				return NextResponse.json({
					status: 200,
					message: "Mail send successfully",
				});
			}

			return NextResponse.json({
				message: "Payment successful and email sent",
				status: 200,
			});
		} else {
			return NextResponse.json({
				message: "Payment not successful",
				status: 400,
			});
		}
	} catch (error) {
		console.error("Error processing payment:", error);
		return NextResponse.json({
			status: 500,
			error: "Payment not successful",
		});
	}
}

export const dynamic = "force-dynamic";
