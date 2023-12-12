import {Image} from '@packages/packages';
import Button from '../elements/button/button';
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
		<div className="services-case-study-section pt-[120px] sm:pt-[60px]">
			<div className="custom-container">
				<div className="services-case-study-wrapper">
					<div className="service-section-title-box mb-20 sm:mb-[30px]">
						<h2 className="service-sec-title text-[65px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							{data.ServicesCaseStudyTitle}
						</h2>
					</div>
					<div className="services-case-study-wrapper-cont-box">
						{data.CaseStudyServices?.map((CaseStudyservice, index) => (
							<div className="services-featured-case-study-card relative mb-[50px] sm:mb-0">
								<div className="featured-case-study-text-box relative">
									<Image
										src={CaseStudyservice.image}
										alt="case study featured image"
										className="h-[304px]"
										width={1538}
										height={304}
									/>
									<h3 className="featured-case-study-title absolute left-10 bottom-7 text-[60px] text-left text-primary font-primary font-bold leading-none">
										{CaseStudyservice.title}
									</h3>
								</div>
								<div className="featured-case-study-cta-box bg-[#D9D9D9] px-10 py-8 flex items-center justify-between gap-5 sm:text-[24px]">
									<p className="case-study-desc max-w-[929px] text-[26px] text-left text-black font-primary font-medium leading-normal sm:text-[13px]">
										{CaseStudyservice.description}
									</p>
									<Button
										btnText={CaseStudyservice.btnText}
										btnVariant="primary-button services-case-study-button"
									/>
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
