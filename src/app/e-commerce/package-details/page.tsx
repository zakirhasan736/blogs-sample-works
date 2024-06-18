"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Removed useRouter import
import Link from "next/link"; 
import packagesData from "@data/package-data/package-data.json";

interface Addon {
	category: any;
	name: string;
	price: number;
	selected: boolean;
}

interface Package {
	id: number;
	title: string;
	price: number;
	idealFor: string;
	includes: string[];
	addons: Addon[];
	bgColor: string;
	imgSrc: string;
	packageLogo: string;
	buttonLabel: string;
	btnType: string;
	category: string;
	popular: boolean;
}

const PlanDetails: React.FC = () => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const router = useRouter();

	const [selectedPlan, setSelectedPlan] = useState<Package | null>(null);
	const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [relatedPackages, setRelatedPackages] = useState<Package[]>([]);
	const [openAccordions, setOpenAccordions] = useState<string[]>([]);
	useEffect(() => {
		if (id) {
			const plan = packagesData.find(p => p.id === parseInt(id));
			if (plan) {
				setSelectedPlan(plan);
				// Load selected addons and total price from local storage if available
				const savedAddons = localStorage.getItem(`selectedAddons_${plan.id}`);
				const savedTotalPrice = localStorage.getItem(`totalPrice_${plan.id}`);
				if (savedAddons && savedTotalPrice) {
					setSelectedAddons(JSON.parse(savedAddons));
					setTotalPrice(parseFloat(savedTotalPrice));
				} else {
					setSelectedAddons([]);
					setTotalPrice(plan.price);
				}
				setOpenAccordions([]);
				const related = packagesData.filter(p => p.id !== plan.id);
				setRelatedPackages(related);
			}
		}
	}, [id]);

	useEffect(() => {
		if (selectedPlan) {
			// Save selected addons and total price to local storage
			localStorage.setItem(
				`selectedAddons_${selectedPlan.id}`,
				JSON.stringify(selectedAddons),
			);
			localStorage.setItem(
				`totalPrice_${selectedPlan.id}`,
				totalPrice.toString(),
			);
		}
	}, [selectedAddons, totalPrice, selectedPlan]);

	const handleAddonChange = (addon: Addon, isChecked: boolean) => {
		let updatedAddons;
		if (isChecked) {
			updatedAddons = [...selectedAddons, addon];
			setTotalPrice(totalPrice + addon.price);
		} else {
			updatedAddons = selectedAddons.filter(a => a.name !== addon.name);
			setTotalPrice(totalPrice - addon.price);
		}
		setSelectedAddons(updatedAddons);
	};

	const handleAccordionToggle = (category: string) => {
		if (openAccordions.includes(category)) {
			setOpenAccordions(openAccordions.filter(c => c !== category));
		} else {
			setOpenAccordions([...openAccordions, category]);
		}
	};

	const getLowestPrice = (category: string) => {
		const addons =
			selectedPlan?.addons.filter(addon => addon.category === category) || [];
		return Math.min(...addons.map(addon => addon.price));
	};
