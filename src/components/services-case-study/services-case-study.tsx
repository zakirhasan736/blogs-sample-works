import {Image} from '@packages/packages';
import Button from '../elements/button/button';
import React from "react";
interface ServiceCaseStudyType {
	image: string;
	title: string;
	description: string;
	btnText: string;
}

interface ServicesCaseStudyProps {
	data: {
		ServicesCaseStudyTitle: string;
		CaseStudyServices: ServiceCaseStudyType[];
	};
}

const ServicesCaseStudy: React.FC<ServicesCaseStudyProps> = ({ data }) => {

  return (
		<div className="services-case-study-section pt-[100px] sm:pt-[60px]">
			<div className="custom-container">
				<div className="services-case-study-wrapper  max-w-[1430px] mx-auto">
					<div className="service-section-title-box mb-14 sm:mb-[30px]">
						<h2 className="service-sec-title text-[48px] md:text-[36px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							{data.ServicesCaseStudyTitle}
						</h2>
					</div>
					<div className="services-case-study-wrapper-cont-box">
						{data.CaseStudyServices?.map((CaseStudyservice, index) => (
							<div
								className="services-featured-case-study-card relative mb-[50px] sm:mb-6"
								key={index}>
								<div className="featured-case-study-text-box relative">
									<Image
										src={CaseStudyservice.image}
										alt="case study featured image"
										className="case-study-image h-[450px] md:h-[350px] object-cover"
										width={1538}
										height={304}
									/>

									<div className="featured-case-study-cta-box w-full h-full  top-0 left-0 absolute bg-transparent px-10 py-8 sm:px-6 sm:flex-col sm:justify-end sm:items-start sm:pb-5 flex items-end justify-between gap-5 sm:text-[24px]">
										<div className="text-cont-box">
											<h3 className="featured-case-study-title text-[42px] md:text-[38px] sm:text-[27px] sm:mb-4 text-left text-primary font-primary font-bold leading-none">
												{CaseStudyservice.title}
											</h3>
											<p className="case-study-desc max-w-[929px] text-[26px] text-left text-primary font-primary font-normal leading-normal sm:text-[13px]">
												{CaseStudyservice.description}
											</p>
										</div>
										<Button
											btnText={CaseStudyservice.btnText}
											btnVariant="primary-button services-case-study-button sm:max-w-[120px] sm:h-[38px] sm:py-3"
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesCaseStudy
