interface ContactBannerProps {}

const ContactBanner: React.FC<ContactBannerProps> = () => {
  return (
    <>
    <div className="banner-section-contact-page">
      <div className="custom-container">
        <div className="contact-page-banner-wrapper bg-light-gray py-16 px-[100px] flex items-end justify-start min-h-[640px] h-full max-h-[640px] sm:py-4 sm:px-[15px] sm:min-h-[183px] sm:max-h-[183px]">
          <div className="banner-content-text-box">
          <h1 className="contact-page-banner-title text-left text-accent-color font-semibold font-primary leading-none text-fiveth-heading-4 sm:text-text-medium-2">Ready to get started?</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default ContactBanner;