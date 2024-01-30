import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
  return (
		<section className="about-banner-section pt-[163px] pb-[64px]">
			<div className="custom-container max-w-[1196px]">
				<div className="about-banner-wrapper">
					<h1 className="text-[46px] md:text-[34px] sm:text-[28px] mb-8 text-center text-neu-white font-tertery font-bold capitalize leading-[1.2]">
						Discover the Story Behind Particular Agency: Unveiling Passion,
						Purpose, and Progress in Every Pixel
					</h1>
					<Image
						className="w-full max-w-[1115px] h-[472px] sm:h-[220px] rounded-[6px] mx-auto"
						src="/images/group-pic.png"
						alt="banner modal image"
						width={1115}
						height={472}
					/>
					<div className="about-banner-desc-box mt-9 max-w-[1110px] mx-auto">
						<p className="about-des text-[16px] text-neu-white text-left font-tertery font-normal leading-[23px] mb-5">
							Agency's evolution spans over 15 years, a journey that began when
							a group of forward-thinking kids first identified the pervasive
							problem of underwhelming quality in the digital world. From those
							early days to now, our team has grown into a dedicated group of
							seasoned professionals, all committed to addressing this challenge
							head-on.
						</p>
						<p className="about-des text-[16px] text-neu-white text-left font-tertery font-normal leading-[23px] mb-5">
							We've transformed from curious minds into experts who've
							honed our craft, and along the way, we've seen first-hand the
							impact of subpar online experiences.
						</p>
						<p className="about-des text-[16px] text-neu-white text-left font-tertery font-normal leading-[23px]">
					        This shared history fuels our
							relentless drive to attack the problem of underwhelming quality.
							With each project we undertake, we channel our years of
							experience, unwavering dedication, and our unique Particular
							philosophy to engineer exceptional digital solutions that leave a
							lasting impression. Join us on this remarkable journey, and
							together, we'll elevate your digital presence to new heights.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutBanner
