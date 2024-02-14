import ServiceDetailsBanner from "@/components/common/banner/service-details-banner";
import ServicesBanner from "@/components/common/banner/services-details-banner";
import OurWorkSec from "@/components/component-v2/our-work-section/our-work-sec";
import ServiceDetailsFinalPhase from "@/components/component-v2/services-details-phase/service-details-final-phase";
import ServiceDetailsPhase from "@/components/component-v2/services-details-phase/service-details-phase";
import GoogleInsightBrandBox from "@/components/google-insigh-brand-box/google-insight-brand-box";
import ServiceAboutInfoSection from "@/components/service-about-info-section/service-about-info-section";
import ServiceProcessStep from "@/components/service-process-step/service-process-step";
import ServiceTypeOption from "@/components/service-types-option/service-type-option";
// import ServicesCaseStudy from "@/components/services-case-study/services-case-study";
import ServicesFaq from "@/components/services-faq-section/services-faq";
import TestimonialsVersionTwo from "@/components/testimonials-section/testimonials-v2";
import React from "react";
interface ServicesCategoryPageProps {
	data: {
		ServicesBannerData: any;
		ServicesPhaseDataType: any;
		ServicesFinalPhaseDataType: any;
	};
}
const ServicesCategoriesPage: React.FC<ServicesCategoryPageProps> = ({
	data,
}) => {
	if (!data) {
		return <div>No article content available</div>;
	}
	const {
		ServicesPhaseDataType,
		ServicesFinalPhaseDataType,
		ServicesBannerData,
	} = data;

	return (
		<div className="services-details-page-main-wrapper sm:overflow-hidden">
			{/* services details page banner start here */}
			<ServiceDetailsBanner data={ServicesBannerData} />
			<section className="development-process-section">
				<div className="custom-container max-w-[1030px]">
					<div className="development-process-wrapper">
						<ServiceDetailsPhase data={ServicesPhaseDataType} />
						<ServiceDetailsFinalPhase data={ServicesFinalPhaseDataType} />
					</div>
				</div>
			</section>
			<OurWorkSec
				OurWorkSecTitle=""
				WorkSecClass="pt-[70px] pb-[85px] bg-[#ffffff] light-mode-work-section"
			/>
		</div>
	);
};

export default ServicesCategoriesPage;
