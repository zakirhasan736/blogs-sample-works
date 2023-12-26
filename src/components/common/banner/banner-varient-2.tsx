import React from "react";
interface BannerVarientTwo{}
interface BannerVarientTwoProps {
	data: {
		subHeading?: string; 
		title?: string;
		description?: string;
		colorText?: string;
		isColorText?: boolean; // Add a boolean property to indicate color text
	};
}

const BannerVarientTwo: React.FC<BannerVarientTwoProps> = ({ data }) => {
	return (
		<section className="banner-varient-two-section bg-[#424245] px-[71px] py-[120px] h-[666px] laptop-x:h-[720px] sm:h-[680px] laptop-x:px-0 laptop-x:pb-[119px]">
			<div className="custom-container h-full">
				<div className="banner-varient-two-content flex items-end h-full justify-start max-w-[1430px] mx-auto">
					<div className="banner-varient-two-text-box my-auto sm:mb-0">
						<h4 className="banner-varient-sub-title uppercase text-neu-white sm:text-[17px] sm:mb-[14px] text-left text-text-medium-4 font-primary font-semibold leading-none tracking-[7.62px]">
							{data.subHeading || ""}
						</h4>
						<h1 className="banner-varient-title capitalize mt-5 max-w-[1000px] xxs:text-[47px] sm:text-[55px] text-[80px] laptop-x:text-[74px] laptop-x:max-w-[1160px]  text-left text-neu-white font-primary font-bold leading-none tracking-[2.7px]">
							{data.isColorText &&
								data.colorText && ( // Check for isColorText and colorText existence
									<span className="color-text">{data.colorText}</span>
								)}
							{data.title || ""}
						</h1>
						<p className="banner-varient-desc mt-[18px] sm:text-[14px] text-neu-white text-left text-[26px] font-primary font-semibold leading-[1.1]">
							{data.description || ""}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerVarientTwo;
