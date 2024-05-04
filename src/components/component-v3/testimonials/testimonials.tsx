"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const TestimonialSec = () => {
	return (
		<section className="testimonials bg-[#fff] text-[#181725] pt-[101px] pb-[48px]">
			<div className="custom-container">
				<div className="section-title-box sm:flex sm:flex-col sm:gap-[15px]">
					<div className="flex gap-10 lg:gap-[30px] sm:flex-col sm:gap-5">
						<h2 className="text-[#181725]">Testimonials</h2>
						<p>
							Our clients have amazing things to say about Particular. Read what{" "}
							<br />
							they have to say.
						</p>
					</div>
					<button>Portfolio</button>
				</div>
			</div>
			<div className="testimonials-wrapper-box mt-[10px] sm:mt-10">
				<div className="custom-container-full max-w-[1440px] w-full  relative pl-[428px] laptop-m:pl-[318px] pr-0 mx-auto lg:pl-[25px] md:pl-[20px] sm:pl-4 xxs:pl-4">
					<div className="testimonials-card-slide-container mb-4 !overflow-hidden">
						<div className="testimonilas-card-items  max-w-[766px] md:max-w-[650px] sm:max-w-[280px] w-full ml-0">
							<Swiper
								spaceBetween={10}
								// loop={true}
								// centeredSlides={true}
								autoplay={{
									delay: 6000,
									disableOnInteraction: false,
								}}
								navigation={false}
								modules={[Autoplay]}
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									992: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									1199: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
								}}
								className="testimonials w-full !overflow-visible">
								{/* Slides for the main Swiper */}
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonials-card-item pb-4 max-w-[371px] w-full">
										<h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center text-[24px] font-primary font-normal leading-[120%] tracking-[1.2px]">
											Tsagaris Clinic
										</h4>
										<div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
											<div className="testimonials-modal-item max-w-[371px] h-[476px] relative  rounded-[4px] overflow-hidde">
												<Image
													src="/images/testimonials/testimonials-client-img-1.png"
													alt="testimonials client modal image"
													width={371}
													height={476}
													className="w-full h-full"
												/>
											</div>
											<div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
												<p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
													Dr John Tsagaris
												</p>
												<div className="testimonials-reting flex items-center gap-4">
													<ul className="reting-lists flex items-center gap-2">
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
														<li className="retings">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="none">
																<path
																	d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
																	fill="#E3F0FF"
																/>
															</svg>
														</li>
													</ul>
													<div className="trusted-provider">
														<a href="/">
															<Image
																src="/images/testimonials/trusted-provider-img-1.svg"
																alt="retings trusted provider"
																width={16}
																height={16}
															/>
														</a>
													</div>
												</div>
												<p className="testimonials-words mt-2 text-mono-50  text-[16px] text-left font-accent font-normal leading-[150%]">
													“My partnership with Particular Agency for my web
													application development has been nothing short of
													remarkable.”
												</p>
											</div>
										</div>
										<ul className="categoy-list flex-wrap mt-4 sm:mt-3 gap-4 flex items-center justify-start">
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Brand Identity
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Photography
												</a>
											</li>
											<li className="category-items">
												<a
													href="/"
													className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]">
													Web Design
												</a>
											</li>
										</ul>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSec;
