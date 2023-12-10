import {Image} from '@packages/packages'

const ProjectResult = () => {
  return (
		<div className="study-project-result-section pb-[115px] sm:pb-20 overflow-hidden">
			<div className="custom-container">
				<div className="study-project-result-wrapper">
					<div className="section-modal-title-reals">
						<div className="section-model-title sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
							The result
						</div>
					</div>
					<div className="project-result-cont-wrap grid grid-cols-16 gap-8 relative z-50 sm:flex sm:flex-col sm:gap-16">
						<div className="result-cont-bg-modal-img absolute top-0 left-0 h-full w-full -z-10"></div>
						{/* ==== */}
						<div className="project-result-cont-wrap-left col-span-10">
							<div className="section-title-box">
								<div className="section-titles">
									<h2 className="section-title empty:hidden text-[55px] text-left text-neu-white font-primary font-medium leading-none uppercase tracking-[4px] sm:text-[20px] mb-12 sm:mb-9">
										The result
									</h2>
								</div>
							</div>
							<div className="project-result-modal-image-box flex gap-12 items-end sm:items-start sm:flex-col sm:gap-4 mx-auto">
								<Image
									src="/images/project-result-modal-image.jpg"
									alt="project result modal image"
									width={620}
									height={917}
									className="project-result-modal-image"
								/>
								{/* <span className="hints-text text-[20px] whitespace-nowrap text-left text-neu-white font-primary font-medium leading-none sm:text-13px">
										(Turn to see results)
									</span> */}
							</div>
						</div>
						{/* ====== */}
						<div className="project-result-cont-wrap-right col-span-6">
							<div className="projects-result-info-cont">
								{/* ===== */}
								<div className="result-info-card-item text-center mb-20 sm:mb-16">
									<h4 className="result-percent mb-4 text-[55px] text-center text-neu-white font-bold font-primary leading-none sm:text-[42px]">
										54%
									</h4>
									<p className="result-desc max-w-[419px] sm:max-w-[240px] w-full mx-auto text-[25px] text-center text-neu-white font-primary font-medium leading-normal sm:text-[14px]">
										rise in event registrations compared to previous campaigns
									</p>
								</div>
								{/* ===== */}
								<div className="result-info-card-item text-center mb-20 sm:mb-16">
									<h4 className="result-percent mb-4 text-[55px] text-center text-neu-white font-bold font-primary leading-none sm:text-[42px]">
										75%
									</h4>
									<p className="result-desc max-w-[419px] sm:max-w-[240px] w-full mx-auto text-[25px] text-center text-neu-white font-primary font-medium leading-normal sm:text-[14px]">
										more online shares and comments on campaign-related posts
									</p>
								</div>
								{/* ===== */}
								<div className="result-info-card-item text-center">
									<h4 className="result-percent mb-4 text-[55px] text-center text-neu-white font-bold font-primary leading-none sm:text-[42px]">
										90%
									</h4>
									<p className="result-desc max-w-[419px] sm:max-w-[240px] w-full mx-auto text-[25px] text-center text-neu-white font-primary font-medium leading-normal sm:text-[14px]">
										of attendees expressed interest in future events
									</p>
								</div>
								{/* ===== */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectResult
