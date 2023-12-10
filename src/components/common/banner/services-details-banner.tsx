import Button from "@/components/elements/button/button";

interface ServicesBannerProps {}

const ServicesBanner: React.FC<ServicesBannerProps> = () => {
	return (
		<>
			<section className="services-banner-section pt-[113px] pb-[100px] sm:py-9 h-[817px] sm:h-[530px] bg-[#232323]">
				<div className="custom-container h-full">
					<div className="services-content-main-wrapper relative grid grid-cols-16 gap-5 w-full h-full">
						<div className="services-content-text-box pb-12 col-span-full mt-auto">
							<h1 className="services-banner-title primary-heading-6 font-semibold font-primary tracking-[4px] text-left text-primary text-primary-heading-6 mb-10 uppercase leading-none sm:text-sixth-heading-2 sm:mb-8">
								SEO
							</h1>
							<p className="banner-description text-primary text-text-accend-1 text-left max-w-[1249px] mr-auto font-primary font-semibold leading-none mb-0 sm:text-[13px]">
								Particular SEO: a foreign language made easy. <br /> <br /> Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<Button
								btnText="Get in touch"
								btnVariant="primary-button services-banner-button mt-12 sm:mt-8"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default ServicesBanner;
