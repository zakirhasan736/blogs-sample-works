import {Image} from "@packages/packages"

const GuidedSection = () => {
  return (
    <section className="guided-section pb-[120px]"> 
    <div className="custom-container">
      <div className="guided-sec-main-wrapper grid grid-cols-16 gap-5 px-[37px]">
          <div className="guided-modal-image-one col-span-6"><Image src="/images/giuded-sec-image-1.png" alt="duided modal image" width={447} height={416} className="modal-image-one" /></div>  
          <div className="guided-modal-text-item col-span-12 pb-[91px] pt-[123px] relative col-start-5">
                 <div className="guided-content-text-box">
                     <h2 className="guided-sec-title text-shadow-1 max-w-[623px] w-full text-threeth-heading-4 text-left font-primary font-medium leading-[1.1] text-primary">Guided by purpose, defined by <span className="color-text">philosophy.</span></h2>
                 </div>
                 <div className="guided-modal-image-two absolute bottom-0 left-[233px] z-[-1]"><Image width={795} height={652} src="/images/giuded-sec-image-2.png" alt="modal image two" className="modal-image-two" /></div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default GuidedSection
