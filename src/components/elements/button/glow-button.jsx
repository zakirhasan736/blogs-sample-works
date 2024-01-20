"use client";
import React, { useEffect } from 'react';
import chroma from 'chroma-js';
import gsap from 'gsap';

const GlowButton = ({ glowBtnText }) => {
	useEffect(() => {
		const generateGlowButtons = () => {
			document.querySelectorAll(".glow-button").forEach(button => {
				let gradientElem = button.querySelector(".gradient");

				if (!gradientElem) {
					gradientElem = document.createElement("div");
					gradientElem.classList.add("gradient");
					button.appendChild(gradientElem);
				}

				button.addEventListener("pointermove", e => {
					const rect = button.getBoundingClientRect();

					const x = e.clientX - rect.left;
					const y = e.clientY - rect.top;

					gsap.to(button, {
						"--pointer-x": `${x}px`,
						"--pointer-y": `${y}px`,
						duration: 0.6,
					});

					gsap.to(button, {
						"--button-glow": chroma
							.mix(
								getComputedStyle(button)
									.getPropertyValue("--button-glow-start")
									.trim(),
								getComputedStyle(button)
									.getPropertyValue("--button-glow-end")
									.trim(),
								x / rect.width,
							)
							.hex(),
						duration: 0.2,
					}); // Remove the extra comma here
				});
			});
		};

		generateGlowButtons();

		// Cleanup event listeners on component unmount
		return () => {
			window.removeEventListener("resize", generateGlowButtons);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<button className="glow-button text-neu-white" type='button'>
			<span className="px-[19px] pt-[15px] pb-[17px] text-center text-[16px] font-tertery font-semibold capitalize bg-[#fff]">
				{glowBtnText}
			</span>
			<div className="gradient"></div>
		</button>
	);
};

export default GlowButton;
