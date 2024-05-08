import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ExperienceSecProps {}

const ExperienceSec: React.FC<ExperienceSecProps> = () => {
  return (
    <section className="experience bg-[#fff] text-[#181725]">
      <div className="experiance-sec-wrapper  max-w-[1920px] w-full mx-auto grid grid-cols-12 sm:grid-cols-6 gap-0">
        <div className="experiance-modal-box w-full max-w-full overflow-hidden max-h-[716px] h-full col-span-5 sm:col-span-6">
          <video autoPlay muted loop className="z-0 w-full h-full object-cover">
            <source width={650} src="/images/experiance.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="expariance-cont-wrapper w-full col-span-7 h-full sm:col-span-6 flex flex-col">
          <div className="w-full experiance-wrap-top-cont py-[54px] pl-[173px] laptop-m:pl-[100px] lg:pl-[80px] md:pl-[35px] sm:pl-[25px] pr-[140px] lg:pr-[25px] md:pr-[20px] sm:pr-[16px]">
            <div className="flex justify-between items-center mb-[26px]">
              <h2 className="max-w-[528px] w-full font-primary text-mono-100 font-light">
                great buyer experience? excellent returns.
              </h2>
              <div className="navigation  items-center gap-2 hidden">
                <div className="nav-prev">
                  <Image
                    src="/images/left-icon.png"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="nav-next">
                  <Image
                    src="/images/right-icon.png"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            <p className="max-w-[568px] text-[18px] leading-[180%] font-normal font-accent text-mono-90 !opacity-100">
              Businesses often face a disconnect between their expectations and{" "}
              customers' online experiences, resulting in mistrust and missed{" "}
              opportunities.
              <br />
              <br />
              We understand that even a 5% increase in customer retention
              translates to a 29-95% rise in profitability.
            </p>
            <Link href="/contacts">
              <button className="bg-[#181725] text-white px-4 py-2 mt-[33px] rounded-[4px]">
                Contact us
              </button>
            </Link>
          </div>
          <div className="mt-auto w-full experiance-wrap-bottom-cont border-t border-t-Mono-70">
            <div className="insight-card-items grid grid-cols-12 sm:grid-cols-6 gap-0">
              <div className="insight-card-item col-span-6 sm:col-span-6 text-center border-r border-r-Mono-70  pt-10 pb-[55px]">
                <h2 className="title font-normal leading-none mb-[14px] text-mono-100 !font-primary">
                  61%
                </h2>
                <p className="max-w-[263px] mx-auto text-[16px] font-accent font-normal text-mono-100">
                  would leave for a competitor after just one bad experience{" "}
                </p>
              </div>
              <div className="insight-card-item sm:border-t sm:border-t-Mono-70 col-span-6 sm:col-span-6 text-center pt-10 pb-[55px]">
                <h2 className="title font-normal leading-none mb-[14px] text-mono-100 !font-primary">
                  140%
                </h2>
                <p className="max-w-[263px] mx-auto text-[16px] font-accent font-normal text-mono-100">
                  increase in spend following positive interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
