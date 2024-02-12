
import OurWorkSec from '@/components/component-v2/our-work-section/our-work-sec';
import OurApproachParticulasSection from '@/components/our-approach-particular-sec/our-approach-particular';
import OurStatics from '@/components/our-statics/our-statics';
import React from "react";
const OurApproach: React.FC = () => {

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

  const bannerData = {
    subHeading: 'Our approach',
    title: 'Particular believes in delivering better.',
    description: 'Our gift is observation. It just so happens that we’re a marketing agency.',
  };
  return (
		<div className="our-approach-page-main-wrapper overflow-hidden">
			{/* our approach banner section */}
			<div className="our-approach-banner-section pt-[132px]">
				<div className="custom-container max-w-[1048px]">
					<div className="breadcrumbs mb-[60px] inline-flex items-center">
						<span>
							<a href="/">Home</a>
						</span>

						<span className="icon-forward flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="7"
								height="13"
								viewBox="0 0 7 13"
								fill="none">
								<path
									d="M1 2L6 7L1 12"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span className="current-page">Our Approach</span>
					</div>
					<div className="our-approach-cont-box">
						<h1 className="approach-title">
							Particular believes in delivering better
						</h1>
						<p className="desc italic">
							Our gift is observation. It just so happens that we’re a marketing
							agency.
						</p>
						<div className="banner-desc-box mt-14">
							<p className="desc mb-6">
								We encourage Scrutiny and questioning. Then redesign and
								polishing. And then more questioning. And more polishing.
							</p>
							<p className="desc">
								This meticulous approach is in both why and how we innovate on
								the services offered at Particular. We turn the data we get from
								our better-delivery approach in data-based marketing solutions.
								London and beyond.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* our approach banner section end*/}

			{/* our approach particular wrapper main box */}
			<OurApproachParticulasSection />
			{/* our approach particular wrapper main box end*/}

			{/* our statics section */}
			<OurStatics
				staticsItems={staticsItemsData}
				ourStaticsTitle="Growth revenue and results"
			/>
			{/* our statics section end*/}
			<OurWorkSec WorkSecClass="pt-[70px] pb-[85px] bg-[#ffffff] light-mode-work-section" />
		</div>
	);
};

export default OurApproach;
