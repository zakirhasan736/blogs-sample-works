"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Parallax, Pagination } from "swiper/modules";

interface Slide {
	title: string;
	subtitle: string;
	description: string;
}

interface ServicePageBannerProps {
	slides: Slide[];
}

const ServicePageBanner: React.FC<ServicePageBannerProps> = ({ slides }) => {

	return (
		<section className="service-page-banner pt-[110px]r pb-[210px] bg-neu-gray-black-2 h-[826px]">
			<div className="service-page-banner-custom-container h-full">
				<div className="services-banner-wrraper-main flex flex-col justify-end h-full pr-[57px] pl-20">
					<div className="services-banner-content-box">
						<Swiper
							speed={1500}
							parallax={true}
							loop={true}
							pagination={{
								clickable: true,
							}}
							modules={[Parallax, Pagination]}
							className="services-slider-swiper">
							{slides.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className="custom-container h-full">
										<div className="banner-services-slide-item">
											<h1
												data-swiper-parallax="-500"
												className="service-banner-title text-secondary-heading text-left text-neu-white font-primary font-bold leading-none tracking-[3.8px]">
												{slide.title}
											</h1>
											<h5
												data-swiper-parallax="-400"
												className="service-subtitle gap-6 flex items-center mt-[43px] text-text-medium text-left text-neu-white font-primary font-medium tracking-[5.65px] uppercase leading-none">
												<span className="divider-shape h-[1px] w-[60px] block bg-neu-white"></span>{" "}
												{slide.subtitle}
											</h5>
											<p
												data-swiper-parallax="-300"
												className="service-desc mt-[43px] text-body-text text-left text-neu-white font-primary font-medium leading-normal max-w-[695px] w-full">
												{slide.description}
											</p>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicePageBanner;
