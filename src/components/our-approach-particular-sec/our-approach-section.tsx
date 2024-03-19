import React from 'react'
import {Image, Link} from '@packages/packages'
const OurApproachSection = () => {
  return (
    <section className="our-approach-section pb-[90px] pt-[70px] sm:pt-0 md:pb-20">
      <div className="custom-container max-w-[1220px]">
        <div className="comon-title mb-6">
          <h2>Our Approach</h2>
          <span></span>
        </div>
        <div className="approach grid grid-cols-12 gap-[43px] md:gap-5 sm:gap-[30px]">
          <div className="approach-tile col-span-4 sm:col-span-full sm:w-full">
            <h4 className="name text-neu-white text-[14px] text-left font-tertery font-bold uppercase leading-normal mb-[15px] pb-[11px]">
              Free-Thought
            </h4>

            <div className="approach-modal-box relative">
              <Image
                width={350}
                height={353}
                className="approach-img w-full rounded-[6px] mb-[15px]"
                src="/images/approach-free-thought.png"
                alt="approach card image"
              />
              <div className="approach-modal-cont absolute flex justify-start items-center flex-col px-[30px] py-[30px] top-0 left-0 w-full h-full">
                <Link
                  href="/our-approach/free-thought"
                  className="cts-btn right-[16px] bottom-[17px] absolute"
                >
                  <Image
                    src="/images/icons/icon-plus.svg"
                    alt="cta-btn-approach"
                    width={44}
                    height={44}
                    className="cts-btn-overimg"
                  />
                </Link>
                <p className="modal-anim-text1 w-full text-[18px] text-center font-tertery font-normal leading-normal py-[9px] px-[10px] text-[#fff] uppercase rounded-[6px] bg-[#D9D9D999]">
                  Free Thoughts
                </p>
                <p className="modal-anim-text2 text-[18px] text-center font-tertery font-normal leading-normal py-[9px] px-[10px] text-[#fff] capitalize rounded-[6px] bg-[#D9D9D999]">
                  Unravel the barriers in the mind to innovate.
                </p>
              </div>
            </div>
            <h5 className=" text-[18px] text-left font-tertery font-normal leading-normal text-black capitalize">
              Unlock your ideation.
            </h5>
            <p className="description">
              Analysing all possibilities is best for choosing your winning
              formulas.
            </p>
          </div>
          <div className="approach-tile col-span-4 sm:col-span-full sm:w-full">
            <h4 className="name  text-neu-white text-[14px] text-left font-tertery font-bold uppercase leading-normal mb-[15px] pb-[11px]">
              Attention to detail
            </h4>
            <div className="approach-modal-box relative">
              <Image
                width={350}
                height={353}
                className="approach-img w-full rounded-[6px] mb-[15px]"
                src="/images/approach-atd.png"
                alt="approach card image"
              />
              <div className="approach-modal-cont absolute flex justify-start items-center flex-col px-[30px] py-[30px] top-0 left-0 w-full h-full">
                <Link
                  href="/our-approach/attention-to-detail"
                  className="cts-btn right-[16px] bottom-[17px] absolute"
                >
                  <Image
                    src="/images/icons/icon-plus.svg"
                    alt="cta-btn-approach"
                    width={44}
                    height={44}
                    className="cts-btn-overimg"
                  />
                </Link>
                <p className="modal-anim-text1 w-full text-[18px] text-center font-tertery font-normal leading-normal py-[9px] px-[10px] text-[#fff] uppercase rounded-[6px] bg-[#D9D9D999]">
                  Attention to detail
                </p>
                <p className="modal-anim-text2 text-[18px] text-center font-tertery font-normal leading-normal py-[9px] px-[10px] text-[#fff] capitalize rounded-[6px] bg-[#D9D9D999]">
                  Lead With Detail In Quality To Deliver For A Purpose.
                </p>
              </div>
            </div>
            <h5 className=" text-[18px] text-left font-tertery font-normal leading-normal text-black capitalize">
              Refine your interactions
            </h5>
            <p className="description">
              Every Customer touch point matters, so we make yours count.
            </p>
          </div>
          <div className="approach-tile col-span-4 sm:col-span-full sm:w-full">
            <h4 className="name  text-neu-white text-[14px] text-left font-tertery font-bold uppercase leading-normal mb-[15px] pb-[11px]">
              Pioneering
            </h4>

            <div className="approach-modal-box relative">
              <Image
                width={350}
                height={353}
                className="approach-img w-full rounded-[6px] mb-[15px]"
                src="/images/approach-pioneering.png"
                alt="approach card image"
              />
              <div className="approach-modal-cont absolute flex justify-start items-center flex-col px-[30px] py-[30px] top-0 left-0 w-full h-full">
                <Link
                  href="/our-approach/pioneering"
                  className="cts-btn right-[16px] bottom-[17px] absolute"
                >
                  <Image
                    src="/images/icons/icon-plus.svg"
                    alt="cta-btn-approach"
                    width={44}
                    height={44}
                    className="cts-btn-overimg"
                  />
                </Link>
                <p className="modal-anim-text1 w-full text-[18px] text-center font-tertery font-normal leading-normal py-[9px] px-[10px] text-[#fff] uppercase rounded-[6px] bg-[#D9D9D999]">
                  Pioneering
                </p>
                <p className="modal-anim-text2 text-[18px] text-center font-tertery font-normal leading-normal py-[9px] px-[10px] text-[#fff] capitalize rounded-[6px] bg-[#D9D9D999]">
                  Take action confidently in new territories of the mind.
                </p>
              </div>
            </div>
            <h5 className=" text-[18px] text-left font-tertery font-normal leading-normal text-black capitalize">
              Take action
            </h5>
            <p className="description">
              Click to Explore How Pioneering Practice helps separate you from
              your competition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApproachSection
