import React from 'react'

const AboutUsSection = () => {
  return (
		<section className="aboutus-section-v2 pt-[76px] pb-[89px] md:pb-[60px]">
			<div className="custom-container max-w-[1160px]">
				<div className="section-left-cont">
					<div className="section-title-box">
						<div className="comon-title mb-6 max-w-[547px]">
							<h2>We’re here to transform your digital presence.</h2>
							<span></span>
						</div>
						<div className="about-section-desc max-w-[537px]">
							<p className="section1">
								In today’s digital world, there’s often a disconnect between
								what businesses expect and what customers experience online.
								This gap can lead to mistrust and missed opportunities,
								impacting both personal and professional spheres.
							</p>
							<p className="section2 mt-5">
								At Particular Agency, we have a unique approach backed by our
								Particular philosophy: Free-thought, Attention to Detail, and
								Pioneering. Offering services like web development, branding,
								and more. Discover how we can enhance your business by exploring
								our suite of services today.
							</p>
						</div>
					</div>
				</div>
				<div className="mid-services-section">
					<div className="section.1-left-cont">
						<div className="section-1-title-box">
							<h4 className="section-1-info-title text-[22px] sm:text-[18px] text-neu-white text-left font-tertery font-normal leading-none">
								The Proof Is In The Pudding{" "}
							</h4>
							<div className="mid-services-wrapper">
								<div className="mid-services">
									<h1 className='text-[56px] sm:text-[36px] text-left text-neu-white font-tertery font-normal leading-[1.1]'>47%</h1>
									<p className='text-[15px] text-left text-neu-white font-tertery font-normal leading-normal'>Return rate within 3 months</p>
								</div>
								<div className="mid-services">
									<h1 className='text-[56px] sm:text-[36px] text-left text-neu-white font-tertery font-normal leading-[1.1]'>50+ Start Ups</h1>
									<p className='text-[15px] text-left text-neu-white font-tertery font-normal leading-normal'>Have joined forces with us and experienced empowerment</p>
								</div>
								<div className="mid-services">
									<div className="mid-services-inner-info sm:mb-7">
										<h1 className='text-[40px] text-left text-neu-white font-normal font-tertery leading-[1.1] sm:text-[27px]'>20,000+</h1>
										<p className='text-[15px] text-left text-neu-white font-tertery font-normal leading-normal'>Average leads generated</p>
									</div>
									<div className="mid-services-inner-info">
										<h1 className='text-[40px] text-left text-neu-white font-normal font-tertery leading-[1.1] sm:text-[27px]'>56%</h1>
										<p className='text-[15px] text-left text-neu-white font-tertery font-normal leading-normal'>Surge In client’s buyer perception</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUsSection
