import React from 'react'
import {Image, Link} from '@packages/packages'
const OurApproachSection = () => {
  return (
		<section className="our-approach-section pb-[141px] md:pb-20">
			<div className="custom-container max-w-[1220px]">
				<div className="comon-title mb-6">
					<h2>Our Approach</h2>
					<span></span>
				</div>
				<div className="approach grid grid-cols-12 gap-[43px] md:gap-5 sm:gap-[30px]">
					<div className="approach-tile col-span-4 sm:col-span-full sm:w-full">
						<h4 className="name border-b border-[#FFF] text-neu-white text-[20px] text-left font-tertery font-bold capitalize leading-normal mb-[15px] pb-[11px]">
							Free Thoughts
						</h4>

						<div className="approach-modal-box relative">
							<Image
								width={350}
								height={353}
								className="approach-img w-full rounded-[6px] mb-[15px]"
								src="/images/approach-free-thought.png"
								alt="approach card image"
							/>
							<div className="approach-modal-cont absolute top-0 left-0 w-full h-full">
								<Link
									href="/our-approach/free-thought"
									className="cts-btn right-[16px] bottom-[17px] absolute">
									<Image
										src="/images/icons/icon-plus.svg"
										alt="cta-btn-approach"
										width={44}
										height={44}
										className="cts-btn-overimg"
									/>
								</Link>
								<p className="modal-anim-text1"></p>
								<p className="modal-anim-text2"></p>
							</div>
						</div>
						<p className="description">
							Click to Discover How Free Thought Drives Creative Excellence at
							Particular.
						</p>
					</div>
					<div className="approach-tile col-span-4 sm:col-span-full sm:w-full">
						<h4 className="name border-b border-[#FFF] text-neu-white text-[20px] text-left font-tertery font-bold capitalize leading-normal mb-[15px] pb-[11px]">
							Attention to detail
						</h4>
						<div className="approach-modal-box relative">
							<Image
								width={350}
								height={353}
								className="approach-img w-full rounded-[6px] mb-[15px]"
								src="/images/approach-atd.png"
								alt="approach card image"
							/>
							<div className="approach-modal-cont absolute top-0 left-0 w-full h-full">
								<Link
									href="/our-approach/attention-to-detail"
									className="cts-btn right-[16px] bottom-[17px] absolute">
									<Image
										src="/images/icons/icon-plus.svg"
										alt="cta-btn-approach"
										width={44}
										height={44}
										className="cts-btn-overimg"
									/>
								</Link>
								<p className="modal-anim-text1"></p>
								<p className="modal-anim-text2"></p>
							</div>
						</div>
						<p className="description">
							Click to Experience the Quality That Our Attention To Detail
							Delivers
						</p>
					</div>
					<div className="approach-tile col-span-4 sm:col-span-full sm:w-full">
						<h4 className="name border-b border-[#FFF] text-neu-white text-[20px] text-left font-tertery font-bold capitalize leading-normal mb-[15px] pb-[11px]">
							Pioneering
						</h4>

						<div className="approach-modal-box relative">
							<Image
								width={350}
								height={353}
								className="approach-img w-full rounded-[6px] mb-[15px]"
								src="/images/approach-pioneering.png"
								alt="approach card image"
							/>
							<div className="approach-modal-cont absolute top-0 left-0 w-full h-full">
								<Link
									href="/our-approach/pioneering"
									className="cts-btn right-[16px] bottom-[17px] absolute">
									<Image
										src="/images/icons/icon-plus.svg"
										alt="cta-btn-approach"
										width={44}
										height={44}
										className="cts-btn-overimg"
									/>
								</Link>
								<p className="modal-anim-text1"></p>
								<p className="modal-anim-text2"></p>
							</div>
						</div>
						<p className="description">
							Click to Explore How Pioneering Sets Us Apart at Particular
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurApproachSection