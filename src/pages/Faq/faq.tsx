import FaqBanner from "@/components/common/banner/faq-banner"
import FaqAccordion from "@/components/common/faq-accordion/faq-accordion"
import FaqPageAccodionData from "@/data/accordion-faq-data.json"

const Faq = () => {

  return (
    <div className="faq-page-main-wrapper overflow-hidden">
       {/* faq banner section       */}
      <FaqBanner />
       {/* faq banner section       end*/}
       <div className="faq-main-content-wrap-box relative">
        {/* scrolling text */}
       <div className="scrolling-text-box relative top-0 left-0">
            <div className="scrolling-text text-center text-modal-heading-4 laptop-x:text-[150px] lg:text-[120px] md:text-[94px] sm:text-[76px] whitespace-nowrap font-primary font-bold leading-[175%] tracking-[3.6px] uppercase">we are particular</div>
        </div>
        {/* scrolling text end */}
        <div className="custom-container">
        <div className="faq-accordion-card-wrapper grid grid-cols-16 gap-5 pt-[31px] pb-[190px] md:pb-[120px]">
        <div className="faq-card-items-cont-box  col-span-full flex flex-col gap-[17px]">
       {/* faq card item */}
  <FaqAccordion faqs={FaqPageAccodionData} />
      {/* faq card item */}
</div>
         </div>
        </div>


       </div>
    </div>
  )
}

export default Faq
