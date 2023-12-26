"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Paragraph = ({ paragraph }: { paragraph: string }) => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,

		offset: ["start 0.9", "start 0.25"],
	});



	const splitText = paragraph.split(" ");
	const wordCount = splitText.length;
  return (
		<p
			ref={container}
			className="paragraph about-anim-text animate-text text-[54px] flex flex-wrap text-left text-secondary font-primary font-semibold leading-[1.1] shadow-text-shadow-primary uppercase max-w-[495px] md:text-[42px] sm:text-[30px]">
			{splitText.map((word, i) => {
				const start = i / wordCount;
				const end = (i + 1) / wordCount;
				return (
					<Word key={i} progress={scrollYProgress} range={[start, end]}>
						{word}
					</Word>
				);
			})}
		</p>
	);
};

const Word = ({
	children,
	progress,
	range,
}: {
	children: string;
	progress: any; // Update to the correct type
	range: number[];
}) => {
	const amount = range[1] - range[0];
	const step = amount / children.length;

	return (
		<span className="word">
			{children.split("").map((char, i) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				return (
					<Char key={`c_${i}`} progress={progress} range={[start, end]}>
						{char}
					</Char>
				);
			})}
		</span>
	);
};

const Char = ({
	children,
	progress,
	range,
}: {
	children: string;
	progress: any; // Update to the correct type
	range: number[];
}) => {
	const opacity = useTransform(progress, range, [0, 1]);

	return (
		<span>
			<span className="shadow">{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
};

export default Paragraph;
