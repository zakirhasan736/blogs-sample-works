import React from 'react'

const AboutUsSection = () => {
  return (
		<section className="aboutus-section-v2 pt-[76px] pb-[89px]  md:pb-[60px]">
			<div className="custom-container max-w-[1220px]">
				<div className="section-left-cont">
					<div className="section-title-box">
						<div className="comon-title mb-6 max-w-[670px]">
							<h2>
								Improving Buyer experience will gain you the results you want.
							</h2>
							<span></span>
						</div>
						<div className="about-section-desc max-w-[537px]">
							<p className="section1">
								In today’s digital world, there’s often a disconnect between
								what businesses expect and what customers experience online.
								This gap in the middle can lead to mistrust and missed
								opportunities. Mistrust creates lost customers, so the impacts
								are both personal and professional.
							</p>
							<p className="section2 mt-5">
								At Particular Agency, we understand that even a 5% increase in
								customer retention can lead to a 29-95% in profitability. We
								have a unique approach towards producing High-Quality and then
								strategically marketing it, backed by our Particular philosophy
								of combining Free-thought, Attention to Detail, and Pioneering.
							</p>
						</div>
					</div>
				</div>
				<div className="mid-services-section">
					<div className="section.1-left-cont">
						<div className="section-1-title-box">
							<h4 className="section-1-info-title text-[22px] sm:text-[20px] text-neu-white text-left font-tertery font-normal leading-none">
								The Proof Is In The Pudding{" "}
							</h4>
							<div className="mid-services-wrapper flex justify-between gap-x-[58px] gap-y-1 md:gap-x-[30px]">
								<div className="mid-services">
									<h1 className="text-[56px] lg:text-[40px] md:text-[36px] text-left text-neu-white font-tertery font-normal leading-[1.1]">
										140%
									</h1>
									<p className="text-[15px] text-left text-neu-white font-tertery font-normal leading-normal">
										How much more customers spend following positive
										interactions compared to negative ones
									</p>
								</div>
								<div className="mid-services">
									<h1 className="text-[56px] lg:text-[40px] whitespace-nowrap md:text-[36px] text-left text-neu-white font-tertery font-normal leading-[1.1]">
										61% of Customers
									</h1>
									<p className="text-[15px] text-left text-neu-white font-tertery font-normal leading-normal">
										Say that they would leave for a competitor after just one
										bad experience
									</p>
								</div>
								<div className="mid-services ml-auto">
									<div className="mid-services-inner-info sm:mb-7">
										<h1 className="text-[40px] text-left text-neu-white font-normal font-tertery leading-[1.1] sm:text-[27px]">
											50+
										</h1>
										<p className="text-[15px] text-left text-neu-white font-tertery font-normal leading-normal">
											Startups & SMEs we’ve worked with
										</p>
									</div>
									<div className="mid-services-inner-info">
										<h1 className="text-[40px] text-left text-neu-white font-normal font-tertery leading-[1.1] sm:text-[27px]">
											47%
										</h1>
										<p className="text-[15px] text-left text-neu-white font-tertery font-normal leading-normal">
											of Particular customers return for a second service within
											the first 3 months
										</p>
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
