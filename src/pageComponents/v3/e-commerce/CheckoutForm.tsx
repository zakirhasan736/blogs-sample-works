"use client";

import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CheckoutFormProps {
	planId: string | undefined;
	packageTitle: string | undefined;
	packagePrice: string | undefined;
	addons: any[];
	totalPrice: string | undefined;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
	planId,
	packageTitle,
	packagePrice,
	addons,
	totalPrice,
}) => {
	const stripe = useStripe();
	const elements = useElements();
	const router = useRouter();

	const [userDetails, setUserDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		packagePrice: "",
		packageTitle: "",
		address: "",
		contactNumber: "",
		totalPrice,
	});
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setUserDetails(prevDetails => ({
			...prevDetails,
			[name]: value,
		}));
	};

	const handlePaymentSubmit = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);

		if (!cardElement) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
			billing_details: {
				name: `${userDetails.firstName} ${userDetails.lastName}`,
				email: userDetails.email,
				address: {
					line1: userDetails.address,
				},
				phone: userDetails.contactNumber,
			},
		});

		if (error) {
			console.error("Error creating payment method:", error);
			return;
		}
		// Convert totalPrice to the smallest currency unit
		const amountInPence = Math.round(parseFloat(totalPrice || "0"));
		const response = await fetch("/api/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				paymentMethodId: paymentMethod?.id,
				firstName: userDetails.firstName,
				lastName: userDetails.lastName,
				email: userDetails.email,
				contactNumber: userDetails.contactNumber,
				amount: amountInPence,
				currency: "GBP",
				planId,
				packageTitle,
				packagePrice,
				addons,
				totalPrice,
			}),
		});
		const res = await response.json();

		if (res.status === 200) {
			router.push("/e-commerce/confirmation");
		} else {
			console.error("Error processing payment and sending email");
			setErrorMessage(
				res.message || "Error processing payment and sending email",
			);
			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);
		}
	};

	const cardElementOptions = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#aab7c4",
				},
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	return (
		<>
			<form onSubmit={handlePaymentSubmit}>
				<div className="user-payment-detail-box overflow-hidden grid grid-cols-12 gap-0 sm:block">
					<div className="form-row flex sm:!flex-col item-start gap-6 mb-4 col-span-12 sm:col-span-6">
						<div className="input-group input-data">
							<input
								className="px-2 py-3"
								type="text"
								id="firstName"
								name="firstName"
								value={userDetails.firstName}
								onChange={handleInputChange}
								placeholder="First Name"
								required
							/>
						</div>
						<div className="input-group input-data">
							<input
								className="px-2 py-3"
								type="text"
								id="lastName"
								name="lastName"
								value={userDetails.lastName}
								onChange={handleInputChange}
								required
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div className="form-row flex sm:!flex-col item-start gap-6 col-span-12 sm:col-span-6">
						<div className="input-group input-data">
							<input
								className="px-2 py-3 sm:!h-8"
								type="email"
								id="email"
								name="email"
								value={userDetails.email}
								onChange={handleInputChange}
								required
								placeholder="Email Address"
							/>
						</div>
						<div className="input-group input-data">
							<input
								className="px-2 py-3"
								type="text"
								id="contactNumber"
								name="contactNumber"
								value={userDetails.contactNumber}
								onChange={handleInputChange}
								required
								placeholder="Phone Number"
							/>
						</div>
					</div>

					<div className="stripe-card-details-box mt-8 col-span-12 sm:col-span-6">
						<CardElement options={cardElementOptions} />
						{errorMessage && (
							<>
								<div
									className={`popup-massage-box fixed top-[100px] right-[-100%] max-w-[30%] w-full flex items-center justify-between border border-[#666] rounded-[4px] px-4 py-5 ${errorMessage ? "error-massage-show" : ""}`}>
									<p className="body-regular-1 text-mono-100 flex items-center gap-2">
										<Image
											src="/images/packages/error_icon.png"
											width={48}
											height={48}
											className="w-6 h-6"
											alt="error icon image"
										/>{" "}
										<span>Error processing payment</span>
									</p>
									<button
										className="rounded-full !h-6 w-6 text-[25px] text-mono-100"
										onClick={() => setErrorMessage(null)}>
										<Image
											src="/images/packages/close-icon.png"
											width={30}
											height={30}
											className="w-5 h-5"
											alt="close icon image"
										/>
									</button>
								</div>
							</>
						)}
					</div>
					<button
						type="submit"
						className="pay-button col-span-6 sm:col-span-6 bg-mono-100 h-12 max-w-full w-full text-[14px] font-normal font-accent rounded-[4px] mt-[44px] text-white sm:!h-12">
						Pay £{totalPrice}
					</button>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
