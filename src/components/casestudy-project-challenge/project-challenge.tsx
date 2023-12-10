import {Image} from "@packages/packages"

const ProjectChallenge = () => {
  return (
		<div className="case-study-challenge-section pb-[119px] sm:pb-10 overflow-hidden">
			<div className="custom-container">
				<div className="case-study-challenge-wrapper-box">
					<div className="section-title-box">
						<div className="section-titles">
							<div className="section-model-title sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
								THE CHALLENGE
							</div>
							<h2 className="section-title empty:hidden text-[44px] text-left text-neu-white font-primary font-medium uppercase tracking-[4px] sm:text-[20px]">
								The Challenge
							</h2>
						</div>
						<div className="quote-box pl-[100px] sm:pl-0">
							<p className="quote-desc-text mt-12 sm:mt-6 relative max-w-[1048px] w-full pl-[200px] sm:pl-5 empty:hiddem text-[27px] text-left text-neu-white font-primary font-semibold leading-normal sm:text-[13px]">
								Zenbase, a financial health solution for renters, aspired to
								provide users with an empowering and user-friendly platform to
								support their financial well-being.
							</p>
							<p className="quote-desc-text pl-[200px] sm:pl-5 mt-7 max-w-[1048px] w-full sm:mt-4 empty:hiddem text-[20px] text-left text-neu-white font-primary font-medium leading-normal sm:text-[12px]">
								The challenge lay in creating a digital space that effortlessly
								guided users, usually renters and property managers, towards
								financial wellness, while establishing a brand presence that
								resonated with that very target audience.
							</p>
						</div>
					</div>
					<div className="portfolio-challenge-brand-assets pt-[156px] sm:pt-[126px] grid grid-cols-16 gap-12 sm:gap-8">
						<div className="project-challenge-card-item col-span-9 flex flex-col-reverse items-start">
							<h3 className="project-challenge-brand-title text-[55px] sm:text-[23px] text-left text-neu-white font-primary font-medium leading-none capitalize mt-10 sm:mt-6">
								Brand Assets
							</h3>
							<Image
								src="/images/project-cha;ange-image-1.jpg"
								alt="project portfolio overview image"
								width={778}
								height={868}
								className="portfolio-overview-modal-image w-full"
							/>
						</div>
						{/* ======= */}
						<div className="project-challenge-card-item col-span-7 items-start flex-col">
							<h3 className="project-challenge-brand-title mt-12 text-[55px] sm:text-[23px] text-left text-neu-white font-primary font-medium leading-none capitalize mb-10 sm:mb-6">
								Brand Assets
							</h3>
							<Image
								src="/images/project-cha;ange-image-2.jpg"
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
}

export default ProjectChallenge
