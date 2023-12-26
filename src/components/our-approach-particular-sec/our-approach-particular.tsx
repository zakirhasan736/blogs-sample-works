import React from "react";
import SectionTitleBoxTwo from "../common/sec-common-title-box/section-title-box-two";
import OurApproachTabs from "./our-approach-tabs";
import tabsData from "@/data/our-approach-home/our-approach-tabs-data.json";
import titleData from "@/data/our-approach-home/approach-banner.json";

const OurApproachParticulasSection: React.FC = () => {


	return (
		<section className="our-approach-particulas-section pt-[193px] md:pt-[65px] sm:pt-10">
			<div className="custom-container max-w-[1430px]">
				<SectionTitleBoxTwo {...titleData} />
				<div className="our-approach-content-main-wrapper-box md:px-0">
					<OurApproachTabs data={tabsData} />
				</div>
			</div>
		</section>
	);
};

export default OurApproachParticulasSection;
