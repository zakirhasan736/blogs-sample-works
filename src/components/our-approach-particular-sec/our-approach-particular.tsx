import React from "react";
import OurApproachTabs from "./our-approach-tabs";
import tabsData from "@/data/our-approach-home/our-approach-tabs-data.json";

const OurApproachParticulasSection: React.FC = () => {


	return (
		<section className="our-approach-particulas-section pt-[70px] md:pt-[55px] sm:pt-10">
			<div className="custom-container max-w-[1056px]">
				<div className="our-approach-content-main-wrapper-box md:px-0 overflow-hidden">
					<OurApproachTabs data={tabsData} />
				</div>
			</div>
		</section>
	);
};

export default OurApproachParticulasSection;
