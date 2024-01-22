import React from "react";
interface ContactBannerProps {}

const ContactBanner: React.FC<ContactBannerProps> = () => {
	return (
		<>
			<div className="banner-section-contact-page">
				<div className="custom-container">
					<div className="contact-page-banner-wrapper max-w-[1430px] mx-auto bg-black py-16 pb-[100px] px-[100px] flex items-end justify-start  h-[100vh] max-h-[950px] sm:py-4 sm:px-[15px] sm:min-h-[183px] sm:max-h-[183px]">
						<div className="banner-content-text-box">
							<h1 className="contact-page-banner-title text-left text-primary font-semibold font-primary leading-none text-[56px] sm:text-text-medium-2">
								Ready to get started?
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactBanner;
