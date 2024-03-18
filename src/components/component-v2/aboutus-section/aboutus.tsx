import Button from '@/components/elements/button/button';
import GlowButton from '@/components/elements/button/glow-button';
import Image from 'next/image';
import React from 'react'

const AboutUsSection = () => {
  return (
    <section className="aboutus-section-v2 pb-[89px]  md:pb-[60px]">
      <div className="custom-container max-w-[1220px]">
        <div className="section-left-cont">
          <div className="section-title-box">
            <div className="comon-title mb-10 max-w-[670px] m-auto text-center">
              <h2>
                Improving Buyer experience will gain you the results you want.
              </h2>
              {/* <span></span> */}
            </div>
            {/* <div className="about-section-desc max-w-[537px]">
							<p className="section1">
								In today’s digital world, there’s often a disconnect between
								what businesses expect and what customers experience online.
								This gap in the middle can lead to mistrust and missed
								opportunities. Mistrust creates lost customers, so the impacts
								are both personal and professional.
							</p>
							<p className="section2 mt-5">
								At Particular Agency, we understand that even a 5% increase in
								customer retention can lead to a 29-95% in profitability. We
								have a unique approach towards producing High-Quality and then
								strategically marketing it, backed by our Particular philosophy
								of combining Free-thought, Attention to Detail, and Pioneering.
							</p>
						</div> */}
            <div className="flex md:flex-col gap-10 w-50">
              <Image
                width={450}
                height={376}
                className='res-img max-w-full'
                src="/images/about.jpg"
                alt="A man typing"
              />
              <div className='w-50'>
                <p>
                  Businesses often face a disconnect between their expectations
                  and customers' online experiences, resulting in mistrust and
                  missed opportunities.{" "}
                </p>
                <br />
                <p className='mb-[60px]'>
                  At Particular Agency, we recognise the significance of
                  customer retention, with even a 5% increase translating to a
                  29-95% rise in profitability. Our unique approach emphasises
                  high-quality production and strategic marketing, guided by our
                  philosophy of Free-thought, Attention to Detail, and
                  Pioneering.
                </p>
                <GlowButton
                  glowBtnText="start a project"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mid-services-section">
          <div className="section.1-left-cont">
            <div className="section-1-title-box">
              {/* <h3 className="section-1-info-title text-[22px] sm:text-[20px] text-neu-white text-left font-tertery font-normal leading-none">
                The Proof Is In The Pudding{" "}
              </h3> */}
              <h3 className="uppercase section-1-info-title text-[14px] text-neu-white font-tertery font-normal leading-none text-center">
                Industry stats{" "}
              </h3>
              <div className="mid-services-wrapper flex justify-center gap-x-[58px] gap-y-1 md:gap-x-[30px]">
                <div className="mid-services text-center w-[385px] md:w-full">
                  <h4 className="text-[56px] lg:text-[40px] md:text-[36px]  text-neu-white font-tertery font-normal leading-[1.1]">
                    140%
                  </h4>
                  <p className="text-[15px] text-neu-white font-tertery font-normal leading-normal">
                    increase in spend following positive interactions compared
                    to negative ones
                  </p>
                </div>
                <div className="mid-services text-center w-[385px] md:w-full">
                  <h4 className="text-[56px] lg:text-[40px] whitespace-nowrap md:text-[36px] text-neu-white font-tertery font-normal leading-[1.1]">
                    61%
                  </h4>
                  <p className="text-[15px] text-neu-white font-tertery font-normal leading-normal">
                    of customers say that they would leave for a competitor
                    after just one bad experience
                  </p>
                </div>
                {/* <div className="mid-services ml-auto">
                  <div className="mid-services-inner-info sm:mb-7">
                    <h4 className="text-[40px] text-left text-neu-white font-normal font-tertery leading-[1.1] sm:text-[27px]">
                      50+
                    </h4>
                    <p className="text-[15px] text-left text-neu-white font-tertery font-normal leading-normal">
                      Startups & SMEs we’ve worked with
                    </p>
                  </div>
                  <div className="mid-services-inner-info">
                    <h4 className="text-[40px] text-left text-neu-white font-normal font-tertery leading-[1.1] sm:text-[27px]">
                      47%
                    </h4>
                    <p className="text-[15px] text-left text-neu-white font-tertery font-normal leading-normal">
                      of Particular customers return for a second service within
                      the first 3 months
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection
