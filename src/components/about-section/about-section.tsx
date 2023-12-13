import Button from "@/components/elements/button/button"
import {Image} from "@packages/packages"

const AboutSection = () => {
  return (
		<section className="about-section pb-[120px] pt-[75px] md:pb-20 sm:pt-8 sm:pb-[70px]">
			<div className="custom-container">
				<div className="about-wrapper-main grid grid-cols-16 gap-5 px-[37px] lg:px-0 sm:flex sm:flex-col sm:px-0">
					<div className="about-wrapper-left-cont col-span-10">
						<div className="about-modal-text">
							<p className="about-anim-text animate-text text-[78px] text-left text-neu-gray-black font-primary font-semibold leading-none shadow-text-shadow-primary uppercase max-w-[895px] md:text-[55px] sm:text-[30px]">
								PARTICULAR: THE LONDON{" "}
								<span className="text-secondary">DIGITAL</span> AGENCY FOR
								PEOPLE-FIRST{" "}
								<span className="text-secondary">MARKETING.</span>
							</p>
						</div>
						<Button
							btnText="Our Services"
							btnVariant="primary-button banner-button mt-[109px] sm:mt-8"
						/>
					</div>
					<div className="about-wrapper-right-cont col-span-6 sm:mt-20">
						<div className="about-our-service-modal">
							<Image
								src="/images/home-services-sec-modal-img.png"
								width={553}
								height={645}
								alt="service modal image"
								className="about-our-modal-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection
