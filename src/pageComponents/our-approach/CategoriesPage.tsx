import OurStatics from "@/components/our-statics/our-statics";
import OurWorkSec from "@/components/component-v2/our-work-section/our-work-sec";
import ThoughtDivisionInfoList from "@/components/thought-division-details/ThoughtDivisionInfoList";
import React from "react";
import OurApproachBannerVersionTwo from "@/components/common/banner/our-approach-banner-v2";
interface CategoryPageProps {
	data: {
		OurApproachBannerData: {
			pagePathTitle?: string;
			pageslugImage: string;
			pageSlagImageWidth?: number;
			pageSlagImageHeight?: number;
			pageSlugTitle?: string;
			pageMainTitle?: string;
			pageSubTitle?: string;
			pageMainDesc1?: string;
			pageMainDesc2?: string;
		};
		ThoughtDivisionData: {
			detailsinfo_title: string;
			detailsinfo_description: string;
			infoList?: string[];
		}[];
		DivisionData: {
			modalScrollText?: string;
			thoughtDivisionTitle?: string;
			thoughtDivisionSubtitle?: string;
			thoughtDivisionImage: string;
		};
	};
}
const CategoriesPage: React.FC<CategoryPageProps> = ({ data }) => {
		if (!data) {
			return <div>No article content available</div>;
		}

  const { OurApproachBannerData, ThoughtDivisionData, DivisionData } = data;
  
  const staticsItemsData = [
		{
			title: "50+",
			description: "Completed more than 50 Successful Marketing Projects",
		},
		{
			title: "£1-15k",
			description:
				"Our current infrastructure allows us to easily cater for projects in this budgetrange",
		},
		{
			title: "35%",
			description:
				"Over 1 in 3 clients come back to us within  the first 3 months for additional marketing and branding support.",
		},
	];
			console.log("OurApproachBannerData:", OurApproachBannerData);

  return (
		<div className="our-thought-division-main-wrapper">
			{/* thought division banner */}
			<OurApproachBannerVersionTwo data={OurApproachBannerData} />
			{/* thought division banner */}
			<div className="our-thought-division-main-wrapper-cont">
				{/* thought division dedtails info */}
				<section className="thought-division-details-section bg-neu-black pt-[47px] overflow-hidden">
					<div className="custom-container max-w-[1056px]">
						<div className="thought-division-details-wrap relative">
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
					staticsItems={staticsItemsData}
					ourStaticsTitle="Growth revenue and results"
				/>
				{/* our statics section end*/}
				<OurWorkSec WorkSecClass="pt-[70px] pb-[85px] bg-[#ffffff] light-mode-work-section" />
			</div>
		</div>
	);
};

export default CategoriesPage;
