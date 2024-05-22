import { Link } from '@/libs/packages';
import React from 'react'

const OurMission = () => {
  return (
		<section className="our-mission-section pt-[88px] pb-[103px] bg-white">
			<div className="custom-container">
				<div className="our-mission-content-box grid grid-cols-12 sm:grid-cols-6 gap-6">
					<div className="our-mission-left-cont col-span-6">
						<h2 className="title font-primary font-normal text-black text-[40px] md:text-[38px] sm:text-[36px] leading-[120%] tracking-[2px] mb-6">
							Inspire. Assure. Transform.
						</h2>
						<Link href="/contacts">
							<button className="secondary-btn varient-black h-12 py-2 px-4 rounded-[4px] border border-mono-100 text-[14px] font-normal font-accent text-center text-mono-100 leading-[150%]">
								Talk to us
							</button>
						</Link>
					</div>
					<div className="our-mission-right-cont col-span-6">
						<p className="desc font-accent font-normal leading-[150%] !opacity-100 text-[16px] sm:text-[16px] text-left text-mono-100">
							Our mission revolves around positive-sum interactions, where both
							parties gain tangible, reasonable benefits from transactions and
							interactions.
							<br />
							<br />
							We analyse human interaction to identify valuable formats and
							outcomes, believing that a great product or service, with a
							thoughtful focus on human prosperity, is the best marketing and
							sustainability strategy.
							<br />
							<br />
							We are also in the process of developing a revised index for Human
							Experience quality, expanding on the Human Development Index
							(HDI), which will inform our work for the next 100 years and
							beyond.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurMission
