"use client";
import React, { useEffect } from "react";
import PPCLandingBanner from "../ppc-components/ppc-landing-banner";
import OurStatics from "@/components/our-statics/our-statics";
import OurWorkSec from "@/components/component-v2/our-work-section/our-work-sec";
import FaqAccordion from "@/components/common/faq-accordion/faq-accordion";
import FaqPageAccodionData from "@/data/ppc-accordion.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
const PPCLandingPage = () => {
	useEffect(() => {
		const handlePhaseJumpClick = () => {
			const element = document.querySelector("#phase-jump");
			if (element) {
				element.classList.toggle("partial-done");
			}
		};

		const phaseJumpElement = document.querySelector("#phase-jump");
		if (phaseJumpElement) {
			phaseJumpElement.addEventListener("click", handlePhaseJumpClick);
		}

		return () => {
			// Cleanup event listener when component unmounts
			if (phaseJumpElement) {
				phaseJumpElement.removeEventListener("click", handlePhaseJumpClick);
			}
		};
	}, []); // Empty dependency array means this effect runs once on mount

	const staticsItemsData = [
		{
			title: "50+",
			description: "Completed more than 50 Successful Marketing Projects",
		},
		{
			title: "£1-60k",
			description:
				"Our current infrastructure allows us to easily cater for projects in this budgetrange",
		},
		{
			title: "47%",
			description:
				"of Particular customers return for a second service within the first 3 months",
		},
	];

	return (
		<div className="ppc-landing-page-main">
			<div className="ppc-landing-main-wrapper">
				<PPCLandingBanner />
				{/* our statics section */}
				<OurStatics
					ourStatusWidth="max-w-[1220px]"
					staticsItems={staticsItemsData}
					ourStaticsTitle="Growth revenue and results"
				/>
				{/* our statics section end*/}
				{/* testimonials section */}
				<section className="testimonials-section-main pb-20">
					<div className="custom-container max-w-[1200px]">
						<div className="comon-title mb-10">
							<h2>Client Testimonial</h2>
							<span></span>
						</div>

						<Swiper
							spaceBetween={20}
							navigation={true}
							loop={true}
							// autoplay={{
							// 	delay: 3000,
							// 	disableOnInteraction: false,
							// }}
							modules={[Navigation, Autoplay]}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								1024: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
							}}
							className="testimonials testimonials-ppc-main-wrap">
							<SwiperSlide>
								<div className="client-wrapper">
									<div className="client-1">
										<div className="gradient">
											<div className="blank"></div>
											<div className="review sm:pr-3">
												<div>
													<span>
														<img
															src="/images/icon-quote-open.svg"
															alt="testi client modal"
														/>
													</span>
													<p className="comment sm:text-[18px] sm:leading-[1.2]">
														My partnership with Particular Agency for our web
														application development has been nothing short of
														remarkable.
													</p>
													<p className="client-name sm:text-[16px] sm:mb-2">
														- Dr. John Tsagiris
													</p>
													<p className="organisation">
														Founder (Tsagiris Clinic)
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="client-wrapper">
									<div className="client-2">
										<div className="gradient">
											<div className="blank"></div>
											<div className="review sm:pr-3">
												<div>
													<span>
														<img
															src="/images/icon-quote-open.svg"
															alt="testi client modal"
														/>
													</span>
													<p className="comment sm:text-[18px] sm:leading-[1.2]">
														We collaborated with Particular for the Design and
														Launch of our web Platform. The team at Particular
														was fantastic.
													</p>
													<p className="client-name sm:text-[16px] sm:mb-2">
														- Stephen Diaper
													</p>
													<p className="organisation">
														Rushmoor Knights Academy, Founder
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="client-wrapper">
									<div className="client-3">
										<div className="gradient">
											<div className="blank"></div>
											<div className="review sm:pr-3">
												<div>
													<span>
														<img
															src="/images/icon-quote-open.svg"
															alt="testi client modal"
														/>
													</span>
													<p className="comment sm:text-[18px] sm:leading-[1.2]">
														Since our collaboration began, we've experienced
														consistent improvement in our marketing outcomes,
														social media engagement, and brand visibility.
													</p>
													<p className="client-name sm:text-[16px] sm:mb-2">
														- Susie Rushden
													</p>
													<p className="organisation">
														Leaders Rising, Founder
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>
				{/* our works section start here */}
				<section className="our-works-landing-section">
					<div className="custom-container max-w-[1220px]">
						<div className="comon-title mb-10">
							<h2>Our work</h2>
							<span></span>
						</div>
					</div>

					<div className="our-works-landing-wrap overflow-hidden">
						<div className="our-works-portfolio-wrap flex items-start gap-5 sm:gap-3 mb-5 flex-nowrap w-[1393px] mx-auto">
							<Image
								width={451}
								height={309}
								src="/images/1.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
							<Image
								width={451}
								height={309}
								src="/images/2.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
							<Image
								width={451}
								height={309}
								src="/images/3.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
						</div>
						<div className="our-works-portfolio-wrap flex items-start gap-5 sm:gap-3 flex-nowrap w-[1863px] mx-auto">
							<Image
								width={451}
								height={309}
								src="/images/4.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
							<Image
								width={451}
								height={309}
								src="/images/5.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
							<Image
								width={451}
								height={309}
								src="/images/6.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
							<Image
								width={451}
								height={309}
								src="/images/7.png"
								alt=""
								className="sm:max-w-[120px] w-full"
							/>
						</div>
					</div>
				</section>
				{/* our works section end here */}
				<OurWorkSec
					OurWorkSecTitle="Detailed case studies"
					WorkSecClass="pt-[70px] pb-[85px] bg-transparent"
				/>
				<section className="our-process-section pb-[58px]">
					<div className="custom-container max-w-[1220px]">
						<div className="comon-title mb-14">
							<h2>Our Process</h2>
							<span></span>
						</div>
						<div className="accordion-wrapper">
							<ul className="StepProgress">
								<li className="StepProgress-item">
									<div className="phrase-detail">
										<p className="subdued"> phase 1</p>
										<h3>User Experience (UX) Research</h3>
										<p className="phrase-des mb-[17px]">
											Our Journey’s first step, digging into everything from
											what your competitors are doing to what your users really
											want.
										</p>
										<div className="all-services grid grid-cols-12 gap-x-6 gap-y-9 md:gap-4">
											<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
												<div className="ppc-discover-business-goals">
													<Image
														width={110}
														height={110}
														src="/images/discover-business-goal.svg"
														alt="ppc modal service icons"
													/>
												</div>
												<h4>Discover Business Goals</h4>
												<p>
													We delve into understanding the core objectives and
													aspirations of your business. This crucial step
													ensures that our UX strategies are perfectly aligned
													with your company's vision, setting a solid foundation
													for creating designs that not only look great but also
													drive your business forward.
												</p>
											</div>
											<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
												<div className="ppc-discover-business-goals">
													<Image
														width={110}
														height={110}
														src="/images/scaleton-interview.svg"
														alt="ppc modal service icons"
													/>
												</div>
												<h4>Stakeholder Interview</h4>
												<p>
													We engage directly with key figures in your
													organisation to gain diverse perspectives. This
													essential dialogue helps us grasp the nuanced needs
													and expectations of those who matter most, ensuring
													our UX solutions are deeply informed and strategically
													aligned.
												</p>
											</div>
											<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
												<div className="ppc-discover-business-goals">
													<Image
														width={110}
														height={110}
														src="/images/problem-stament.svg"
														alt="ppc modal service icons"
													/>
												</div>
												<h4>Problem Statement</h4>
												<p>
													The 'Problem Statement' phase is where we distill
													insights into a clear, concise description of the core
													issues, guiding our UX design towards targeted and
													effective solutions.
												</p>
											</div>
											<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
												<div className="ppc-discover-business-goals">
													<Image
														width={110}
														height={110}
														src="/images/user-requirment.svg"
														alt="ppc modal service icons"
													/>
												</div>
												<h4>User Requirements</h4>
												<p>
													In the 'User Requirements' step, we identify and
													prioritise the needs and preferences of your target
													audience, ensuring user-centric and relevant UX design
													solutions.
												</p>
											</div>
											<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
												<div className="ppc-discover-business-goals">
													<Image
														width={110}
														height={110}
														src="/images/merker-research.svg"
														alt="ppc modal service icons"
													/>
												</div>
												<h4>Market Research</h4>
												<p>
													Our 'Market Research' involves analysing industry
													trends and competitor strategies to ensure your UX
													design is innovative, relevant, and positioned for
													success.
												</p>
											</div>
										</div>
									</div>
								</li>
								<li id="phase-jump" className="StepProgress-item partial-done">
									<strong className="arrow-icon">
										Click here to expand phrase 2, and 3
									</strong>

									<div className="phase-reveal mt-8">
										<div className="phrase-detail">
											<p className="subdued"> phase 2</p>
											<h3>User Interface Design (UI)</h3>
											<p className="phrase-des mb-[17px]">
												Project objectives, scope, timelines, and resources are
												defined, providing a roadmap for efficient and organized
												development processes.
											</p>
											<div className="all-services grid grid-cols-12 gap-x-6 gap-y-9 md:gap-4">
												<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
													<div className="ppc-discover-business-goals">
														<Image
															width={110}
															height={110}
															src="/images/interface-arcitect.svg"
															alt="ppc modal service icons"
														/>
													</div>
													<h4>Information Architecture</h4>
													<p>
														Where we meticulously structure and s content,
														creating intuitive and accessible user interfaces
														for seamless user experiences.
													</p>
												</div>
												<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
													<div className="ppc-discover-business-goals">
														<Image
															width={110}
															height={110}
															src="/images/visual.svg"
															alt="ppc modal service icons"
														/>
													</div>
													<h4>Visual Design</h4>
													<p>
														Crafting aesthetically pleasing and functional
														interfaces, blending creativity with usability to
														enhance user engagement and your brand’s identity.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="phase-reveal  mt-8">
										<div className="phrase-detail">
											<p className="subdued"> phase 3</p>
											<h3>Build Development</h3>
											<p className="phrase-des mb-[17px]">
												Transitioning from designs into reality. executing to
												blend technology with vision, transforming designs into
												a digital masterpiece
											</p>
											<div className="all-services grid grid-cols-12 gap-x-6 gap-y-9 md:gap-4">
												<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
													<div className="ppc-discover-business-goals">
														<Image
															width={110}
															height={110}
															src="/images/front-web.svg"
															alt="ppc modal service icons"
														/>
													</div>
													<h4>Frontend Development</h4>
													<p>
														transforming designs into interactive, responsive
														experiences, ensuring a seamless and engaging user
														interface across all devices
													</p>
												</div>
												<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
													<div className="ppc-discover-business-goals">
														<Image
															width={110}
															height={110}
															src="/images/back-wev.svg"
															alt="ppc modal service icons"
														/>
													</div>
													<h4>Backend Development</h4>
													<p>
														Our focus is on robust and scalable solutions,
														building the backbone for powerful, efficient, and
														secure applications.
													</p>
												</div>
												<div className="service-tile px-5 py-[15px] col-span-3 md:col-span-4 sm:col-span-full  rounded-[12px] border border-[#ffffff20]">
													<div className="ppc-discover-business-goals">
														<Image
															width={110}
															height={110}
															src="/images/Quality Assurance.png"
															alt="ppc modal service icons"
														/>
													</div>
													<h4>Quality Assurance</h4>
													<p>
														Rigorous testing underpins our commitment to
														excellence, ensuring flawless functionality and a
														superior user experience.
													</p>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="StepProgress-item flex gap-8 sm:flex-col">
									<div className="phrase-detail">
										<p className="subdued"> phase 4</p>
										<h3>Launch</h3>
										<p className="phrase-des md:max-w-[390px]">
											It' time to set the stage to unveil your digital creation
											to the world in a way that resonates and inspires. <br />
											<br /> This is the crescendo of our collaboration, a
											moment where we transcend expectations. We’re here to help
											you elevate to new heights in the digital landscape,
											poised for growth and ready to make a lasting impact.
										</p>
									</div>
									<div className="last-phase-illustration">
										<Image
											width={554}
											height={379}
											src="/images/illustration-launch.svg"
											alt="phase modal image"
										/>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				{/* accordion section start here */}
				<section className="accordion-section pb-[100px] sm:pb-20">
					<div className="custom-container max-w-[1220px]">
						<div className="comon-title mb-14">
							<h2>FAQ - Frequently asked questions</h2>
							<span></span>
						</div>
						<div className="accordion-content-box pl-[60px] lg:pl-0">
							<FaqAccordion faqs={FaqPageAccodionData} />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default PPCLandingPage;
