import React from "react";
import AboutBanner from "@/components/common/banner/about-banner";
import OurMission from "../v3/aboutus/OurMission";
import MissionStatement from "../v3/aboutus/MissionStatement";
import BrandStory from "../v3/aboutus/BrandStory";
import HowWeOperate from "../v3/aboutus/HowWeOperate";
import CommunityLatter from "../v3/aboutus/CommunityLatter";
import WhatWeCare from "../v3/aboutus/WhatWeCare";

const AboutUsPage = () => {

	return (
		<div className="aboutus-page-main-wrapper overflow-hidden">
			<AboutBanner />
			<OurMission />
			<MissionStatement />
			<BrandStory />
			<HowWeOperate />
			<WhatWeCare />
			<CommunityLatter />
		</div>
	);
};

export default AboutUsPage;
