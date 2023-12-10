import {Image} from '@packages/packages';
import Button from '../elements/button/button';

const ServicesCaseStudy = () => {
  return (
		<div className="services-case-study-section pt-[120px] sm:pt-[60px]">
			<div className="custom-container">
				<div className="services-case-study-wrapper">
					<div className="service-section-title-box mb-20 sm:mb-[30px]">
						<h2 className="service-sec-title text-[65px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							SEO Case Studies
						</h2>
					</div>
					<div className="services-case-study-wrapper-cont-box">
						{/* ====== */}
						<div className="services-featured-case-study-card relative mb-[50px] sm:mb-0">
							<div className="featured-case-study-text-box relative">
								<Image
									src="/images/featured-case-study-image.png"
									alt="case study featured image"
									className="h-[304px]"
									width={1538}
									height={304}
								/>
								<h3 className="featured-case-study-title absolute left-10 bottom-7 text-[60px] text-left text-primary font-primary font-bold leading-none">
									Case Study 1{" "}
								</h3>
							</div>
							<div className="featured-case-study-cta-box bg-[#D9D9D9] px-10 py-8 flex items-center justify-between gap-5 sm:text-[24px]">
								<p className="case-study-desc max-w-[929px] text-[26px] text-left text-black font-primary font-medium leading-normal sm:text-[13px]">
									Engineering high-speed sites for every popular CMS, including
									Wix, Squarespace, Shopify, Webflow, Jimdo, Weebly, Webnode and
									GoDaddy.
								</p>
								<Button
									btnText="Discover More"
									btnVariant="primary-button services-case-study-button"
								/>
							</div>
						</div>
						{/* ======== */}
						{/* ====== */}
						<div className="services-featured-case-study-card relative mb-[50px] sm:mb-0">
							<div className="featured-case-study-text-box relative">
								<Image
									src="/images/featured-case-study-image.png"
									alt="case study featured image"
									className="h-[304px]"
									width={1538}
									height={304}
								/>
								<h3 className="featured-case-study-title absolute left-10 bottom-7 text-[60px] text-left text-primary font-primary font-bold leading-none">
									Case Study 1{" "}
								</h3>
							</div>
							<div className="featured-case-study-cta-box bg-[#D9D9D9] px-10 py-8 flex items-center justify-between gap-5 sm:text-[24px]">
								<p className="case-study-desc max-w-[929px] text-[26px] text-left text-black font-primary font-medium leading-normal sm:text-[13px]">
									Engineering high-speed sites for every popular CMS, including
									Wix, Squarespace, Shopify, Webflow, Jimdo, Weebly, Webnode and
									GoDaddy.
								</p>
								<Button
									btnText="Discover More"
									btnVariant="primary-button services-case-study-button"
								/>
							</div>
						</div>
						{/* ======== */}
						{/* ====== */}
						<div className="services-featured-case-study-card relative">
							<div className="featured-case-study-text-box relative">
								<Image
									src="/images/featured-case-study-image.png"
									alt="case study featured image"
									className="h-[304px]"
									width={1538}
									height={304}
								/>
								<h3 className="featured-case-study-title absolute left-10 bottom-7 text-[60px] text-left text-primary font-primary font-bold leading-none">
									Case Study 1{" "}
								</h3>
							</div>
							<div className="featured-case-study-cta-box bg-[#D9D9D9] px-10 py-8 flex items-center justify-between gap-5 sm:text-[24px]">
								<p className="case-study-desc max-w-[929px] text-[26px] text-left text-black font-primary font-medium leading-normal sm:text-[13px]">
									Engineering high-speed sites for every popular CMS, including
									Wix, Squarespace, Shopify, Webflow, Jimdo, Weebly, Webnode and
									GoDaddy.
								</p>
								<Button
									btnText="Discover More"
									btnVariant="primary-button services-case-study-button"
								/>
							</div>
						</div>
						{/* ======== */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesCaseStudy
