import GlowButton from '@/components/elements/button/glow-button';
import React from 'react'

const ServiceBannerVersionTwo = () => {
  return (
		<section className="services-main-banner-section pt-[160px] pb-[66px]">
			<div className="custom-container max-w-[920px]">
				<div className="services-banner-cont-box text-center">
					<h1 className="services-banner-title">
						An agency specialising in product design to enhance the success of
						your business.
					</h1>
					<a href="/contacts" className='inline-block mt-[15px]'>
						<GlowButton glowBtnText="Start a Project" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default ServiceBannerVersionTwo
