import { Image } from "@packages/packages";

interface ProjectOverviewProps {
	data: {
		projectOverviewSubtitle?: string;
		projectOverviewTitle?: string;
		projectOverviewDesc?: string;
		quoteText?: string;
		quoteDescText?: string;
		overviewPortfolioTitle?: string;
		overviewPortfolioImage: string;
	};
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ data }) => {
	return (
		<div className="case-study-project-overview pt-[100px] pb-[73px] sm:py-10 overflow-hidden">
			<div className="custom-container">
				<div className="project-overview-wrapper">
					<h4 className="overview-subtitle uppercase empty:hidden mb-14 sm:mb-8 text-left text-[28px] text-neu-white font-primary font-semibold tracking-[3.36px] leading-none sm:text-[14px]">
						{data.projectOverviewSubtitle}
					</h4>
					<h2 className="overview-title empty:hidden text-[65px] sm:mb-[23px] sm:text-[23px] text-left text-neu-white font-primary font-semibold leading-[1.1]">
						{data.projectOverviewTitle}
					</h2>
					<p className="overview-desc empty:hidden mt-16 text-[31px] max-w-[1048px] w-full sm:text-[18px] text-left text-neu-white font-primary font-semibold leading-normal">
						{data.projectOverviewDesc}
					</p>
					<div className="quote-box pl-[172px] sm:pl-0">
						<p className="quote-desc-text mt-10 sm:mt-6 relative max-w-[1048px] w-full pl-[200px] sm:pl-5 empty:hiddem text-[27px] text-left text-neu-white font-primary font-semibold leading-normal sm:text-[13px]">
							{data.quoteText}
						</p>
						<p className="quote-desc-text pl-[200px] sm:pl-5 mt-7 max-w-[1048px] w-full sm:mt-4 empty:hiddem text-[20px] text-left text-neu-white font-primary font-medium leading-normal sm:text-[12px]">
							{data.quoteDescText}
						</p>
					</div>
					<div className="project-overview-portfolio mt-9">
						<div className="portfolio-overview-modal-one">
							<h3 className="overview-portfolio-title mb-10 sm:mb-6 text-neu-white text-left text-[55px] sm:text-[23px] font-primary font-medium leading-none">
								{data.overviewPortfolioTitle}
							</h3>
							<Image
								src={data.overviewPortfolioImage}
								alt="project portfolio overview image"
								width={1430}
								height={868}
								className="portfolio-overview-modal-image w-full h-[868px] sm:h-[211px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectOverview;
