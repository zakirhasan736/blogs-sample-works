import React from "react";

interface ArticleParagraph {
	text: string;
}

interface ArticleDescriptionProps {
	descInfoArticle?: {
		paragraphs?: ArticleParagraph[];
		shortDescription?: string;
	};
}

const ArticleDescription: React.FC<ArticleDescriptionProps> = ({
	descInfoArticle,
}) => {
	if (!descInfoArticle || !descInfoArticle.paragraphs) {
		return <div>No article content available</div>;
	}

	return (
		<div className="articles-description-cont-box mt-[60px]">
			<div className="article-desc-box">
				{descInfoArticle.paragraphs.map((paragraph, index) => (
					<p
						key={index}
						className="articles-description text-text-medium-3 sm:text-[19px] mb-4 text-left text-neu-white font-primary font-medium leading-normal">
						{paragraph.text || ""}
					</p>
				))}
			</div>
			<p className="articles-in-short-description mt-9 text-text-medium-4 sm:text-[17px] text-left text-neu-white font-primary font-medium leading-normal">
				{descInfoArticle.shortDescription || ""}
			</p>
		</div>
	);
};

export default ArticleDescription;
