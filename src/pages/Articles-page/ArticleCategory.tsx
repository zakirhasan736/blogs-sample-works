import BannerVarientTwo from "@/components/common/banner/banner-varient-2";
import SectionTitleBoxTwo from "@/components/common/sec-common-title-box/section-title-box-two";
import { Image } from "@packages/packages";
import ArticleDetailsInfoCard from "./ArticleDetailsInfoCard";
import ArticleDescription from "./ArticleDescriptionBox";
interface ArticleCategoryPageProps {
	data: {
		bannerData: any; // Define the type for bannerData
		titleData: any; // Define the type for titleData
		articleModalImageOne?: any;
		articleModalImageTwo?: any;
		articleDetailsData: any;
		descInfoArticle: any;
	};
}
const ArticlesCategory: React.FC<ArticleCategoryPageProps> = ({ data }) => {
	const {
		bannerData,
		titleData,
		articleModalImageOne,
		articleModalImageTwo,
		articleDetailsData,
		descInfoArticle,
	} = data;
	return (
		<div className="articles-page-main-wrapper">
			{/* articles banner section  */}
			<BannerVarientTwo data={bannerData} />
			{/* articles banner section  end*/}

			{/* article main content wrapper details info */}
			<section className="articles-main-wrapper-details-info pt-[193px] pb-[400px]">
				<div className="custom-container">
					<div className="articles-details-content-main">
						<SectionTitleBoxTwo {...titleData} />
						<div className="articles-details-content-main-wrapper pl-[155px] pr-[64px] grid grid-cols-16 gap-5">
							<div className="articles-details-cont-main-box-wrap col-span-full">
								<Image
									src={articleModalImageOne}
									alt="articles modal image"
									width={1320}
									height={990}
									className="modal-article-main-image"
								/>
								<ArticleDetailsInfoCard details={articleDetailsData} />
								<Image
									src={articleModalImageTwo}
									alt="articles modal image"
									width={1320}
									height={483}
									className="modal-article-main-image-two"
								/>
								<ArticleDescription descInfoArticle={descInfoArticle} />
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
