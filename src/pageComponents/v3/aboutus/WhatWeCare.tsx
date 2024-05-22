import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatWeCare = () => {
	return (
		<section className="what-we-care-section py-[76px] bg-white">
			<div className="custom-container">
				<div className="what-we-care-wrapper">
					<div className="what-we-care-cont-item mb-[86px] md:mb-[50px] sm:mb-[45px] grid grid-cols-12 sm:grid-cols-6 gap-[57px] md:gap-[30px] sm:gap-35px]">
						<div className="what-we-care-cont-item-left-cont col-span-6">
							<h3 className="title text-mono-100 mb-[11px] text-[32px] sm:text-[30px] font-primary font-normal leading-[150%] tracking-[1.6px]">
								Who We Serve
							</h3>
							<p className="desc  body-regular-1 text-mono-100 mb-6">
								We serve a diverse audience at Particular. Our clients include,
								but are not limited to:
							</p>
							<Image
								src="/images/what-we-care-img-2-desk.svg"
								alt="what we care item modal image"
								width={568}
								className="w-full h-[162px] object-cover sm:hidden object-top rounded-[4px]"
								height={162}
							/>
							<Image
								src="/images/what-we-care-modal-img-1-mobo.svg"
								alt="what we care item modal image"
								width={568}
								className="w-full h-[162px] object-cover hidden sm:block object-bottom rounded-[4px]"
								height={162}
							/>
						</div>
						<div className="what-we-care-cont-item-right-cont pt-[125px] sm:pt-0 col-span-6 grid grid-cols-12 gap-[47px] md:gap-[35px] sm:grid-cols-6">
							<ul className="what-we-care-item-cont-lists-cont pl-5 col-span-8 sm:col-span-6">
								<li className="list-item font-accent">C-Level Executives</li>
								<li className="list-item font-accent">
									Founders & Entrepreneurs
								</li>
								<li className="list-item font-accent">Directors</li>
								<li className="list-item font-accent">
									Chief Marketing Officers & Marketers
								</li>
								<li className="list-item font-accent">
									Governments, Local Authorities & Councils
								</li>
								<li className="list-item font-accent">
									Private Organisations who (wish to) advertise
								</li>
								<li className="list-item font-accent">
									Investors & Workers in Sustainable Development
								</li>
							</ul>
						</div>
					</div>
					<div className="what-we-care-cont-item mb-[86px] md:mb-[50px] sm:mb-[45px] grid grid-cols-12 sm:grid-cols-6 gap-[57px] md:gap-[30px] sm:gap-35px]">
						<div className="what-we-care-cont-item-left-cont col-span-6">
							<h3 className="title text-mono-100 mb-[11px]">Who We Serve</h3>
							<p className="desc body-regular-1 text-mono-100 mb-6">
								We serve a diverse audience at Particular. Our clients include,
								but are not limited to:
							</p>
							<Image
								src="/images/what-we-care-img-1-desk.svg"
								alt="what we care item modal image"
								width={568}
								className="w-full h-[162px] rounded-[4px] sm:hidden object-cover object-top"
								height={162}
							/>
							<Image
								src="/images/what-we-care-modal-img-2-mobo.svg"
								alt="what we care item modal image"
								width={568}
								className="w-full h-[162px] rounded-[4px] hidden sm:block object-cover  object-bottom"
								height={162}
							/>
						</div>
						<div className="what-we-care-cont-item-right-cont pt-[125px] sm:pt-0 grid grid-cols-12 gap-[47px] md:gap-[35px] sm:grid-cols-full">
							<ul className="what-we-care-item-cont-lists-cont pl-5 col-span-6 sm:col-span-full">
								<li className="list-item font-accent">
									(Sustainably) Growing their Business or Brand
								</li>
								<li className="list-item font-accent">
									Developing their Entrepreneurial talent and Business Acumen
								</li>
								<li className="list-item font-accent">
									Customer Experience Management & Optimisation
								</li>
								<li className="list-item font-accent">
									User Experience Management & Optimisation
								</li>
								<li className="list-item font-accent">
									Persuasive Advertisement
								</li>
							</ul>
							<ul className="what-we-care-item-cont-lists-cont sm:pl-5  col-span-6 sm:col-span-full">
								<li className="list-item font-accent">
									Transforming Perception of Concepts (for good)
								</li>
								<li className="list-item font-accent">Customer Retention</li>
								<li className="list-item font-accent">
									The betterment of humankind
								</li>
								<li className="list-item font-accent">
									Leadership & Skill Mastery
								</li>
								<li className="list-item font-accent">
									Humanity and its betterment
								</li>
								<li className="list-item font-accent">Knowledge-seeking</li>
								<li className="list-item font-accent">
									Real-world information
								</li>
								<li className="list-item font-accent">High-quality</li>
							</ul>
						</div>
					</div>
					<Link href="/contacts">
						<button className="primary-btn varient-black rounded-[4px] bg-mono-100 py-2 px-4 text-white text-[14px] font-normal font-accent text-center leading-[150%] h-12 max-w-[109px] w-full mx-auto block">
							Get in touch
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default WhatWeCare;
