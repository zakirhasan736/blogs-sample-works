import React from "react";
import Button from "@/components/elements/button/button";

interface ServicesBannerProps {
	data: {
		bannerTitle: string;
		bannerBtnText: string;
		bannerDescription: string;
	};
}

const ServicesBanner: React.FC<ServicesBannerProps> = ({ data }) => {
	const formattedDescription = data.bannerDescription
		.split("\n")
		.map((line, index) => (
			<React.Fragment key={index}>
				{line}
				<br />
			</React.Fragment>
		));

	return (
		<>
			<section className="services-banner-section pt-[113px] pb-[70px] sm:py-9 h-[666px] sm:h-[530px] bg-[#232323]">
				<div className="custom-container h-full">
					<div className="services-content-main-wrapper relative grid grid-cols-16 gap-5 w-full h-full  max-w-[1430px] mx-auto">
						<div className="services-content-text-box pb-12 col-span-full mt-auto sm:mb-0">
							<h1 className="services-banner-title primary-heading-6  font-medium font-primary tracking-[4px] text-left text-primary text-[70px] mb-[15px] uppercase leading-none sm:text-[40px] sm:mb-8">
								{data.bannerTitle}
							</h1>
							<p className="banner-description text-primary text-[24px] text-left max-w-[824px] mr-auto font-primary  font-medium leading-normal mb-0 sm:text-[13px]">
								{formattedDescription}
							</p>
							<Button
								btnText={data.bannerBtnText}
								btnVariant="primary-button services-banner-button mt-12 sm:mt-8"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServicesBanner;
