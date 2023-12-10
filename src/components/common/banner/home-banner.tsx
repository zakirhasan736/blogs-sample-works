import Button from "@/components/elements/button/button";
import { ArrowDownModalIcons } from "@/icons"

interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <>
          <section className="home-banner-section pt-[113px] pb-[100px]">
            <div className="custom-container">
                <div className="banner-content-main-wrapper relative grid grid-cols-16 gap-5 w-full">
                <div className="banner-content-text-box pb-12 col-span-full">
                    <h1 className="banner-title font-primary font-medium relative z-50 text-primary-heading flex flex-col text-left text-primary leading-[80.55%] uppercase tracking-[-11.38px] sm:text-[53px] sm:font-normal sm:leading-none sm:tracking-[-.38px]">
                        <span className="color-text relative left-[71px] sm:left-[5px]">PARTICULAR</span>
                        <span className="block relative left-[300px] sm:left-[43px]">marketing</span>
                        <span className="block relative left-[181px] sm:left-[11px]">Agency</span>
                    </h1>
                    <div className="banner-text-bottom-cont relative left-[175px] sm:left-[11px] z-50">
                    <h3 className="banner-subtitle sm:hidden mt-[202px] text-[36px] text-left text-primary font-normal font-primary leading-none">welcome to <span className="color-text">particular</span></h3>
                   <Button btnText="Our Services" btnVariant="primary-button banner-button sm:hidden mt-12" />
                    </div>
                    <div className="banner-modal-video-box absolute bottom-0 right-[70px] z-20">
                        <img src="/images/banner-video-poster.jpg" width={801} height={714} alt="banner modal video image" className="banner-video-modal-poster-img w-full h-full" />
                    </div>
                </div>
                <div className="page-identity-text sm:hidden text-primary text-[12px] text-right font-primary font-normal leading-none tracking-[-.02px] uppercase absolute bottom-[75px] right-[-26px] rotate-90">hOME PAGE</div>
                <button className="page-scroll-expand-btn sm:hidden text-primary text-[12px] text-right font-primary font-normal leading-none tracking-[-.02px] uppercase absolute bottom-[-63px] right-[470px]">click to explore</button>
                <button className="click-to-explore-btn sm:hidden absolute bottom-[-110px] left-0 right-0 mx-auto block max-w-[79px]">
                    <ArrowDownModalIcons />
                </button>
                </div>
            </div>
      </section>
    </>
  )
}
export default HomeBanner;