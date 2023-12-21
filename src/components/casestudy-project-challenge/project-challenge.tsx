import {Image} from "@packages/packages"
import React from "react";
interface ProjectChallengeProps {
	data: {
	projectChallengeModalTitle: string;
    projectChallengeTitle: string;
    projectChallengeQuoteText: string;
    projectChallengeQuoteDesc: string;
    projectChallengeAssetsTitle1: string;
    projectChallengeAssetsImage1: string;
    projectChallengeAssetsTitle2: string;
    projectChallengeAssetsImage2: string;
	};
}

const ProjectChallenge: React.FC<ProjectChallengeProps> = ({ data }) => {
	return (
		<div className="case-study-challenge-section pb-[119px] sm:pb-10 overflow-hidden">
			<div className="custom-container">
				<div className="case-study-challenge-wrapper-box">
					<div className="section-title-box">
						<div className="section-titles">
							<div className="section-model-title laptop-x:text-[150px] lg:text-[94px] md:text-[84px] sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
								{data.projectChallengeModalTitle}
							</div>
							<h2 className="section-title empty:hidden text-[44px] text-left text-neu-white font-primary font-medium uppercase tracking-[4px] sm:text-[20px]">
								{data.projectChallengeTitle}
							</h2>
						</div>
						<div className="quote-box pl-[100px] laptop-x:pl-[90px] laptop-m:pl-[80px] lg:pl-[60px] md:pl-0">
							<p className="quote-desc-text mt-12 sm:mt-6 relative max-w-[1048px] w-full pl-[200px] laptop-x:pl-[160px] laptop-m:pl-[100px] lg:pl-[80px] md:pl-[55px] sm:pl-5 empty:hiddem text-[27px] text-left text-neu-white font-primary font-semibold leading-normal sm:text-[13px]">
								{data.projectChallengeQuoteText}
							</p>
							<p className="quote-desc-text pl-[200px] sm:pl-5 mt-7 max-w-[1048px] w-full sm:mt-4 empty:hiddem text-[20px] text-left text-neu-white font-primary font-medium leading-normal sm:text-[12px]">
								{data.projectChallengeQuoteDesc}
							</p>
						</div>
					</div>
					<div className="portfolio-challenge-brand-assets pt-[156px] sm:pt-[126px] grid grid-cols-16 gap-12 sm:gap-8">
						<div className="project-challenge-card-item col-span-9 flex flex-col-reverse items-start">
							<h3 className="project-challenge-brand-title text-[55px] sm:text-[23px] text-left text-neu-white font-primary font-medium leading-none capitalize mt-10 sm:mt-6">
								{data.projectChallengeAssetsTitle1}
							</h3>
							<Image
								src={data.projectChallengeAssetsImage1}
								alt="project portfolio overview image"
								width={778}
								height={868}
								className="portfolio-overview-modal-image w-full"
							/>
						</div>
						{/* ======= */}
						<div className="project-challenge-card-item col-span-7 items-start flex-col">
							<h3 className="project-challenge-brand-title mt-12 text-[55px] sm:text-[23px] text-left text-neu-white font-primary font-medium leading-none capitalize mb-10 sm:mb-6">
								{data.projectChallengeAssetsTitle2}
							</h3>
							<Image
								src={data.projectChallengeAssetsImage2}
								alt="project portfolio overview image"
								width={605}
								height={921}
								className="portfolio-overview-modal-image w-full"
							/>
						</div>
						{/* ======= */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectChallenge
