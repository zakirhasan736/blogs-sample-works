import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
  return (
		<section className="about-banner-section h-[100vh] pt-[163px] pb-[64px]">
			<video
				src="/images/aboutus-banner-video.mp4"
				autoPlay={true}
				muted={true}
				playsInline={true}
				controls={false}
				loop={true}
				className="absolute inset-0 z-0 w-full h-full object-cover sm:object-right-top"
			/>
			<div className="custom-container h-full">
				<div className="about-banner-wrapper flex flex-col justify-end h-full">
					<div className="about-banner-cont-box relative z-50 ">
						<h1 className="banner-title mb-6 font-primary font-normal max-w-[750px] w-full text-[40px] md:text-[38px] sm:text-[36px] text-white tracking-[2px] leading-[120%]">
							Eliminating poor human experiences in the digital space
						</h1>
						<p className="banner-desc text-white max-w-[781px] text-[18px] sm:text-[16px] leading-[180%] font-normal font-accent">
							While Premium looks different for each brand, product and service,
							it’s the mindset we consider to be the standard. The only
							sustainable one.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutBanner
