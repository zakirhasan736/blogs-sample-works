import ServicesBanner from '@/components/common/banner/services-details-banner'
import GoogleInsightBrandBox from '@/components/google-insigh-brand-box/google-insight-brand-box';
import ServiceAboutInfoSection from '@/components/service-about-info-section/service-about-info-section'
import ServiceProcessStep from '@/components/service-process-step/service-process-step';
import ServiceTypeOption from '@/components/service-types-option/service-type-option'
import ServicesCaseStudy from '@/components/services-case-study/services-case-study';
import ServicesFaq from '@/components/services-faq-section/services-faq';


const SeoPage = () => {
  return (
		<div className="services-details-page-main-wrapper">
			{/* services details page banner start here */}
			<ServicesBanner />
			{/* services about info section */}
			<ServiceAboutInfoSection />
			{/* service types option section */}
			<ServiceTypeOption />
			{/* service insight google brand section */}
			<GoogleInsightBrandBox />
			{/* service case study section */}
			<ServicesCaseStudy />
			{/* service our process section */}
			<ServiceProcessStep />
			{/* service our faq section */}
	     <ServicesFaq />
		</div>
	);
}

export default SeoPage
