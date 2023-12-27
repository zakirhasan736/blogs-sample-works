import FaqAccordion from "@/components/common/faq-accordion/faq-accordion";
import React from "react";
interface ServicesFaqProps {
	FaqPageAccodionData: any;
	servicesFaqSecTitle: string;
}

const ServicesFaq: React.FC<ServicesFaqProps> = ({
	FaqPageAccodionData, 
	servicesFaqSecTitle,
}) => {
	return (
		<div className="services-faq-section">
			<div className="custom-container">
				<div className="services-faq-section-wraper px-20 pt-[100px] pb-[100px] md:px-0 max-w-[1430px] mx-auto">
					<div className="service-section-title-box mb-[60px] md:mb-[45px]  sm:mb-[30px] text-center">
						<h2 className="service-sec-title text-[65px] md:text-[34px] text-center text-primary font-bold font-primary leading-[1.1] capitalize sm:text-[34px] sm:tracking-[1.02px]">
							{servicesFaqSecTitle}
						</h2>
					</div>
					<div className="services-faq-wrapper-box">
						<FaqAccordion faqs={FaqPageAccodionData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesFaq;
