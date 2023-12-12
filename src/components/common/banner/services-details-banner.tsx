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
			<section className="services-banner-section pt-[113px] pb-[100px] sm:py-9 h-[817px] sm:h-[530px] bg-[#232323]">
				<div className="custom-container h-full">
					<div className="services-content-main-wrapper relative grid grid-cols-16 gap-5 w-full h-full">
						<div className="services-content-text-box pb-12 col-span-full mt-auto">
							<h1 className="services-banner-title primary-heading-6 font-semibold font-primary tracking-[4px] text-left text-primary text-primary-heading-6 mb-10 uppercase leading-none sm:text-sixth-heading-2 sm:mb-8">
								{data.bannerTitle}
							</h1>
							<p className="banner-description text-primary text-text-accend-1 text-left max-w-[1249px] mr-auto font-primary font-semibold leading-none mb-0 sm:text-[13px]">
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
