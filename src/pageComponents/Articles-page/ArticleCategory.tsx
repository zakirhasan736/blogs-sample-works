import SectionTitleBoxTwo from "@/components/common/sec-common-title-box/section-title-box-two";
import { Image } from "@packages/packages";
import ArticleDetailsInfoCard from "./ArticleDetailsInfoCard";
import ArticleDescription from "./ArticleDescriptionBox";
import React from "react";
import ArticleBanner from "@/components/common/banner/article-banner";
interface ArticleCategoryPageProps {
	data: {
		bannerData: {
			subHeading?: string;
			title?: string;
			description?: string;
			colorText?: string;
			isColorText?: boolean;
			ArticleBannerModalImg: string;
		}; // Define the type for bannerData
		titleData: any; // Define the type for titleData
		articleModalImageOne: any;
		articleModalImageTwo: any;
		articleDetailsDataLeft: any;
		articleDetailsDataRight: any;
		descInfoArticle: any;
	};
}
const ArticlesCategory: React.FC<ArticleCategoryPageProps> = ({ data }) => {
		if (!data) {
			return <div>No article content available</div>;
		}
	const {
		bannerData,
		titleData,
		articleModalImageOne,
		articleModalImageTwo,
		articleDetailsDataLeft,
		articleDetailsDataRight,
		descInfoArticle,
	} = data;
	return (
		<div className="articles-page-main-wrapper overflow-hidden">
			{/* articles banner section  */}
			<ArticleBanner data={bannerData || ""} />
			{/* articles banner section  end*/}

			{/* article main content wrapper details info */}
			<section className="articles-main-wrapper-details-info pt-[193px] pb-[200px] md:pt-[120px] sm:pt-[70px] md:pb-[120px]">
				<div className="custom-container max-w-[1470px]">
					<div className="articles-details-content-main">
						<SectionTitleBoxTwo {...(titleData || "")} />
						<div className="articles-details-content-main-wrapper pl-[147px] pr-0  md:px-0 grid grid-cols-16 gap-5 sm:flex sm:flex-col">
							<div className="articles-details-cont-main-box-wrap col-span-full">
								<Image
									src={articleModalImageOne || ""}
									alt="articles modal image"
									width={1320}
									height={990}
									className="modal-article-main-image"
								/>
								<ArticleDetailsInfoCard
									details={articleDetailsDataLeft || ""}
									detailsTwo={articleDetailsDataRight || ""}
								/>
								<Image
									src={articleModalImageTwo || ""}
									alt="articles modal image"
									width={1320}
									height={483}
									className="modal-article-main-image-two"
								/>
								<ArticleDescription descInfoArticle={descInfoArticle || ""} />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* article main content wrapper details info end*/}
		</div>
	);
};

export default ArticlesCategory;
