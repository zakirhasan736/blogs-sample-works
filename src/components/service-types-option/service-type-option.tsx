import Image from "next/image";
import Button from "../elements/button/button";

const ServiceTypeOption = () => {
  return (
		<div className="service-type-option-section pb-[130px] sm:pb-[65px]">
			<div className="custom-container">
				<div className="services-type-option-wrapper">
					<div className="service-section-title-box mb-20 sm:mb-[30px]">
						<h2 className="service-sec-title text-[65px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							Our SEO Services
						</h2>
					</div>
					<div className="services-type-option-wrapper-cont-box grid grid-cols-16 gap-9 relative">
						<div className="col-span-9">
							<ul className="services-type-list-box">
								<li className="services-types-option-list-items mb-[45px] sm:mb-6">
									<h3 className="services-type-item-title text-[42px] text-left text-primary font-primary font-semibold leading-none mb-9 sm:mb-5 sm:text-[20px]">
										SEO Audit
									</h3>
									<p className="services-type-item-desc mb-9 sm:mb-5 text-[26px] text-left text-primary font-primary font-medium leading-normal sm:text-[13px] max-w-[824px] w-full">
										Start by learning where you are and why. Our audit looks at
										your overall search engine performance. We assess the
										contributing elements and provide a guide to improving your
										efforts. Ongoing and one-off.
									</p>
								</li>
								<li className="services-types-option-list-items mb-[45px] sm:mb-6">
									<h3 className="services-type-item-title text-[42px] text-left text-primary font-primary font-semibold leading-none mb-9 sm:mb-5 sm:text-[20px]">
										Copywriting
									</h3>
									<p className="services-type-item-desc mb-9 sm:mb-5 text-[26px] text-left text-primary font-primary font-medium leading-normal sm:text-[13px] max-w-[824px] w-full">
										The right messaging helps create the right ideas. Then
										satisfy the right audience. Having more qualified potential
										customers works by inspiring the right people to get in
										touch with your brand. For the right reasons.
									</p>
								</li>
								<li className="services-types-option-list-items">
									<h3 className="services-type-item-title text-[42px] text-left text-primary font-primary font-semibold leading-none mb-9 sm:mb-5 sm:text-[20px]">
										Local SEO
									</h3>
									<p className="services-type-item-desc mb-9 sm:mb-5 text-[26px] text-left text-primary font-primary font-medium leading-normal sm:text-[13px] max-w-[824px] sm:max-w-[206px] w-full">
										Get better rankings and search results in your local area.
										Finding customers near you through your local reputation
										makes business that much easier. Build a position locally
										that you can leverage.
									</p>
								</li>
							</ul>
							<Button
								btnText="Get in touch"
								btnVariant="primary-button services-type-options-button mt-[70px] sm:hidden sm:mt-16"
							/>
						</div>
						<div className="col-span-7">
							<div className="services-type-sec-modal relative sm:absolute sm:right-0 sm:bottom-0 mt-4 sm:w-[168px] sm:h-[186px]">
                              <Image
                                  className="w-full h-full"
									src="/images/gif/Section01-1.gif"
									alt="services types modal image gif"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceTypeOption
