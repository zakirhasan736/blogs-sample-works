// ArticleDetailsItem.tsx
import React from "react";
import Image from "next/image";

interface ContentItem {
	type: "paragraph" | "desc-item-box" | "unordered-list";
	text: string;
	link?: string;
	linkText?: string;
	title?: string;
	listItems?: string[];
}

interface ArticleDetailsItemProps {
	articles: {
		title: string;
		secondarytitle?: string;
		subtitle?: string;
		imageUrl1?: string;
		imageAlt1?: string;
		imageUrl2?: string;
		imageAlt2?: string;
		content: ContentItem[];
	}[];
}

const ArticleDetailsItem: React.FC<ArticleDetailsItemProps> = ({
	articles,
}) => {
	return (
		<div className="articles-details-content-main">
			{articles.map((article, index) => (
				<div key={index} className="articles-details-main-item mb-10">
					<div className="common-title mb-5">
						{article.title && (
							<>
								<h2 className="text-[38px] empty:hidden sm:text-[28px] text-neu-white text-left mb-2 font-tertery font-bold">
									{article.title}
								</h2>
								<span className="h-[4px] w-[34px] block bg-neu-white"></span>
							</>
						)}
						{article.secondarytitle && (
							<>
								<h3 className="text-[28px] empty:hidden sm:text-[24px] text-neu-white text-left mb-2 font-tertery font-bold">
									{article.secondarytitle}
								</h3>
								<span className="h-[4px] w-[34px] block bg-neu-white"></span>
								
							</>
						)}
						{article.subtitle && (
							<>
								<p className="sub-title empty:hidden text-neu-white mt-6 opacity-40 text-[14px] font-extrabold font-tertery leading-normal uppercase">
									{article.subtitle}
								</p>
							</>
						)}
					</div>
					{article.imageUrl1 && (
						<div className="articles-img max-w-[617px] w-full h-[209px] mb-5">
							<Image
								src={article.imageUrl1}
								alt={article.imageAlt1 || ""}
								width={617}
								height={209}
								className="w-full rounder-[6px]"
							/>
						</div>
					)}
					<div className="Paragraph-box">
						{article.content.map((item, itemIndex) => (
							<div key={itemIndex}>
								{item.type === "paragraph" && (
									<p className="paragraph-sub mb-6">
										{item.text}
										{item.link && (
											<>
												{" "}
												<a className="underline" href={item.link}>
													{item.linkText || "Link Text Here"}
												</a>
											</>
										)}
									</p>
								)}
								{item.type === "desc-item-box" && (
									<div className="desc-item-box mb-5">
										<p className="pragraph-title">{item.title}</p>
										<p>{item.text}</p>
									</div>
								)}
								{item.type === "unordered-list" && (
									<div className="Unorderd-List">
										<ul>
											{item.listItems &&
												item.listItems.map((listItem, listItemIndex) => (
													<li key={listItemIndex}>{listItem}</li>
												))}
										</ul>
									</div>
								)}
							</div>
						))}
					</div>
					{article.imageUrl2 && (
						<div className="articles-img max-w-[617px] w-full h-[209px] mt-10">
							<Image
								src={article.imageUrl2}
								alt={article.imageAlt2 || ""}
								width={617}
								height={209}
								className="w-full rounder-[6px]"
							/>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ArticleDetailsItem;
