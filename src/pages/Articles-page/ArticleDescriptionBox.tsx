

interface ArticleParagraph {
	text: string;
}

interface ArticleDescriptionProps {
	descInfoArticle: {
		paragraphs: ArticleParagraph[];
		shortDescription?: string;
	};
}
 
const ArticleDescription: React.FC<ArticleDescriptionProps> = ({
	descInfoArticle,
}) => {
	return (
		<div className="articles-description-cont-box mt-[60px]">
			<div className="article-desc-box">
				{descInfoArticle.paragraphs.map((paragraph, index) => (
					<p
						key={index}
						className="articles-description text-text-medium-3 mb-4 text-left text-neu-white font-primary font-medium leading-normal">
						{paragraph.text}
					</p>
				))}
			</div>
			<p className="articles-in-short-description mt-9 text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
				{descInfoArticle.shortDescription}
			</p>
		</div>
	);
};

export default ArticleDescription;
