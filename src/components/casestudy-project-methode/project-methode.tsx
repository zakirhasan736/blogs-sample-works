import { Image } from "@packages/packages";
import Button from "../elements/button/button";


interface ProjectMethodProps {
	data: {
		sectionModelTitle: string;
		sectionTitle: string;
		methodDescriptions: string[];
		buttonText: string;  
		callImage: string;
	};
}

const ProjectMethode: React.FC<ProjectMethodProps> = ({ data }) => {
	return (
		<div className="case-study-project-methode-section pb-[200px] sm:pb-[70px] overflow-hidden">
			<div className="custom-container">
				<div className="case-study-project-methode-wrap">
					<div className="section-title-box">
						<div className="section-titles">
							<div className="section-model-title sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
								{data.sectionModelTitle}
							</div>
							<h2 className="section-title empty:hidden text-[44px] text-left text-neu-white font-primary font-medium uppercase tracking-[4px] sm:text-[20px]">
								{data.sectionTitle}
							</h2>
						</div>
					</div>
					<div className="case-study-project-methodes-cont-wrap grid grid-cols-16 gap-9 mt-16 sm:mt-6 sm:flex sm:flex-col sm:gap-0">
						<div className="sm:col-span-full col-span-12 project-methodes-left-cont max-w-[814px]">
							{data.methodDescriptions.map((desc, index) => (
								<p
									key={index}
									className="project-methodes-desc text-[32px] sm:text-[13px] text-left text-neu-white font-primary font-semibold leading-normal mb-6">
									{desc}
								</p>
							))}
							<Button
								btnText={data.buttonText}
								btnVariant="primary-button study-banner-button mt-[70px] sm:mt-8"
							/>
						</div>
						<div className="sm:col-span-full col-span-4 project-methodes-right-cont text-left sm:text-right">
							<Image
								src={data.callImage}
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
};

export default ProjectMethode;
