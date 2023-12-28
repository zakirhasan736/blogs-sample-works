"use client";
import { useState } from "react";
import Faqs from "@/data/ColorCraftFaq.json";
const ColorCraftFaq = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(prevIndex => (prevIndex === index ? null : index));
	};
	return (
		<>
			{Faqs.map((faq, index) => (
				<div className={`faq faq-accordion-card-item pt-[31px] pr-[36px] sm:pr-5 sm:pl-4 pb-[32px] sm:pt-5 sm:pb-5 ${
						openIndex === index ? "pb-20 mb-4" : "mb-4"
					} pl-[43px] rounded-[11px] bg-neu-white`} key={faq.id}>
					<div className={`faq-q faq-accordion-head flex items-center justify-between gap-2  ${
							openIndex === index ? "mb-[18px]" : ""
						}`} onClick={() => toggleAccordion(index)}>
						<h3 className="acordion-title text-neu-black text-left sm:text-[18px] text-[21px] font-primary font-normal leading-[1.1] tracking-[3.045px] capitalize">
							{faq.question}
						</h3>
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							className="faq-icon">
							<path
								d="M11.5 0L11.5 23"
								stroke="var(--secondary)"
								stroke-width="6"
							/>
							<path
								d="M23 11.5L-2.38419e-07 11.5"
								stroke="var(--secondary)"
								stroke-width="6"
							/>
						</svg>
					</div>
					<div
						className={`faq-a faq-accordion-details-box ${
							openIndex === index ? "block expand" : "hidden"
						}`}>
						<span className="shape-line h-[1px] w-[108px] block mb-[13px]  bg-neu-black"></span>
						<p className="accordion-desc-text text-neu-black text-left sm:text-[18px] text-text-medium-4 font-primary font-normal leading-normal">
							{faq.answer}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default ColorCraftFaq;
