import FaqPageAccodionData from "@/data/services-accordion.json";
import FaqAccordion from "@/components/common/faq-accordion/faq-accordion";

const ServicesFaq = () => {
	return (
		<div className="services-faq-section">
			<div className="custom-container">
				<div className="services-faq-section-wraper px-20 pt-[51px] pb-[100px] md:px-0">
					<div className="service-section-title-box mb-[60px]  sm:mb-[30px] text-center">
						<h2 className="service-sec-title text-[65px] text-center text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							FAQS
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
