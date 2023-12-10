import {Image} from '@packages/packages'
import Button from '../elements/button/button';

const ProjectMethode = () => {
  return (
		<div className="case-study-project-methode-section pb-[200px] sm:pb-[70px] overflow-hidden">
			<div className="custom-container">
				<div className="case-study-project-methode-wrap">
					<div className="section-title-box">
						<div className="section-titles">
							<div className="section-model-title sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
								THE METHOD
							</div>
							<h2 className="section-title empty:hidden text-[44px] text-left text-neu-white font-primary font-medium uppercase tracking-[4px] sm:text-[20px]">
								The Particular Method
							</h2>
						</div>
					</div>
					<div className="case-study-project-methodes-cont-wrap grid grid-cols-16 gap-9 mt-16 sm:mt-6 sm:flex sm:flex-col sm:gap-0">
						<div className="sm:col-span-full col-span-12 project-methodes-left-cont max-w-[814px]">
							<p className="project-methodes-desc text-[32px] sm:text-[13px] text-left text-neu-white font-primary font-semibold leading-normal mb-6">
								We embarked on the project with extensive user research to
								understand the needs and preferences of Zenbase's audience.
								Through surveys and usability testing, we gained insights into
								user behaviours and expectations.
							</p>
							<p className="project-methodes-desc text-[25px] sm:text-[13px] text-left text-neu-white font-primary font-medium leading-normal mb-6">
								Using the research data, we embarked on the design process,
								crafting a user experience that prioritised simplicity, clarity,
								and the efficiency that comes with good organisation. We
								developed user personas for both sets of primary users to guide
								our decision-making, ensuring that every element of the app
								resonated with them according to their needs.
							</p>
							<p className="project-methodes-desc text-[25px] sm:text-[13px] text-left text-neu-white font-primary font-medium leading-normal">
								Parallel to UX/UI design, we embarked on crafting brand assets
								that would reflect Zenbase's mission: becoming a trusted partner
								in managing household finances while eliminating late fees and
								predatory financing.
                          </p>
							<Button
								btnText="Services"
								btnVariant="primary-button study-banner-button mt-[70px] sm:mt-8"
							/>
						</div>
						<div className="sm:col-span-full col-span-4 project-methodes-right-cont text-left sm:text-right">
							<Image
								src="/images/schedule-call-image.svg"
								alt="schedule call icon image"
								width={278}
								height={278}
								className="schedule-call-modal-icon-img w-[250px] sm:w-[105px] sm:ml-auto block"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectMethode
