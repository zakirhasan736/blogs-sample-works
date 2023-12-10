// components/FaqAccordion.tsx
"use client";
import { useState } from 'react';
import { PlusIcons } from "@/icons"; // Assuming you have a MinusIcons component

interface FaqItem {
  id: number;
  question: string;
  answer: string;
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
					className={`faq-accordion-card-item pt-[31px] pr-[36px] pb-[32px] ${
						openIndex === index ? "pb-20 mb-4" : "mb-4"
					} pl-[43px] rounded-[11px] bg-neu-white`}>
					<div
						className={`faq-accordion-head flex items-center justify-between gap-2  ${
							openIndex === index ? "mb-[18px]" : ""
						}`}>
						<h4
							className="acordion-title text-neu-black text-left text-[21px] font-primary font-normal leading-[18px] tracking-[3.045px] uppercase"
							onClick={() => toggleAccordion(index)}>
							{faq.question}
						</h4>
						<button
							className="plus--icons-btn"
							onClick={() => toggleAccordion(index)}>
							{openIndex === index ? <PlusIcons /> : <PlusIcons />}
						</button>
					</div>
					<div
						className={`faq-accordion-details-box ${
							openIndex === index ? "block" : "hidden"
						}`}>
						<span className="shape-line h-[1px] w-[108px] block mb-[13px]  bg-neu-black"></span>
						<p className="accordion-desc-text text-neu-black text-left text-text-medium-4 font-primary font-normal leading-normal">
							{faq.answer}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default FaqAccordion;
