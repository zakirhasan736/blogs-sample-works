import React from 'react'

const FaqBanner = () => {
  return (
		<section className="faq-banner-section bg-[#000000]  h-[100vh] max-h-[950px] md:h-[550px]">
			<div className="custom-container h-full">
				<div className="faq-banner-wrapper-main flex items-end justify-start py-[69px] w-full px-[71px] h-full sm:px-8">
					<div className="faq--banner-text-cont-box">
						<h1 className="faq-banner-title text-primary text-left text-[70px] md:text-[67px] sm:text-[55px] font-primary font-semibold leading-normal tracking-[4.02px]">
							FAQs
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FaqBanner
