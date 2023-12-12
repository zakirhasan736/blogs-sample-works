interface ArticleDetailsInfo {
	title: string;
	description: string;
}

interface ArticleDetailsInfoCardProps {
	details: ArticleDetailsInfo[];
}

const ArticleDetailsInfoCard: React.FC<ArticleDetailsInfoCardProps> = ({
	details,
}) => {
	return (
		<div className="article-details-info-card-box py-[126px] grid grid-cols-12 gap-20">
			{details?.map((detail, index) => (
				<div key={index} className="article-details-info-card-item col-span-6">
					<h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
						{detail.title}
					</h5>
					<p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
						{detail.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default ArticleDetailsInfoCard;
