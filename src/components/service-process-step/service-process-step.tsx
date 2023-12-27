"use client";
import React from "react";
import { Image } from "@packages/packages";
interface ServicesProcessStepsType {
	ProcessStepTitle: string;
	ProcessStepNumber: string;
	ProcessStepSubTitle: string;
	ServicesStepsDescription: string;
}
interface ServicesProcessStepsProps {
	data: {
		ProcessStepSecTitle: string;
		ProcessStepFeaturedImage: string;
		ProcessStepFeaturedDesc: string;
		ProcessStepFeatureTitle: string;
		ProcessStepFeatureSubTitle: string;
		ProcessStepFeatureNumber: string;
		ServicesProcesse: ServicesProcessStepsType[];
	};
}

const ServicesProcessStepsSection: React.FC<ServicesProcessStepsProps> = ({
	data,
}) => {

	return (
		<div className="services-process-steps-section pt-[100px] sm:pt-[70px]">
			<div className="services-process-steps-wrapper">
				<Image
					src={data.ProcessStepFeaturedImage}
					alt="services process modal image"
					width={623}
					height={294}
					className="process-modal-image relative hidden w-full max-w-[450px] mx-auto sm:block  sm:h-[294px] sm:mb-[70px]"
				/>
				<div className="custom-container sm:px-4">
					<div className="service-section-title-box mb-[52px] sm:mb-[30px]  max-w-[1430px] mx-auto">
						<h2 className="service-sec-title text-[48px] md:text-[36px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							{data.ProcessStepSecTitle}
						</h2>
					</div>
				</div>
				<div className="custom-container max-w-[1430px] mx-auto  md:px-8 sm:pl-4">
					<div className="services-process-steps-wrap-box grid grid-cols-16 gap-10 sm:flex sm:flex-col">
						<div className="col-span-9 sm:col-span-full  sticky top-20 h-[722px] lg:h-[170vh] md:h-[160vh] sm:h-auto">
							<div className="services-process-left-cont">
								{/* ======== */}
								<div className="services-proces-steps-card md:pl-0">
									<h3 className="service-process-step-title text-[34px] md:text-[32px] sm:text-[32px] text-left text-primary font-primary font-semibold leading-none mb-[40px] sm:mb-[22px]">
										{data.ProcessStepFeatureTitle}{" "}
										<span className="color-text text-secondary">
											{data.ProcessStepFeatureNumber}
										</span>
									</h3>
									<h5 className="service-process-subtitle uppercase text-[20px] sm:text-[13px] text-left text-primary font-primary font-normal leading-normal mb-5">
										{data.ProcessStepFeatureSubTitle}
									</h5>
									<p className="service-process-desc max-w-[600px] w-full text-[20px] sm:text-[13px] text-left text-primary font-primary font-normal leading-normal">
										{data.ProcessStepFeaturedDesc}
									</p>
								</div>
								{/* ====== */}
								<Image
									src={data.ProcessStepFeaturedImage}
									alt="services process modal image"
									width={916}
									height={432}
									className="process-modal-image relative sm:hidden mt-[35px]"
								/>
							</div>
						</div>
						<div className="col-span-7 sm:col-span-full h-[1209px] sm:h-auto">
							<div className="services-process-right-cont">
								{/* ======== */}
								{data.ServicesProcesse?.map((ServicesProcess, index) => (
									<div
										className="services-proces-steps-card mb-[50px] sm:mb-[30px]"
										key={index}>
										<h3 className="service-process-step-title text-[34px]  md:text-[32px] sm:text-[32px] text-left text-primary font-primary font-semibold leading-none mb-[40px] sm:mb-[22px]">
											{ServicesProcess.ProcessStepTitle}{" "}
											<span className="color-text text-secondary">
												{ServicesProcess.ProcessStepNumber}
											</span>
										</h3>
										<h5 className="service-process-subtitle uppercase text-[20px] sm:text-[13px] text-left text-primary font-primary font-normal leading-normal mb-5">
											{ServicesProcess.ProcessStepSubTitle}
										</h5>
										<p className="service-process-desc max-w-[600px] w-full text-[20px] sm:text-[13px] text-left text-primary font-primary font-normal leading-normal">
											{ServicesProcess.ServicesStepsDescription &&
												ServicesProcess.ServicesStepsDescription.split(
													"\n",
												).map((line, index) => (
													<React.Fragment key={index}>
														{line}
														<br />
													</React.Fragment>
												))}
										</p>
									</div>
								))}
								{/* ====== */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesProcessStepsSection;
