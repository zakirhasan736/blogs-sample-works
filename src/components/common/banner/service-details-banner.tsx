import React from "react";
interface ServiceDetailsBannerProps {
	data:
		| {
				bannerTitle: string;
				bannerDescription: string;
				paginateTitle: string;
				bannerBtnText1?: string;
				bannerBtnText2?: string;
		  }
		| undefined; // Define the shape of the data object or allow it to be undefined
}
  const ServiceDetailsBanner: React.FC<ServiceDetailsBannerProps> = ({
		data,
	}) => {
		// Check if data is undefined
		if (!data) {
			return <div>No data available</div>;
		}
		return (
			<section className="services-details-banner-section pt-[160px] pb-[50px] ">
				<div className="custom-container max-w-[1030px]">
					<div className="breadcrumbs mb-[60px] inline-flex items-center">
						<span>
							<a href="/">Home</a>
						</span>
						<span className="icon-forward flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="7"
								height="13"
								viewBox="0 0 7 13"
								fill="none">
								<path
									d="M1 2L6 7L1 12"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span>
							<a href="/services">Services</a>
						</span>
						<span className="icon-forward flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="7"
								height="13"
								viewBox="0 0 7 13"
								fill="none">
								<path
									d="M1 2L6 7L1 12"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span className="current-page">{data.paginateTitle}</span>
					</div>
					<div className="banner-section-wrapper">
						<div className="banner-content-box">
							<h1 className="banner-title ">{data.bannerTitle}</h1>
							<p className="banner-item-desc max-w-[885px] ">{data.bannerDescription}</p>
						</div>
						<div className="service-type-cts-btn-box flex items-center gap-[30px] mt-[68px]">
							<button className="service-cta-primary empty:hidden py-[18px] px-5 text-[18px] text-center font-tertery font-bold leading-[1.2] text-black bg-[#F1F1F1] border border-[#F1F1F1] sm:text-[16px] hover:bg-transparent hover:text-neu-white">
								{data.bannerBtnText1}
							</button>
							<button className="service-cta-secondary empty:hidden py-[18px] px-5 text-[18px] text-center font-tertery font-bold leading-[1.2] text-neu-white bg-transparent border border-[#F1F1F1] sm:text-[16px] hover:bg-neu-white hover:text-black">
								{data.bannerBtnText2}
							</button>
						</div>
					</div>
				</div>
			</section>
		);
	};

export default ServiceDetailsBanner;
