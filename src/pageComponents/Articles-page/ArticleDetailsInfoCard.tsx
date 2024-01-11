import React from "react";
interface ArticleDetailsInfoLeft {
	title: string;
	description: string;
}
interface ArticleDetailsInfoRight {
	title: string;
	description: string;
}
interface ArticleDetailsInfoCardProps {
	details: ArticleDetailsInfoLeft[];
	detailsTwo: ArticleDetailsInfoRight[];
}


const ArticleDetailsInfoCard: React.FC<ArticleDetailsInfoCardProps> = ({
	details,
	detailsTwo,
}) => {
	return (
		<div className="article-details-info-card-box pt-[126px] pb-[88px] grid grid-cols-12 gap-20 sm:gap-10 sm:flex sm:flex-col sm:py-[55px]">
			<div className="article-details-info-left-cont  col-span-6">
				{details?.map((detail, index) => (
					<div
						key={index}
						className="article-details-info-card-item mb-8">
						<h5 className="section-common-subtitle empty:hidden text-text-accend-3 sm:text-[22px] text-left text-neu-white font-primary font-semibold leading-[1.2]">
							{detail.title || ""}
						</h5>
						<p className="section-common-desc mt-[34px] text-text-medium-4 sm:text-[18px] text-left text-neu-white font-primary font-medium leading-normal">
							{detail.description || ""}
						</p>
					</div>
				))}
			</div>
			<div className="article-details-info-right-cont  col-span-6">
				{detailsTwo?.map((detail, index) => (
					<div
						key={index}
						className="article-details-info-card-item mb-8">
						<h5 className="section-common-subtitle text-text-accend-3 sm:text-[22px] text-left text-neu-white font-primary font-semibold leading-none">
							{detail.title || ""}
						</h5>
						<p className="section-common-desc mt-[34px] text-text-medium-4 sm:text-[18px] text-left text-neu-white font-primary font-medium leading-normal">
							{detail.description || ""}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ArticleDetailsInfoCard;
