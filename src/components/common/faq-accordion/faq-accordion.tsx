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
					className={`faq-accordion-card-item   ${
						openIndex === index
							? "pb-[48px] sm:pb-[25px]"
							: "pb-[56px] sm:pb-[35px]"
					} rounded-[11px] bg-transparent`}>
					<div
						className={`faq-accordion-head flex items-start justify-between gap-3  ${
							openIndex === index ? "mb-[10px]" : ""
						}`}>
						<h4
							className="acordion-title text-mono-100 text-left m-0 sm:text-[14px] text-[14px] font-accent font-normal leading-normal capitalize"
							onClick={() => toggleAccordion(index)}>
							{faq.question}
						</h4>
						<button
							className="plus--icons-btn"
							onClick={() => toggleAccordion(index)}>
							{openIndex === index ? <PlusIconsClose /> : <PlusIcons />}
						</button>
					</div>
					<div
						className={`faq-accordion-details-box mt-6 ${
							openIndex === index ? "block" : "hidden"
						}`}>
						<p className="accordion-desc-text text-[#333] text-left sm:text-[14px] text-[14px] font-primary font-normal leading-normal !opacity-100">
							{faq.answer}
						</p>
						{faq.answerList && (
							<ul className="pl-4 mt-5">
								{faq.answerList.map((item, itemIndex) => (
									<li
										key={itemIndex}
										className="text-neu-white mb-2 text-left sm:text-[14px] text-[14px] font-primary font-normal leading-normal">
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
