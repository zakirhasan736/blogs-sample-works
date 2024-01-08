import ServicesBanner from "@/components/common/banner/services-details-banner";
import GoogleInsightBrandBox from "@/components/google-insigh-brand-box/google-insight-brand-box";
import ServiceAboutInfoSection from "@/components/service-about-info-section/service-about-info-section";
import ServiceProcessStep from "@/components/service-process-step/service-process-step";
import ServiceTypeOption from "@/components/service-types-option/service-type-option";
// import ServicesCaseStudy from "@/components/services-case-study/services-case-study";
import ServicesFaq from "@/components/services-faq-section/services-faq";
import React from "react";
interface ServicesCategoryPageProps {
	data: {
		ServicesBannerData: any;
		ServiceAboutInfoData: any;
		FaqPageAccodionData: any;
		ServicesFaqSecTitle: any;
		ServicesTypoSecData: any;
		ServicescaseStudyFeaturedData: any;
		ServicesProcessData: any;
	};
}
const ServicesCategoriesPage: React.FC<ServicesCategoryPageProps> = ({
	data,
}) => {
		if (!data) {
			return <div>No article content available</div>;
		}
	const {
		ServicesBannerData,
		ServiceAboutInfoData,
		FaqPageAccodionData,
		ServicesTypoSecData,
		ServicescaseStudyFeaturedData,
		ServicesProcessData,
	} = data;

	return (
		<div className="services-details-page-main-wrapper sm:overflow-hidden">
			{/* services details page banner start here */}
			<ServicesBanner data={ServicesBannerData} />
			{/* services about info section */}
			<ServiceAboutInfoSection data={ServiceAboutInfoData} />
			{/* service types option section */}
			<ServiceTypeOption data={ServicesTypoSecData} />
			{/* service insight google brand section */}
			<GoogleInsightBrandBox />
			{/* service case study section */}
			{/* <ServicesCaseStudy data={ServicescaseStudyFeaturedData} /> */}
			{/* service our process section */}
			<ServiceProcessStep data={ServicesProcessData} />
			{/* service our faq section */}
			<ServicesFaq
				servicesFaqSecTitle="FAQ(Frequently Asked Questions)"
				FaqPageAccodionData={FaqPageAccodionData}
			/>
		</div>
	);
};

export default ServicesCategoriesPage;
