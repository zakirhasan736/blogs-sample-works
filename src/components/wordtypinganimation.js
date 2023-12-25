import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);

	const words = useMemo(
		() => ["Particular", "Particular", "Particular", "Particular"],
		[],
	);

	useEffect(() => {
		const typeWord = async word => {
			for (let i = 0; i <= word.length; i++) {
				setText(word.substring(0, i));
				await new Promise(resolve => setTimeout(resolve, 200)); // Typing speed
			}
		};

		const deleteWord = async word => {
			for (let i = word.length; i >= 0; i--) {
				setText(word.substring(0, i));
				await new Promise(resolve => setTimeout(resolve, 100)); // Deleting speed
			}
		};

		const animate = async () => {
			await typeWord(words[index % words.length]);
			await new Promise(resolve => setTimeout(resolve, 1000)); // Delay between words
			await deleteWord(words[index % words.length]);
			setIndex(prevIndex => prevIndex + 1);
		};

		animate();
	}, [index, words]);

	return (
		<motion.div
			className="text-secondary-2 text-[48px] md:text-[36px] text-center font-primary font-medium leading-none capitalize sm:text-[26px]"
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}>
			{text}
			<motion.span
				className="animate-blink text-neu-white font-normal"
				animate={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, yoyo: Infinity }}>
				|
			</motion.span>
		</motion.div>
	);
};

export default TypingAnimation;
