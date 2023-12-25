"use client";
import React from "react";
import { Image } from "@packages/packages";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Pagination } from "swiper/modules";

interface Client {
	src: string;
	width: number;
	height: number;
	alt: string;
}

interface ClientSectionProps {
	clients: Client[];
}

const ClientSection: React.FC<ClientSectionProps> = ({ clients }) => {
	return (
		<div className="client-section pt-[55px] pb-[66px] bg-[#fff]">
			<div className="custom-container">
				<div className="client-sec-wrapper max-w-[1433px] mx-auto">
					<h2 className="client-section-title mb-8 text-[22px] text-center text-black font-primary font-extrabold uppercase tracking-[2.2px] leading-none">
						Trusted By Companies
					</h2>
					{/* desktop view client brand items */}
					<div className="client-item-box max-w-[1328px] flex items-center gap-20 lg:gap-10 mx-auto md:hidden">
							{clients.map((client, index) => (
									<div className="client-item flex items-center justify-center h-full" key={index}>
										<Image
											src={client.src}
											width={client.width}
											height={client.height}
											alt={client.alt}
										/>
									</div>
							))}
					</div>
					{/* mobile view with slider */}
					<div className="client-item-box max-w-[1328px] mx-auto hidden md:block">
						<Swiper
							speed={500}
							slidesPerView={1}
							spaceBetween={30}
							loop={false}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 6,
									spaceBetween: 80,
								},
							}}
							className="client-brand-slider">
							{clients.map((client, index) => (
								<SwiperSlide key={index}>
									<div className="client-item flex items-center justify-center h-full">
										<Image
											src={client.src}
											width={client.width}
											height={client.height}
											alt={client.alt}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientSection;
