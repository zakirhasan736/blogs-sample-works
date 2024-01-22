import React from "react";
import { Image } from "@packages/packages";
interface ArticleBanner {}
interface ArticleBannerProps {
	data: {
		ArticleBannerModalImg: string;
		subHeading?: string;
		title?: string;
		description?: string;
		colorText?: string;
		isColorText?: boolean; // Add a boolean property to indicate color text
	};
}

const ArticleBanner: React.FC<ArticleBannerProps> = ({ data }) => {
	return (
		<section className="banner-varient-two-section relative z-30 bg-neu-black px-[71px] py-[120px] h-[100vh] max-h-[950px] laptop-x:h-[720px] sm:h-[680px] laptop-x:px-0 laptop-x:pb-[119px] md:pb-[80px] sm:pb-[65px]">
			<div className="case-study-banner-modal-image max-w-[1920px] mx-auto absolute top-0 left-0 right-0 w-full h-full -z-10">
				<Image
					src={data.ArticleBannerModalImg || ""}
					alt="case study banner image"
					width={1722}
					height={773}
					className="case-study-banner-modal-image w-full h-full object-cover sm:object-cover"
				/>
			</div>
			<div className="custom-container h-full max-w-[1470px]">
				<div className="banner-varient-two-content flex items-end h-full justify-start max-w-[1430px] mx-auto">
					<div className="banner-varient-two-text-box mt-auto sm:mb-0">
						<h4 className="banner-varient-sub-title uppercase text-neu-white sm:text-[17px] sm:mb-[14px] text-left text-text-medium-4 font-primary font-semibold leading-none tracking-[7.62px]">
							{data.subHeading || ""}
						</h4>
						<h1 className="banner-varient-title capitalize mt-5  xxs:text-[47px] sm:text-[40px] text-[70px] laptop-x:text-[74px] laptop-x:max-w-[1160px]  text-left text-neu-white font-primary font-medium leading-none tracking-[2.7px]">
							{data.isColorText &&
								data.colorText && ( // Check for isColorText and colorText existence
									<span className="color-text">{data.colorText}</span>
								)}
							{data.title || ""}
						</h1>
						<p className="banner-varient-desc mt-[18px] sm:text-[14px] text-neu-white text-left text-[26px] font-primary font-normal leading-[1.1]">
							{data.description || ""}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticleBanner;
