import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface ExperienceSecProps {}

const ExperienceSec: React.FC<ExperienceSecProps> = () => {
  return (
    <section className="experience bg-[#fff] text-[#181725]">
      <div className="experiance-sec-wrapper max-w-[1920px] w-full mx-auto grid grid-cols-12 sm:grid-cols-6 gap-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0},
          }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          className="experiance-modal-box w-full max-w-full overflow-hidden max-h-[716px] sm:max-h-[275px] h-full col-span-5 sm:col-span-6"
        >
          <video
            preload="auto"
            src="/images/experiance.mp4"
            width={650}
            autoPlay
            playsInline
            muted
            loop
            className="z-0 w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0},
          }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          className="expariance-cont-wrapper w-full col-span-7 h-full sm:col-span-6 flex flex-col"
        >
          <div className="w-full experiance-wrap-top-cont py-[54px] sm:py-4 pl-[173px] laptop-m:pl-[100px] lg:pl-[80px] md:pl-[35px] sm:pl-[25px] pr-[140px] lg:pr-[25px] md:pr-[20px] sm:pr-[16px] sm:mb-10">
            <div className="flex justify-between items-center mb-[26px] sm:mb-3">
              <h3 className="max-w-[528px] w-full font-primary text-mono-100">
                Great buyer experience? Excellent returns.
              </h3>
              <div className="navigation items-center gap-2 hidden">
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

            <p className="max-w-[568px] mdp font-normal font-accent text-mono-90 !opacity-100">
              Businesses often face a disconnect between their expectations and
              customers' online experiences, resulting in mistrust and missed
              opportunities.
              <br className="sm:!block" />
              <br className="sm:!block" />
              We understand that even a 5% increase in customer retention
              translates to a 29-95% rise in profitability.
            </p>
            <Link href="/contacts">
              <button className="btn btn-dark mt-[33px]">Contact us</button>
            </Link>
          </div>
          <div className="mt-auto w-full experiance-wrap-bottom-cont border-t border-t-Mono-70">
            <div className="insight-card-items grid grid-cols-12 gap-0">
              <div className="insight-card-item col-span-6 sm:col-span-6 text-center border-r border-r-Mono-70 pt-10 pb-[55px]">
                <h2 className="title font-normal leading-none mb-[14px] text-mono-100 !font-primary">
                  61%
                </h2>
                <p className="max-w-[263px] mx-auto text-[16px] font-accent font-normal text-mono-100">
                  would leave for a competitor after just one bad experience
                </p>
              </div>
              <div className="insight-card-item sm:border-t-Mono-70 col-span-6 sm:col-span-6 text-center pt-10 pb-[55px]">
                <h2 className="title font-normal leading-none mb-[14px] text-mono-100 !font-primary">
                  140%
                </h2>
                <p className="max-w-[263px] mx-auto text-[16px] font-accent font-normal text-mono-100">
                  increase in spending following positive interactions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSec;
