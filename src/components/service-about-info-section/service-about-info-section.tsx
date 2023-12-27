import Button from '../elements/button/button';
import {Image} from '@packages/packages';
import React from "react";
interface ServiceAboutInfoProps {
	data: {
		ServiceSecTitle?: string;
		ServiceSecModalImage: string;
		ServiceSecDesc1?: string;
		ServiceSecDesc2?: string;
		ServiceSecBtnText: string;
	};
}

const ServiceAboutInfoSection: React.FC<ServiceAboutInfoProps> = ({data}) => {
	return (
		<section className="services-about-info-section pt-[100px] pb-[100px] sm:pb-[52px] sm:pt-[55px]">
			<div className="custom-container">
				<div className="service-about-info-wrapper  max-w-[1430px] mx-auto">
					<div className="service-section-title-box mb-20 sm:mb-[30px]">
						<h2 className="service-sec-title text-[48px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							{data.ServiceSecTitle}
						</h2>
					</div>
					<div className="service-about-info-content-text-box grid grid-cols-16  relative laptop-x:gap-14 md:gap-8 sm:gap-0">
						<div className="col-span-8 md:col-span-7 sm:col-span-full">
							<div className="service-info-section-modal-image hidden laptop-x:block sm:hidden h-[731px] laptop-x:relative laptop-x:h-auto absolute top-0 left-0 sm:w-full sm:h-[328px] sm:max-w-[450px] sm:mx-auto sm:relative sm:mt-[50px]">
								<Image
									className="w-full h-full"
									src={data.ServiceSecModalImage}
									width={847}
									height={731}
									alt="services info section modal image"
								/>
							</div>
						</div>
						<div className="col-span-8 md:col-span-9 sm:col-span-full">
							<div className="services-about-inf-text-cont pt-[58px] laptop-x:pt-0 h-[731px] laptop-x:h-auto sm:h-auto sm:pt-0 relative z-50">
								<p className="services-about-info-desc mb-[15px] text-[26px] laptop-x:text-[26px] md:text-[20px] text-left text-primary font-primary font-normal leading-normal sm:text-[13px]">
									{data.ServiceSecDesc1}
								</p>
								<p className="services-about-info-desc text-[26px] laptop-x:text-[26px] md:text-[18px] text-left text-primary font-primary font-normal leading-normal sm:text-[13px]">
									{data.ServiceSecDesc2}
								</p>
								<Button
									btnText={data.ServiceSecBtnText}
									btnVariant="primary-button services-about-button mt-4 sm:hidden sm:mt-16"
								/>
							</div>
							<div className="service-info-section-modal-image h-[731px] laptop-x:hidden absolute top-0 left-0 sm:w-full sm:h-[328px] sm:max-w-[450px] sm:mx-auto sm:block sm:relative sm:mt-[50px]">
								<Image
									className="w-full h-full"
									src={data.ServiceSecModalImage}
									width={847}
									height={731}
									alt="services info section modal image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceAboutInfoSection
