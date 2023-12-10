import Button from "@/components/elements/button/button"
import {Image} from "@packages/packages"


const ArticlesSection = () => {
  return (
    <section className="article-section pt-[120px] pb-[120px]"> 
        <div className="custom-container">
           <div className="article-sec-wrapper">
               <div className="article-section-title-box mb-[85px]">
                <h2 className="section-title font-primary font-bold leading-none text-left text-gray-light-2 text-fiveth-heading-4">Articles</h2>
                <p className="section-desc mt-[19px] max-w-[752px] font-primary font-semibold text-left text-gray-light-2 text-text-medium-4">Read now or Bookmark for later. Have a read of our latest articles to learn what’s happening at Particular and in the world of marketing.</p>
               </div>
               <div className="article-cards-content-wrapper grid gap-9 grid-cols-12 mx-auto max-w-[1356px] f-full">
                    {/* ========= */}
                    <div className="article-card-items col-span-4">
                        <div className="article-card-head h-[459px] w-full p-7 relative z-10 flex items-end justify-start">
                          <Image src="/images/article-card-img.png" alt="article images" width={409} height={460} className="article-image h-full w-full absolute top-0 left-0 z-[-2]" />
                          <h3 className="article-card-title text-gray-light-2 text-left text-threeth-heading-2 font-primary font-bold leading-none">Article 1</h3>
                        </div>
                        <div className="article-card-text-cont pt-[27px] pb-[21px] px-[13px] bg-gray-light">
                          <p className="article-desc text-neu-black font-primary font-medium text-left text-body-text-2 leading-none">Engineering high-speed sites for every popular CMS, including WiGoDaddy.</p>
                          <Button btnText="Discover More" btnVariant="primary-button max-w-[179px] text-[24px] shadow-box-shadow-primary whitespace-nowrap mt-[29px]" />
                        </div>
                    </div>
                    {/* =========== */}
                    {/* ========= */}
                      <div className="article-card-items col-span-4">
                        <div className="article-card-head h-[459px] w-full p-7 relative z-10 flex items-end justify-start">
                          <Image src="/images/article-card-img.png" alt="article images" width={409} height={460} className="article-image h-full w-full absolute top-0 left-0 z-[-2]" />
                          <h3 className="article-card-title text-gray-light-2 text-left text-threeth-heading-2 font-primary font-bold leading-none">Article 2</h3>
                        </div>
                        <div className="article-card-text-cont pt-[27px] pb-[21px] px-[13px] bg-gray-light">
                          <p className="article-desc text-neu-black font-primary font-medium text-left text-body-text-2 leading-none">Engineering high-speed sites for every popular CMS, including WiGoDaddy.</p>
                          <Button btnText="Discover More" btnVariant="primary-button max-w-[179px] text-[24px] shadow-box-shadow-primary whitespace-nowrap mt-[29px]" />
                        </div>
                    </div>
                    {/* =========== */}
                    {/* ========= */}
                    <div className="article-card-items col-span-4">
                        <div className="article-card-head h-[459px] w-full p-7 relative z-10 flex items-end justify-start">
                          <Image src="/images/article-card-img.png" alt="article images" width={409} height={460} className="article-image h-full w-full absolute top-0 left-0 z-[-2]" />
                          <h3 className="article-card-title text-gray-light-2 text-left text-threeth-heading-2 font-primary font-bold leading-none">Article 3</h3>
                        </div>
                        <div className="article-card-text-cont pt-[27px] pb-[21px] px-[13px] bg-gray-light">
                          <p className="article-desc text-neu-black font-primary font-medium text-left text-body-text-2 leading-none">Engineering high-speed sites for every popular CMS, including WiGoDaddy.</p>
                          <Button btnText="Discover More" btnVariant="primary-button max-w-[179px] text-[24px] shadow-box-shadow-primary whitespace-nowrap mt-[29px]" />
                        </div>
                    </div>
                    {/* =========== */}
                    
               </div>
           </div>
        </div>
      </section>
  )
}

export default ArticlesSection
