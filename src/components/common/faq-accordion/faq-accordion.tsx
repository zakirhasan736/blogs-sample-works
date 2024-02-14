// components/FaqAccordion.tsx
"use client";
import React, { useState } from 'react';
import { PlusIcons, PlusIconsClose } from "@/icons"; // Assuming you have a MinusIcons component

interface FaqItem {
	id: number;
	question: string;
	answer: string;
	answerList?: string[];
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
		<>
			{faqs.map((faq, index) => (
				<div
					key={faq.id}
					className={`faq-accordion-card-item py-[26px] px-[29px] sm:pr-5 sm:pl-4 sm:pt-5 sm:pb-5 ${
						openIndex === index ? "mb-4" : "mb-4"
					} rounded-[11px] bg-transparent border border-[#ffffff20]`}>
					<div
						className={`faq-accordion-head flex items-center justify-between gap-2  ${
							openIndex === index ? "mb-[10px]" : ""
						}`}>
						<h4
							className="acordion-title text-neu-white text-left m-0 sm:text-[18px] text-[22px] font-primary font-bold leading-normal capitalize"
							onClick={() => toggleAccordion(index)}>
							{faq.question}
						</h4>
						<button
							className="plus--icons-btn"
							onClick={() => toggleAccordion(index)}>
							{openIndex === index ? <PlusIcons /> : <PlusIconsClose />}
						</button>
					</div>
					<div
						className={`faq-accordion-details-box ${
							openIndex === index ? "block" : "hidden"
						}`}>
						<span className="shape-line h-[1px] w-[108px] block mb-[10px]  bg-neu-white"></span>
						<p className="accordion-desc-text text-neu-white text-left sm:text-[15px] text-[16px] font-primary font-normal leading-normal">
							{faq.answer}
						</p>
						{faq.answerList && (
							<ul className="pl-4 mt-5">
								{faq.answerList.map((item, itemIndex) => (
									<li
										key={itemIndex}
										className="text-neu-white mb-2 text-left sm:text-[15px] text-[16px] font-primary font-normal leading-normal">
										{item}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			))}
		</>
	);
};

export default FaqAccordion;
