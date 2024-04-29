import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ExperienceSecProps {}

const ExperienceSec: React.FC<ExperienceSecProps> = () => {
  return (
    <section className="experience bg-[#fff] text-[#181725] flex">
      <Image src="/images/experience.png" alt="Arts" width={511} height={716} />
      <div>
        <div className="py-[53px] pl-[173px]">
          <div className="flex justify-between">
            <h3>
              great buyer experience? <br /> excellent returns.
            </h3>
          </div>
          <Image
            src="/images/left-icon.png"
            alt="Icon"
            width={24}
            height={24}
          />
          <Image
            src="/images/right-icon.png"
            alt="Icon"
            width={24}
            height={24}
          />
          <p className="text-[#1a1a1a]">
            Businesses often face a disconnect between their expectations and{" "}
            <br />
            customers' online experiences, resulting in mistrust and missed{" "}
            <br />
            opportunities. <br />
            <br />
            We understand that even a 5% increase in customer retention <br />
            translates to a 29-95% rise in profitability.{" "}
          </p>
          <button className="bg-[#181725] text-white px-4 py-2 mt-[33px]">
            Contact us
          </button>
        </div>
        <div className="text-center">
          <div className="flex">
            <div>
              <h2>61%</h2>
              <p>
                would leave for a competitor after <br /> just one bad
                experience{" "}
              </p>
            </div>
            <div>
              <h2>140%</h2>
              <p>
                increase in spend following <br /> positive interactions{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
