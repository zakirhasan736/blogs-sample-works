import {Image} from "@packages/packages"

const ProjectOverview = () => {
  return (
		<div className="case-study-project-overview pt-[100px] pb-[73px] sm:py-10 overflow-hidden">
			<div className="custom-container">
				<div className="project-overview-wrapper">
					<h4 className="overview-subtitle uppercase empty:hidden mb-14 sm:mb-8 text-left text-[28px] text-neu-white font-primary font-semibold tracking-[3.36px] leading-none sm:text-[14px]">
						Project Overview
					</h4>
					<h2 className="overview-title empty:hidden text-[65px] sm:mb-[23px] sm:text-[23px] text-left text-neu-white font-primary font-semibold leading-[1.1]">
						Elevating Zenbase with Intuitive UX/UI Design and Compelling Brand
						Assets
					</h2>
					<p className="overview-desc empty:hidden mt-16 text-[31px] max-w-[1048px] w-full sm:text-[18px] text-left text-neu-white font-primary font-semibold leading-normal">
						Our collaboration with "Spark Presents: AI & Humanity" demonstrated
						the transformative power of a compelling visual identity and
						thoughtfully crafted marketing assets. By sparking curiosity and
						conversation, we successfully propelled the campaign into the
						forefront of discussions on A.I and its impact on humanity,
						fostering meaningful dialogue and exploration of the future.
					</p>
					<div className="quote-box pl-[172px] sm:pl-0">
						<p className="quote-desc-text mt-10 sm:mt-6 relative max-w-[1048px] w-full pl-[200px] sm:pl-5 empty:hiddem text-[27px] text-left text-neu-white font-primary font-semibold leading-normal sm:text-[13px]">
							The UI design embraced a minimalist approach, featuring soft
							colour palettes, clean typography, and unobtrusive icons. The
							navigation was streamlined to provide an effortless journey
							through the app's automated financial health fixes.
						</p>
						<p className="quote-desc-text pl-[200px] sm:pl-5 mt-7 max-w-[1048px] w-full sm:mt-4 empty:hiddem text-[20px] text-left text-neu-white font-primary font-medium leading-normal sm:text-[12px]">
							Our challenge was clear: create a compelling visual identity for
							the campaign and produce marketing assets that would
							simultaneously cultivate imagination.
						</p>
					</div>
					<div className="project-overview-portfolio mt-9">
						<div className="portfolio-overview-modal-one">
							<h3 className="overview-portfolio-title mb-10 sm:mb-6 text-neu-white text-left text-[55px] sm:text-[23px] font-primary font-medium leading-none">
								Web Design
							</h3>
							<Image
								src="/images/project-overview-image.jpg"
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
}

export default ProjectOverview
