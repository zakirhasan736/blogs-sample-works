import React from "react";
import { Image } from "@packages/packages";

interface ArticleBannerProps {
	data: {
		ArticleImg: string;
		title?: string;
		description?: string[];
		isFeaturedArticles?: boolean;
		auther: string;
		Posteddate: string;
	};
}

const ArticleBanner: React.FC<ArticleBannerProps> = ({ data }) => {
	return (
		<section className="blogs-details-banner-section pt-[193px] pb-[29px]">
			<div className="custom-container max-w-[870px]">
				<div className="blogs-banner-wrapper">
					<div className="featured-blogs-card max-w-[857px] mx-auto">
						<div className="featured-img-modal-box relative mb-5">
							<Image
								src={data.ArticleImg || ""}
								alt="blogs featured image"
								width={805}
								height={268}
								className="h-[268px] object-cover"
							/>
							{data.isFeaturedArticles && (
								<ul className="category-tags absolute top-[17px] left-[19px] px-3 py-[6px] text-center text-[14px] text-neu-white font-primary font-medium leading-normal bg-[#00000080]">
									<li>Featured</li>
								</ul>
							)}
						</div>
						<div className="featured-image-cont-box">
							<h2 className="featured-blog-title text-[22px] sm:text-[18px] text-left text-neu-white font-tertery font-medium leading-[24px] mb-4">
								{data.title || ""}
							</h2>
							<div className="featured-blog-info flex items-center justify-between">
								<p className="author-name text-neu-white text-[14px] font-medium text-left font-tertery leading-normal opacity-70">
									{`- ${data.auther || ""}`}
								</p>
								<p className="posted-date text-neu-white text-[14px] font-medium text-right font-tertery leading-normal opacity-70">
									{data.Posteddate || ""}
								</p>
							</div>
						</div>
					</div>
					{data.description && (
						<div className="blogs-banner-desc-box mt-14">
							{data.description.map((paragraph, index) => (
								<p key={index} className="desc mb-6 opacity-85">
									{paragraph || ""}
								</p>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ArticleBanner;
