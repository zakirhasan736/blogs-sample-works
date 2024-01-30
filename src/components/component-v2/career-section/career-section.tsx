import GlowButton from '@/components/elements/button/glow-button';
import Image from 'next/image';
import React from 'react'

const CareerSection = () => {
  return (
		<section className="career-section pb-[94px]">
			<div className="custom-container max-w-[1220px]">
				<div className="career-main-wrapper">
					<div className="comon-title mb-16">
						<h2 className="mb-2">Join Us</h2>
						<span></span>
					</div>
					<div className="career-sec-content join-us grid grid-cols-12 gap-7">
						<div className="career-image-modal col-span-6 md:col-span-full grid grid-rows-4 grid-flow-col sm:grid-cols-4 sm:grid-flow-row gap-x-5 gap-y-5">
							<Image
								className="row-span-4 h-full  sm:col-span-4  sm:h-[260px] sm:object-cover"
								src="/images/image-join-us.jpg"
								width={345}
								height={371}
								alt="join us"
							/>
							<Image
								className="row-span-2 h-full  sm:col-span-2"
								src="/images/image-join-us-1.jpg"
								width={176}
								height={176}
								alt="join us"
							/>
							<Image
								className="row-span-2 h-full  sm:col-span-2"
								src="/images/image-join-us-2.jpg"
								width={176}
								height={176}
								alt="join us"
							/>
						</div>
						<div className="join-us-content col-span-6 md:col-span-full">
							<p className='mb-8'>
								We cherish collaborating with individuals who bring talent and
								dedication to the table.
							</p>
							<p className='mb-6'>
								Explore our available positions to
								apply or reach out to us via email to start a conversation.
							</p>
							<GlowButton glowBtnText="Join our team" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CareerSection
