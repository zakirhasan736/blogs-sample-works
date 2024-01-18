import Image from 'next/image';
import React from 'react'

const ServicesSection = () => {
  return (
		<section className="service-section-v2 pt-[122px] pb-[157px] md:pt-20 md:pb-[120px]">
			<div className="custom-container max-w-[1160px]">
				<div>
					<div className="comon-title mb-11">
						<h2>Our Services</h2>
						<span></span>
					</div>
					<div className="all-services grid grid-cols-12 gap-x-10 gap-y-[45px] lg:gap-x-[20px] lg:gap-y-[30px]">
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-1.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>Web Development</h4>
							<p>
								Crafting visually stunning and highly functional websites
								tailored to your brand's unique identity
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-2.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>PPC (Pay-Per-Click)</h4>
							<p>
								Strategically driving targeted traffic to your website through
								data-driven paid advertising campaigns
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-3.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>UX Design</h4>
							<p>
								Elevating user experiences with intuitive and visually appealing
								designs, ensuring seamless interactions
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-4.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>Motion Graphic</h4>
							<p>
								Transforming ideas into captivating visual stories through
								dynamic and engaging animations and transitions
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-5.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>SEO</h4>
							<p>
								Boosting your online visibility and ranking on search engines to
								attract organic traffic and leads to convert it to revenue
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-6.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>Content Strategy</h4>
							<p>
								Creating compelling and tailored content plans to engage and
								connect with your target audience
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-7.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>Branding</h4>
							<p>
								Crafting a strong and memorable brand identity that resonates
								with your audience and sets you apart
							</p>
						</div>
						<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
							<div className="service-item-icons">
								<Image
									src="/images/icons/services-item-v2-img-8.svg"
									alt="service icons"
									width={110}
									height={110}
								/>
							</div>
							<h4>App Development</h4>
							<p>
								Building custom mobile applications that enhance user engagement
								and meet your business goals
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesSection
