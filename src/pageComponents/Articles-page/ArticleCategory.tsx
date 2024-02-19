import React from "react";
import ArticleSectionVersionTwo from "@/components/article-section/article-section-v2";
import LatestBlogs from "@data/blogs/short-blog-data.json";
import ArticleDetailsItem from "./articles-details-item";
import TagsList from "./article-tag";
import ArticleBanner from "@/components/common/banner/article-banner";
interface ArticleCategoryPageProps {
	data: {
		BannerData: any;
		articlesDetailsData: any;
		TagsListdata: any;
	};
}
const ArticlesCategory: React.FC<ArticleCategoryPageProps> = ({ data }) => {
	if (!data) {
		return <div>No article content available</div>;
	}
	const { BannerData, articlesDetailsData, TagsListdata } = data;
	// Sort the latest blogs by date in descending order
	const sortedLatestBlogs = LatestBlogs.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// Select the latest three blogs
	const latestThreeBlogs = sortedLatestBlogs.slice(0, 3);
	return (
		<div className="articles-page-main-wrapper overflow-hidden">
			{/* articles banner section  */}
			<ArticleBanner data={BannerData} />
			{/* articles banner section  end*/}

			{/* article main content wrapper details info */}
			<section className="articles-main-wrapper-details-info pb-[150px] lg:pb-20 sm:pb-20">
				<div className="custom-container max-w-[870px]">
					<ArticleDetailsItem articles={articlesDetailsData} />
					{/* ====== */}
					<TagsList tags={TagsListdata.tags} />
					{/* ============= */}
				</div>
			</section>
			{/* article main content wrapper details info end*/}
			<ArticleSectionVersionTwo
				latestBlogs={latestThreeBlogs}
				BlogSecTitle="Related Articles"
			/>
		</div>
	);
};

export default ArticlesCategory;
