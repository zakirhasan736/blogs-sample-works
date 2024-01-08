import BannerVarientTwo from "@/components/common/banner/banner-varient-2";
import SectionTitleBoxTwo from "@/components/common/sec-common-title-box/section-title-box-two";
import SlugList from "@/components/common/slug-names/slugs-name";
import OurStatics from "@/components/our-statics/our-statics";
import ThoughtDivisionInfoList from "@/components/thought-division-details/ThoughtDivisionInfoList";
import React from "react";
interface CategoryPageProps {
	data: {
		bannerData: {
			subHeading?: string;
			title?: string;
			description?: string;
			colorText?: string;
			isColorText?: boolean;
		}; // Define the type for bannerData
		titleData: any; // Define the type for titleData
		slugs: string[]; // Define the type for slugs
		ThoughtDivisionData: {
			// Define the type for items
			detailsinfo_title: string;
			detailsinfo_description: string;
			infoList?: string[];
		}[];
		DivisionData: {
			modalScrollText?: string;
			thoughtDivisionTitle?: string;
			thoughtDivisionSubtitle?: string;
		};
		staticsItems: {
			title?: string;
			description?: string;
		}[];
	};
}
const CategoriesPage: React.FC<CategoryPageProps> = ({ data }) => {
		if (!data) {
			return <div>No article content available</div>;
		}
  const { bannerData, titleData, slugs, ThoughtDivisionData, DivisionData, staticsItems} = data;

  return (
		<div className="our-thought-division-main-wrapper">
			{/* thought division banner */}
			<BannerVarientTwo data={bannerData || ""} />
			{/* thought division banner */}
			<div className="our-thought-division-main-wrapper-cont pt-[184px]  md:pt-20 sm:pt-[67px]">
				<div className="custom-container">
					<div className="our-thought-division-section-box mb-[136px] md:mb-[56px] max-w-[1430px] mx-auto">
						<SectionTitleBoxTwo {...(titleData || "")} />
					</div>
				</div>
				{/* thought division dedtails info */}
				<section className="thought-division-details-section bg-neu-black pb-[100px]  pt-[100px] overflow-hidden md:pt-[90px] sm:pt-[67px] sm:pb-[80px] md:pb-[90px]">
					<div className="custom-container">
						<div className="thought-division-details-wrap relative grid grid-cols-16 gap-5 z-50 sm:flex sm:flex-col mx-auto max-w-[1430px]">
							{/* approach slug list content */}
							<SlugList slugs={slugs || ""} />
							{/* thought division details content box */}
							<ThoughtDivisionInfoList
								division={DivisionData || ""}
								items={ThoughtDivisionData || ""}
							/>
							{/* === */}
						</div>
					</div>
				</section>
				{/* thought division dedtails info end */}

				{/* our statics section */}
				<OurStatics
					ourStaticsTitle="Growth, revenue, results"
					staticsItems={staticsItems}
				/>
				{/* our statics section end*/}
			</div>
		</div>
	);
};

export default CategoriesPage;
