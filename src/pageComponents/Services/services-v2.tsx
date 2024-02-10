import Image from "next/image";
import React from "react";
import ServiceBannerVersionTwo from "./service-banner-v2";
import OurWorkSec from "@/components/component-v2/our-work-section/our-work-sec";

const ServicesVersionTwo = () => {
	return (
		<div className="services-wrapper-main-content ">
			<ServiceBannerVersionTwo />
			<section className="service-section-v2 pb-[100px] md:pb-20 bg-transparent">
				<div className="custom-container max-w-[920px]">
					<div>
						<div className="comon-title mb-11">
							<h2>Our Services</h2>
							<span></span>
						</div>
						<div className="all-services grid grid-cols-12 gap-x-10 gap-y-[45px] lg:gap-x-[20px] lg:gap-y-[30px]">
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
								<div className="service-item-icons">
									<Image
										src="/images/icons/services-item-v2-img-1.svg"
										alt="service icons"
										width={110}
										height={110}
									/>
								</div>
								<a href="/services/web-design-and-development">
									<h4>Web Development</h4>
								</a>
								<p>
									Crafting visually stunning and highly functional websites
									tailored to your brand's unique identity
								</p>
							</div>
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
								<div className="service-item-icons">
									<Image
										src="/images/icons/services-item-v2-img-2.svg"
										alt="service icons"
										width={110}
										height={110}
									/>
								</div>
								<a href="/services/pay-per-click">
									<h4>PPC (Pay-Per-Click)</h4>
								</a>
								<p>
									Strategically driving targeted traffic to your website through
									data-driven paid advertising campaigns
								</p>
							</div>
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
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
									Elevating user experiences with intuitive and visually
									appealing designs, ensuring seamless interactions
								</p>
							</div>
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
								<div className="service-item-icons">
									<Image
										src="/images/icons/services-item-v2-img-4.svg"
										alt="service icons"
										width={110}
										height={110}
									/>
								</div>
								<a href="/services/motion-design">
									<h4>Motion Graphic</h4>
								</a>
								<p>
									Transforming ideas into captivating visual stories through
									dynamic and engaging animations and transitions
								</p>
							</div>
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
								<div className="service-item-icons">
									<Image
										src="/images/icons/services-item-v2-img-5.svg"
										alt="service icons"
										width={110}
										height={110}
									/>
								</div>
								<a href="/services/seo-service">
									<h4>SEO</h4>
								</a>
								<p>
									Boosting your online visibility and ranking on search engines
									to attract organic traffic and leads to convert it to revenue
								</p>
							</div>
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
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
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
								<div className="service-item-icons">
									<Image
										src="/images/icons/services-item-v2-img-7.svg"
										alt="service icons"
										width={110}
										height={110}
									/>
								</div>
								<a href="/services/branding">
									<h4>Branding</h4>
								</a>
								<p>
									Crafting a strong and memorable brand identity that resonates
									with your audience and sets you apart
								</p>
							</div>
							<div className="service-items col-span-4 md:col-span-4 sm:col-span-full">
								<div className="service-item-icons">
									<Image
										src="/images/icons/services-item-v2-img-8.svg"
										alt="service icons"
										width={110}
										height={110}
									/>
								</div>
								<a href="/services/app-development">
									<h4>App Development</h4>
								</a>
								<p>
									Building custom mobile applications that enhance user
									engagement and meet your business goals
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="platform-section pt-20 md:pt-14 bg-neu-white">
				<div className="custom-container max-w-[920px]">
					<div className="comon-title mb-11">
						<h2 className="text-black">Platforms</h2>
						<span></span>
					</div>
					<div className="platform-wrapper flex flex-wrap gap-[70px] items-center justify-center md:gap-8">
						<div className="technology-item">
							<Image
								width={198}
								height={56}
								src="/images/shopify.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={260}
								height={59}
								src="/images/wordpress.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={248}
								height={62}
								src="/images/prestashope.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={202}
								height={67}
								src="/images/maganto.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={230}
								height={56}
								src="/images/cscart.svg"
								alt="our services work technology image"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="technology-section py-20 pb-10 bg-neu-white">
				<div className="custom-container max-w-[920px]">
					<div className="comon-title mb-11">
						<h2 className="text-black">Technologies</h2>
						<span></span>
					</div>
					<div className="technology-wrapper flex flex-wrap gap-[70px] items-center justify-center  md:gap-8">
						<div className="technology-item">
							<Image
								width={162}
								height={80}
								src="/images/nodejs.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={170}
								height={89}
								src="/images/php.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={174}
								height={82}
								src="/images/react.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={94}
								height={94}
								src="/images/figma.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={88}
								height={87}
								src="/images/ps.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={146}
								height={56}
								src="/images/notion.svg"
								alt="our services work technology image"
							/>
						</div>
						<div className="technology-item">
							<Image
								width={140}
								height={55}
								src="/images/micro.svg"
								alt="our services work technology image"
							/>
						</div>
					</div>
				</div>
			</section>
			<OurWorkSec WorkSecClass="pt-[70px] pb-[85px] bg-[#ffffff] light-mode-work-section" />
		</div>
	);
};

export default ServicesVersionTwo;
