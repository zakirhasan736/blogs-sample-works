import { Image } from "@packages/packages";
import React from "react";
interface ProjectOverviewProps {
	data: {
		projectOverviewSubtitle?: string;
		projectOverviewBeforeColorTitle?: string;
		projectOverviewTitleColor?: string;
		projectOverviewAfterColorTitle?: string;
		projectOverviewDesc?: string;
		quoteText?: string;
		quoteDescText?: string;
		overviewPortfolioTitle?: string;
		overviewPortfolioImage: string;
	};
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ data }) => {
	return (
		<div className="case-study-project-overview pt-[148px] pb-[100px] sm:py-10 overflow-hidden">
			<div className="custom-container">
				<div className="project-overview-wrapper  max-w-[1430px] mx-auto">
					<h4 className="overview-subtitle uppercase empty:hidden mb-14 sm:mb-8 text-left text-[22px] text-neu-white font-primary font-semibold tracking-[3.36px] leading-none sm:text-[14px]">
						{data.projectOverviewSubtitle || ""}
					</h4>

					<h2 className="overview-title empty:hidden text-[60px] laptop-x:text-[54px] md:text-[34px] sm:mb-[23px] sm:text-[23px] text-left text-neu-white font-primary font-semibold leading-[1.1]">
						{data.projectOverviewBeforeColorTitle || ""}
						<span className="text-secondary">{data.projectOverviewTitleColor || ""}</span>
						{data.projectOverviewAfterColorTitle || ""}
					</h2>

					<p className="overview-desc empty:hidden mt-16 text-[26px] max-w-[1048px] w-full sm:text-[18px] text-left text-neu-white font-primary font-medium leading-normal">
						{data.projectOverviewDesc || ""}
					</p>
					<div className="quote-box  mt-16  md:pl-0">
						<p className="quote-desc-text sm:mt-6 relative max-w-[1048px] w-full pl-[200px] laptop-x:pl-[160px] laptop-m:pl-[100px] lg:pl-[80px] md:pl-[55px] sm:pl-5 empty:hiddem text-[26px] text-left text-neu-white font-primary font-normal leading-normal sm:text-[13px]">
							{data.quoteText || ""}
						</p>
						<p className="quote-desc-text pl-[200px] sm:pl-5 mt-7 max-w-[1048px] w-full sm:mt-4 empty:hiddem text-[20px] text-left text-neu-white font-primary font-normal leading-normal sm:text-[12px]">
							{data.quoteDescText || ""}
						</p>
					</div>
					<div className="project-overview-portfolio mt-20">
						<div className="portfolio-overview-modal-one">
							<h3 className="overview-portfolio-title mb-10 sm:mb-6 text-neu-white text-left text-[48px] laptop-x:text-[38px] lg:text-[32px] sm:text-[23px] font-primary font-medium leading-none">
								{data.overviewPortfolioTitle}
							</h3>
							<Image
								src={data.overviewPortfolioImage}
								alt="project portfolio overview image"
								width={1430}
								height={868}
								className="portfolio-overview-modal-image w-full h-[868px] laptop-x:h-auto sm:h-[211px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectOverview;
