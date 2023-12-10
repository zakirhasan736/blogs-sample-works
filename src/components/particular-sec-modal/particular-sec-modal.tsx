import {Image} from "@packages/packages"
const ParticularSecModal = () => {
  return (
    <section className="particular-modal-section pb-[31px] relative">
        <div className="scrolling-text-box absolute bottom-0 left-0">
            <div className="scrolling-text text-center text-primary-heading-4 font-primary font-bold leading-normal tracking-[5.28px] uppercase">Anything in Particular?</div>
            <div className="scrolling-text text-center text-primary-heading-4 font-primary font-bold leading-normal tracking-[5.28px] uppercase">Anything in Particular?</div>
            <div className="scrolling-text text-center text-primary-heading-4 font-primary font-bold leading-normal tracking-[5.28px] uppercase">Anything in Particular?</div>
        </div>
        <div className="custom-container">
          <div className="particular-modal-main-wrapper flex items-center justify-between">
            <div className="particular-modal-left-cont">
              <h2 className="particular-modal-title max-w-[691px] text-secondary-heading-2 text-left text-primary font-primary font-medium leading-none tracking-[3.76px]">Anything in <span className="color-text text-secondary text-[123px] tracking-[4.92px] font-bold">Particular?</span></h2>
            </div>
            <div className="particular-modal-right-cont">
              <Image src="/images/gif/Section03.gif" width={600} height={500} alt="particular modal image" className="particular-modal-image" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default ParticularSecModal
