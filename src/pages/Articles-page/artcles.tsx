import BannerVarientTwo from '@/components/common/banner/banner-varient-2'
import SectionTitleBoxTwo from '@/components/common/sec-common-title-box/section-title-box-two'
import Image from 'next/image';
const Artcles = () => {
  const titleData = {
    title: 'Article name',
    subtitle: ['We encourage Scrutiny and questioning.', 'Then redesign and polishing. And then more questioning. And more polishing.'],
    description:
      'This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.',
      classNames: 'mb-[118px]',
    };

    const bannerData = {
      subHeading: 'Pioneering',
      title: 'Article 1',
      description: 'Lorem Ipsum. This is generated texted for reference purposes',
      isColorText: false, // Set to true for color text, false for normal text
    };
  return (
    <div className="articles-page-main-wrapper">
      {/* articles banner section  */}
      <BannerVarientTwo data={bannerData} />
      {/* articles banner section  end*/}

      {/* article main content wrapper details info */}
      <section className="articles-main-wrapper-details-info pt-[193px] pb-[400px]">
        <div className="custom-container">
          <div className="articles-details-content-main">
          <SectionTitleBoxTwo {...titleData} />
             <div className="articles-details-content-main-wrapper pl-[155px] pr-[64px] grid grid-cols-16 gap-5">
                 <div className="articles-details-cont-main-box-wrap col-span-full">
                 <Image src="/images/article-proof-1.jpg" alt='articles modal image' width={1320} height={990} className='modal-article-main-image' />
             <div className="article-details-info-card-box py-[126px] grid grid-cols-12 gap-20">
              {/* ============= */}
                 <div className="article-details-info-card-item col-span-6">
                 <h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
                 We encourage Scrutiny and questioning. 
<br /><br />
Then redesign and polishing. And then more questioning. And more polishing.
                 </h5>
        <p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
        This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
        </p>
                 </div>
                 {/* ======== */}
                  {/* ============= */}
                  <div className="article-details-info-card-item col-span-6">
                 <h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
                 We encourage Scrutiny and questioning. 
<br /><br />
Then redesign and polishing. And then more questioning. And more polishing.
                 </h5>
        <p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
        This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
        </p>
                 </div>
                 {/* ======== */}
                  {/* ============= */}
                  <div className="article-details-info-card-item col-span-6">
                 <h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
                 We encourage Scrutiny and questioning. 
<br /><br />
Then redesign and polishing. And then more questioning. And more polishing.
                 </h5>
        <p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
        This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
        </p>
                 </div>
                 {/* ======== */}
                  {/* ============= */}
                  <div className="article-details-info-card-item col-span-6">
                 <h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
                 We encourage Scrutiny and questioning. 
<br /><br />
Then redesign and polishing. And then more questioning. And more polishing.
                 </h5>
        <p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
        This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
        </p>
                 </div>
                 {/* ======== */}
                   {/* ============= */}
                   <div className="article-details-info-card-item col-span-6">
                 <h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
                 We encourage Scrutiny and questioning. 
<br /><br />
Then redesign and polishing. And then more questioning. And more polishing.
                 </h5>
        <p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
        This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
        </p>
                 </div>
                 {/* ======== */}
                  {/* ============= */}
                  <div className="article-details-info-card-item col-span-6">
                 <h5 className="section-common-subtitle text-text-accend-3 text-left text-neu-white font-primary font-semibold leading-none">
                 We encourage Scrutiny and questioning. 
<br /><br />
Then redesign and polishing. And then more questioning. And more polishing.
                 </h5>
        <p className="section-common-desc mt-[34px] text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
        This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
        </p>
                 </div>
                 {/* ======== */}
             </div>
             <Image src="/images/article-proof-2.jpg" alt='articles modal image' width={1320} height={483} className='modal-article-main-image-two' />
             <div className="articles-description-cont-box mt-[60px]">
              <p className="articles-description text-text-medium-3 text-left text-neu-white font-primary font-medium leading-normal">
              Designed to define and elevate your brand's essence. We delve deep into your unique story, values, and aspirations to create a compelling brand identity that sets you apart. Particular help craft strategic brand positioning that resonates with your target audience, ensuring your brand stands out in a crowded marketplace. Designed to define and elevate your brand's essence. We delve deep into your unique story, values, 
<br />
<br />
<br />

And aspirations to create a compelling brand identity that sets you apart. Particular help craft strategic brand positioning that resonates with your target audience, ensuring your brand stands out in a crowded marketplace.Designed to define and elevate your brand's essence. We delve deep into your unique story, values, and aspirations to create a compelling brand identity that sets you apart. Particular help craft strategic brand positioning that resonates with your target audience,
<br />
<br />
 ensuring your brand stands out in a crowded marketplace.Designed to define and elevate your brand's essence. We delve deep into your unique story, values, and aspirations to create a compelling brand identity that sets you apart. Particular help craft strategic brand positioning that resonates with your target audience, ensuring your brand stands out in a crowded marketplace.
              </p>
              <p className="articles-in-short-description mt-9 text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
              This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.
              </p>
             </div>
                 </div>
             </div>
          </div>
        </div>
      </section>
      {/* article main content wrapper details info end*/}

    </div>
  )
}

export default Artcles
