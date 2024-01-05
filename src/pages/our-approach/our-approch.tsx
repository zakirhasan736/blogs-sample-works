
import BannerVarientTwo from '@/components/common/banner/banner-varient-2';
import OurApproachParticulasSection from '@/components/our-approach-particular-sec/our-approach-particular';
import OurStatics from '@/components/our-statics/our-statics';
import React from "react";
const OurApproach: React.FC = () => {

  const staticsItemsData = [
		{
			title: "50+",
			description: "Completed marketing projects",
		},
		{
			title: "£10-100k",
			description:
				"Our current infrastructure allows us to easily cater for projects in this budget range",
		},
		{
			title: "35%",
			description:
				"Over 1 in 3 clients come back to us within the first 3 months for additional marketing and branding support",
		},
	];

  const bannerData = {
    subHeading: 'Our approach',
    title: 'Particular believes in delivering better.',
    description: 'Our gift is observation. It just so happens that we’re a marketing agency.',
  };
  return (
		<div className="our-approach-page-main-wrapper overflow-hidden">
			{/* our approach banner section */}
			<BannerVarientTwo data={bannerData} />
			{/* our approach banner section end*/}

			{/* our approach particular wrapper main box */}
			<OurApproachParticulasSection />
			{/* our approach particular wrapper main box end*/}

			{/* our statics section */}
			<OurStatics
				staticsItems={staticsItemsData}
				ourStaticsTitle="Growth, revenue, results"
			/>
			{/* our statics section end*/}
		</div>
	);
};

export default OurApproach;
