"use client"; 
import React, { useState } from "react";
import "./Statistic.css";

const Statistic = () => {
	const [openAccordion, setOpenAccordion] = useState(Array(6).fill(false));

	const toggleAccordion = index => {
		const newAccordionState = [...openAccordion];
		newAccordionState[index] = !newAccordionState[index];
		setOpenAccordion(newAccordionState);
	};

	const accordions = Array(6).fill("Call Recording");

	return (
		<div className="statistic-section bg-[#fff]">
			<div className="statistic-section-container">
				<div className="workshop-description">
					<p>
						77% of consumers make purchases based on a brand name, and brands
						that inspire higher emotional intensity receive 3x the word-of-mouth
						marketing.
					</p>
					<p>
						Our free branding workshop is focused on one thing—giving you the
						clarity, insights, and tools you need to build a more effective
						brand.
					</p>
				</div>
				<div className="whats-included-section">
					<h3>What’s Included:</h3>

					<div className="accordion-container">
						{accordions.map((title, index) => (
							<div key={index} className="accordion">
								<div
									className="accordion-header"
									onClick={() => toggleAccordion(index)}>
									<p>{title}</p>

									{openAccordion[index] ? (
										<img
											src="/images/brand-workshope/Icon_minimize.svg"
											className="minus"
											alt="minus"
										/>
									) : (
										<img
											src="/images/brand-workshope/icons_cross.svg"
											className="plus"
											alt="plus"
										/>
									)}
								</div>

								{openAccordion[index] && (
									<div className="accordioncontent">
										<p>
											Our free branding workshop is focused on one thing—giving
											you the clarity, insights, and tools you need to build a
											more effective brand.
										</p>
									</div>
								)}
							</div>
						))}
					</div>

					<div className="cta-section">
						<p>
							<strong>Have you signed up yet?</strong> Join now to secure your
							spot in our <a href="#">free branding workshop</a>.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
