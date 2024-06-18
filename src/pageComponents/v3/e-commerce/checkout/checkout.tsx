"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";


const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_P_KEY as string,
);

const Checkout: React.FC = () => {
	const searchParams = useSearchParams();
	const [planId, setPlanId] = useState<string | undefined>();
	const [packageTitle, setpackageTitle] = useState<string | undefined>();
	const [packagePrice, setpackagePrice] = useState<string | undefined>();
	const [addons, setAddons] = useState<any[]>([]);
	const [totalPrice, setTotalPrice] = useState<string | undefined>();
 const [errorMessage, setErrorMessage] = useState("");
	useEffect(() => {
		const planId = searchParams.get("planId");
		const addons = searchParams.get("addons");
		const totalPrice = searchParams.get("totalPrice");
		const packagePrice = searchParams.get("packagePrice");
		const packageTitle = searchParams.get("packageTitle");

		if (planId) setPlanId(planId);
		if (packagePrice) setpackagePrice(packagePrice);
		if (packageTitle) setpackageTitle(packageTitle);
		if (addons) {
			try {
				setAddons(JSON.parse(addons));
			} catch (error) {
				console.error("Error parsing addons JSON:", error);
			}
		}
		
		if (totalPrice) setTotalPrice(totalPrice);
	}, [searchParams]);

	return (
		<div className="checkout-page-main-wrapper bg-white text-mono-100 pt-[199px]">
			<div className="custom-container">
				<ul className="breadcrump-box mb-8  items-center gap-3 border-b w-full border-b-[#CBD7E3] hidden sm:!flex">
					<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
						Purchase
					</li>
					<li className="relative top-[-4px]">{">"}</li>
					<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
						Checkout
					</li>
					<li className="relative top-[-4px]">{">"}</li>
					<li className="breadcrump-list-item text-[#666] opacity-100 font-accent font-normal text-[18px] sm:text-[14px] leading-[150%] pb-2">
						Confirmation
					</li>
				</ul>
				<section className="!flex sm:!flex-col-reverse items-start gap-6 pb-[84px]">
					<div className="w-full">
						<ul className="breadcrump-box mb-2 !flex items-center gap-3 border-b w-full border-b-[#CBD7E3] sm:!hidden">
							<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
								Purchase
							</li>
							<li className="relative top-[-4px]">{">"}</li>
							<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
								Checkout
							</li>
							<li className="relative top-[-4px]">{">"}</li>
							<li className="breadcrump-list-item text-[#666] opacity-100 font-accent font-normal text-[18px] sm:text-[14px] leading-[150%] pb-2">
								Confirmation
							</li>
						</ul>
						<div className="checkout-payment pt-[22px]">
							<h1 className="text-[#181725] opacity-100 !font-accent !font-medium !text-[18px] !leading-[150%] mb-[26px]">
								Payment details
							</h1>
							<Elements stripe={stripePromise}>
								<CheckoutForm
									planId={planId}
									packageTitle={packageTitle}
									packagePrice={packagePrice}
									addons={addons}
									totalPrice={totalPrice}
								/>
								{errorMessage && <div>{errorMessage}</div>}
							</Elements>
							<p className="pt-6 text-mono-100 text-[11px] font-accent font-normal leading-[150%] text-left">
								Your payment details are protected by our secure transaction
								method.
							</p>
						</div>
					</div>
					<div className="max-w-[371px] w-full sm:max-w-full sticky top-10 sm:relative sm:top-0">
						<div className="package-plan-price-details">
							<h5 className="body-bold-medium text-mono-100 opacity-100 font-accent font-medium text-[18px] leading-[150%] pb-2 border-b w-full border-b-[#CBD7E3]">
								Order Summary
							</h5>
							<div className="price-details-list-item mt-6 gap-3 !flex justify-between items-center pb-[30px] border-b w-full border-b-[#CBD7E3]">
								<p className="body-regular-1 text-mono-100">
									Particular Lite {packageTitle}
								</p>
								<p className="package-original-price body-bold-regular-1 font-accent text-right">
									£{packagePrice}
								</p>
							</div>
							<div className="addons-list-box mt-4 border-b w-full border-b-[#CBD7E3] pb-4">
								<h6 className="addons-main-title mb-3 text-[#4D4D4D] text-[12px] font-normal font-accent leading-[150%]">
									{addons.length} Add-ons:
								</h6>
								<ul className="selected-addons-list">
									{addons.map((addon, idx) => (
										<li
											className="addons-list-item gap-3 !flex justify-between items-center mb-2"
											key={idx}>
											<p className="body-regular-1 addons-name text-mono-100">
												{addon.name}
											</p>
											<p className="addons-price body-bold-regular-1 font-accent text-right">
												£{addon.price.toFixed(0)}
											</p>
										</li>
									))}
								</ul>
							</div>
							<div className="price-details-list-item mt-5 gap-3  !flex justify-between items-center mb-10">
								<p className="body-regular-1 text-mono-100">Total</p>
								<p className="package-total-price body-bold-regular-1 font-accent text-right">
									£{totalPrice}
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Checkout;
