import Image from "next/image";
import Button from "@elements/button/button";
import React from "react";
interface ServiceType {
	title: string;
	description: string;
}

interface ServiceTypeOptionProps {
	data: {
		ServicesTypeSecTitle: string;
		ServicesTypeSecBtnText: string;
		ServicesTypeSecModalGIF: string;
		services: ServiceType[];
	};
}

const ServiceTypeOption: React.FC<ServiceTypeOptionProps> = ({ data }) => {
	return (
		<div className="service-type-option-section pb-[130px] sm:pb-[65px]">
			<div className="custom-container">
				<div className="services-type-option-wrapper">
					<div className="service-section-title-box mb-20 sm:mb-[30px]">
						<h2 className="service-sec-title text-[65px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							{data.ServicesTypeSecTitle}
						</h2>
					</div>
					<div className="services-type-option-wrapper-cont-box grid grid-cols-16 gap-9 relative">
						<div className="col-span-9">
							<ul className="services-type-list-box">
								{data.services?.map((service, index) => (
									<li
										key={index}
										className="services-types-option-list-items mb-[45px] sm:mb-6">
										<h3 className="services-type-item-title text-[42px] text-left text-primary font-primary font-semibold leading-none mb-9 sm:mb-5 sm:text-[20px]">
											{service.title}
										</h3>
										<p className="services-type-item-desc mb-9 sm:mb-5 text-[26px] text-left text-primary font-primary font-medium leading-normal sm:text-[13px] max-w-[824px] w-full">
											{service.description}
										</p>
									</li>
								))}
							</ul>
							<Button
								btnText={data.ServicesTypeSecBtnText}
								btnVariant="primary-button services-type-options-button mt-[70px] sm:hidden sm:mt-16"
							/>
						</div>
						<div className="col-span-7">
							<div className="services-type-sec-modal relative sm:absolute sm:right-0 sm:bottom-0 mt-4 sm:w-[168px] sm:h-[186px]">
								<Image
									className="w-full h-full"
									src={data.ServicesTypeSecModalGIF}
									alt="services types modal image gif"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceTypeOption;