const handlePaymentSuccess = () => {
	// Clear local storage on payment success
	if (selectedPlan) {
		localStorage.removeItem(`selectedAddons_${selectedPlan.id}`);
		localStorage.removeItem(`totalPrice_${selectedPlan.id}`);
	}
};

	if (!selectedPlan) return <div>Loading...</div>;

	const categorizedAddons = selectedPlan.addons.reduce(
		(acc: { [key: string]: Addon[] }, addon: Addon) => {
			if (!acc[addon.category]) acc[addon.category] = [];
			acc[addon.category].push(addon);
			return acc;
		},
		{},
	);


	return (
		<div className="package-details-main-wrapper bg-white text-mono-100 pt-[199px]">
			<div className="custom-container">
				<section className="flex items-start gap-6 sm:flex-col pb-[84px]">
					<div className="w-full">
						<ul className="breadcrump-box mb-2 !flex items-center gap-3 border-b w-full border-b-[#CBD7E3]">
							<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] md:text-[14px] leading-[150%] pb-2">
								Purchase
							</li>
							<li className="relative top-[-4px]">{">"}</li>
							<li className="breadcrump-list-item text-[#666] opacity-100 font-accent font-normal text-[18px] md:text-[14px] leading-[150%] pb-2">
								Checkout
							</li>
							<li className="relative top-[-4px]">{">"}</li>
							<li className="breadcrump-list-item text-[#666] opacity-100 font-accent font-normal text-[18px] md:text-[14px] leading-[150%] pb-2">
								Confirmation
							</li>
						</ul>
						<div className="package-plan-details">
							<div className="plan-details-container pt-6">
								<div className="plan-details-header flex items-start mb-4 gap-4 md:gap-6 md:flex-col">
									<img
										src={`/images/packages/${selectedPlan.packageLogo}`}
										alt={selectedPlan.title}
										className="w-[154px] h-[87px]"
									/>
									<div className="w-full"> 
										<div className="title-and-price-box w-full !flex sm:!items-start items-center justify-between">
											<h1 className="!text-mono-100  !opacity-100 !font-accent !font-medium !text-[18px] !leading-[150%]">
												Particular Lite{" "} <br className="hidden md:block" />
												<span className="text-[#026FEE]">
													{selectedPlan.title}
												</span>
											</h1>
											<p className="body-bold-regular-1 text-mono-100 font-accent">
												£{selectedPlan.price.toFixed(2)}
											</p>
										</div>
										<p className="package-type body-regular-2 text-mono-100 sm:mt-4">
											Web Package
										</p>
										<ul className="list-disc package-info-include-list mt-4 flex items-center sm:items-start  gap-[6px] flex-wrap">
											{selectedPlan.includes.map((item, idx) => (
												<li
													className="text-[#666] pl-2 text-[12px] font-normal font-accent leading-[150%]"
													key={idx}>
													{item}
												</li>
											))}
											{selectedAddons.map((addon, idx) => (
												<li
													className="selected-audition-addons-item flex items-center gap-1 text-[12px] font-normal font-accent leading-[150%] text-[#026FEE]"
													key={idx}>
													{addon.name}
													<button
														className="delet-select-item !h-auto"
														onClick={() => handleAddonChange(addon, false)}>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none">
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M9.51947 1.33203C10.0934 1.33203 10.6029 1.69927 10.7844 2.24372L11.1472 3.33203H13.3333C13.7015 3.33203 14 3.63051 14 3.9987C14 4.36688 13.7015 4.66536 13.3333 4.66536H12.6667V12.6654C12.6667 13.77 11.7713 14.6654 10.6667 14.6654H5.33333C4.22877 14.6654 3.33333 13.77 3.33333 12.6654V4.66536H2.66667C2.29848 4.66536 2 4.36688 2 3.9987C2 3.63051 2.29848 3.33203 2.66667 3.33203H4.85283L5.21559 2.24372C5.39708 1.69927 5.9066 1.33203 6.48051 1.33203H9.51947ZM11.3333 4.66536H4.66667V12.6654C4.66667 13.0336 4.96515 13.332 5.33333 13.332H10.6667C11.0349 13.332 11.3333 13.0336 11.3333 12.6654V4.66536ZM9.51947 2.66536H6.48051L6.25829 3.33203H9.74173L9.51947 2.66536Z"
																fill="#026FEE"
															/>
														</svg>
													</button>
												</li>
											))}
										</ul>
									</div>
								</div>
								<p className="text-ideal-suggestion mb-2">
									<span className="text-mono-100 text-[12px] font-semibold font-accent leading-[150%]">
										Ideal for:
									</span>{" "}
									<span className="text-mono-100 text-[12px] font-normal font-accent leading-[150%]">
										{selectedPlan.idealFor}
									</span>
								</p>
								<p className="text-mono-100 text-[12px] sm:mt-3 font-normal font-accent leading-[150%]">
									Delivered to completion in 4-6 weeks subject to availability.
								</p>

								<div className="additional-addons-details-box mt-[43px]">
									<h3 className="pb-2 w-full body-bold-regular-1 !font-accent text-mono-100 font-medium">
										Accelerated Web Package Add-ons:
									</h3>
									{Object.entries(categorizedAddons).map(
										([category, addons]) => (
											<div
												className="package-customization mb-5 border-t border-t-[#CBD7E3]"
												key={category}>
												<button
													className="accordion-header !flex  items-center justify-between w-full"
													onClick={() => handleAccordionToggle(category)}>
													<span className="accordion-title  body-bold-regular-2 font-semibold">
														{category}{" "}
														<span className="body-regular-2 text-[#4D4D4D] font-normal !font-accent">
															(from £{getLowestPrice(category).toFixed(2)})
														</span>
													</span>
													<span className="accordion-icon text-[#026FEE] text-[26px]">
														{openAccordions.includes(category) ? "-" : "+"}
													</span>
												</button>
												{openAccordions.includes(category) && (
													<div className="accordion-content py-4">
														{addons.map((addon, idx) => (
															<label
																className="addon-item !flex flex-col items-start gap-1 mb-4"
																key={idx}>
																<div className="checkbox-select-package body-regular-2 !flex items-center gap-2">
																	<input
																		type="checkbox"
																		checked={selectedAddons.some(
																			a => a.name === addon.name,
																		)}
																		onChange={e =>
																			handleAddonChange(addon, e.target.checked)
																		}
																	/>
																	<p className="addon-title font-accent text-[14px] leading-[150%]">
																		{addon.name}
																		<button className="info-modal-view relative top-[-6px] !h-auto">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width="16"
																				height="16"
																				viewBox="0 0 16 16"
																				fill="none">
																				<path
																					d="M7.99998 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99998 14.6654C4.31808 14.6654 1.33331 11.6806 1.33331 7.9987C1.33331 4.3168 4.31808 1.33203 7.99998 1.33203ZM7.99998 2.66536C5.05446 2.66536 2.66665 5.05318 2.66665 7.9987C2.66665 10.9442 5.05446 13.332 7.99998 13.332C10.9455 13.332 13.3333 10.9442 13.3333 7.9987C13.3333 5.05318 10.9455 2.66536 7.99998 2.66536ZM7.99331 6.66536C8.36518 6.66536 8.66665 6.96683 8.66665 7.3387V10.7546C8.86591 10.8698 8.99998 11.0853 8.99998 11.332C8.99998 11.7002 8.70151 11.9987 8.33331 11.9987H8.00665C7.63471 11.9987 7.33331 11.6972 7.33331 11.3254V7.9987C6.96511 7.9987 6.66665 7.70023 6.66665 7.33203C6.66665 6.96383 6.96511 6.66536 7.33331 6.66536H7.99331ZM7.99998 4.66536C8.36818 4.66536 8.66665 4.96384 8.66665 5.33203C8.66665 5.70022 8.36818 5.9987 7.99998 5.9987C7.63178 5.9987 7.33331 5.70022 7.33331 5.33203C7.33331 4.96384 7.63178 4.66536 7.99998 4.66536Z"
																					fill="#026FEE"
																				/>
																			</svg>
																		</button>
																	</p>
																</div>
																<p className="addon-price font-accent body-regular-2 text-[14px] leading-[150%] text-[#026FEE]">
																	+ £{addon.price.toFixed(2)}
																</p>
															</label>
														))}
													</div>
												)}
											</div>
										),
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[371px] w-full sm:max-w-full sticky top-10 sm:relative sm:top-0">
						<div className="package-plan-price-details">
							<h5 className="body-bold-medium text-mono-100 opacity-100 font-accent font-medium text-[18px] leading-[150%] pb-2 border-b w-full border-b-[#CBD7E3]">
								Summary
							</h5>
							<div className="price-details-list-item mt-6 !flex justify-between items-center pb-[30px] gap-3 border-b w-full border-b-[#CBD7E3]">
								<p className="body-regular-1 text-mono-100">
									Particular Lite {selectedPlan.title}
								</p>
								<p className="package-original-price body-bold-regular-1 font-accent text-right">
									£{selectedPlan.price.toFixed(2)}
								</p>
							</div>
							<div className="addons-list-box mt-4 border-b w-full border-b-[#CBD7E3] pb-4">
								<h6 className="addons-main-title mb-3 text-[#4D4D4D] text-[12px] font-normal font-accent leading-[150%]">
									{selectedAddons.length} Add-ons:
								</h6>
								<ul className="selected-addons-list">
									{selectedAddons.map((addon, idx) => (
										<li
											className="addons-list-item gap-2 !flex justify-between items-center mb-2"
											key={idx}>
											<p className="body-regular-1 addons-name text-mono-100">
												{addon.name}
											</p>
											<p className="addons-price body-bold-regular-1 font-accent text-right">
												£{addon.price.toFixed(2)}
											</p>
										</li>
									))}
								</ul>
							</div>
							<div className="price-details-list-item mt-5 gap-3 !flex justify-between items-center mb-10">
								<p className="body-regular-1 text-mono-100">Total</p>
								<p className="package-total-price body-bold-regular-1 font-accent text-right">
									£{totalPrice.toFixed(2)}
								</p>
							</div>

							<Link
								href={{
									pathname: "/e-commerce/checkout",
									query: {
										planId: selectedPlan.id,
										packageTitle: selectedPlan.title,
										packagePrice: selectedPlan.price.toFixed(2),
										addons: JSON.stringify(selectedAddons),
										totalPrice: totalPrice.toFixed(2),
									},
								}}
								className="btn w-full h-12 !bg-mono-100 flex items-center capitalize justify-center !text-white hover:!opacity-70">
								Checkout
							</Link>
						</div>
					</div>
				</section>
				<section className="related-package-section pb-[87px]">
					<h3 className="related-package-title body-bold-regular-1 !font-accent text-mono-100 pt-[18px] border-t border-t-[#CBD7E3]">
						Other Web Packages
					</h3>
					<div className="related-package-grid-box grid grid-cols-12 gap-6 sm:grid-cols-6">
						{relatedPackages.map(pkg => (
							<div
								key={pkg.id}
								className="related-package-card-item col-span-3 md:col-span-4 mt-6">
								<img
									src={`/images/packages/${pkg.packageLogo}`}
									alt={pkg.title}
									className="w-[154px] h-[87px]"
								/>
								<h4 className="package-title text-mono-100 max-w-[188px] opacity-100 font-accent font-medium text-[18px] leading-[150%] mt-6">
									Particular Lite <br />
									<span className="text-[#026FEE]">{pkg.title}</span>
								</h4>
								<ul className="package-includes-items pl-5 mt-4 flex flex-col gap-[6px]">
									{pkg.includes.map((item, idx) => (
										<li
											className="text-[#666] pl-2 !list-disc text-[12px] font-normal font-accent leading-[150%]"
											key={idx}>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default PlanDetails;
