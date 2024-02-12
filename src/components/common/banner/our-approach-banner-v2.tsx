import React from "react";
import Image from "next/image";


interface OurApproachBannerVersionTwoProps {
	data: {
		pagePathTitle?: string;
		pageslugImage: string;
		pageSlagImageWidth?: number;
		pageSlagImageHeight?: number;
		pageSlugTitle?: string;
		pageMainTitle?: string;
		pageSubTitle?: string;
		pageMainDesc1?: string; 
		pageMainDesc2?: string;
	};
}

const OurApproachBannerVersionTwo: React.FC<OurApproachBannerVersionTwoProps> = ({ data }) => {
	return (
		<section className="our-approach-banner-section pt-[132px]">
			<div className="custom-container max-w-[1056px]">
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
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
					<span>
						<a href="/our-approach">Our Approach</a>
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
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
					<span className="current-page">{data.pagePathTitle}</span>
				</div>

				<div className="our-approach-cont-box">
					<div className="division-slag-title-box mb-2">
						<Image
							src={data.pageslugImage}
							alt="page slag modal image"
							width={data.pageSlagImageWidth}
							height={data.pageSlagImageHeight}
						/>
						<h5 className="mt-5">{data.pageSlugTitle}</h5>
					</div>
					<h1 className="approach-title">{data.pageMainTitle}</h1>
					<p className="desc italic">{data.pageSubTitle}</p>
					<div className="banner-desc-box mt-14">
						<p className="desc mb-6">{data.pageMainDesc1}</p>
						<p className="desc">{data.pageMainDesc2}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurApproachBannerVersionTwo;
