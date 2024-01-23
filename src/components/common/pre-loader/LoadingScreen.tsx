"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TimelineMax, Power2 } from "gsap";

interface LoadingScreenProps {

}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const tl = new TimelineMax({ onComplete: () => setIsLoaded(true) });

		// Animation for loader-screen-view
		tl.to(loaderRef.current, {
			height: 0,
			opacity: 0,
			duration: 1,
			ease: Power2.easeInOut,
		});

		return () => {
			tl.kill(); // Cleanup GSAP animation
		};
	}, []);

	return (
		<section
			ref={loaderRef}
			className="loader-screen-view fixed left-0 right-0 top-0 z-[999999999] bottom-0 flex items-center justify-center bg-[#f8f9f7] w-full text-white overflow-hidden">
			<div className="loader-item-box relative">
				<div className="loader-mode-img mx-auto w-[220px] mb-7 h-[77px] sm:w-[220px] sm:h-[44px]">
					<Image
						src="/images/white-brand-logo.svg"
						alt="preloader"
						width={220}
						height={45}
					/>
				</div>

				<span
					className="text-[#000] text-center font-medium font-tertery mt-14"
					style={{ opacity: isLoaded ? 1 : 1 }}>
					{isLoaded ? (
						<>
							<div className="loader"></div>
						</>
					) : (
						<>
							<div className="loader"></div>
						</>
					)}
				</span>
			</div>
		</section>
	);
};

export default LoadingScreen;
