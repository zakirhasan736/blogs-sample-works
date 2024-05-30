import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServicesSecProps {}

const ServicesSec: React.FC<ServicesSecProps> = () => {
  return (
    <section className="services bg-[#1A1A1A] text-[#FFFFFF] pt-[71px] pb-[33px]">
      <div className="custom-container">
        <div className="flex sm:!flex-row justify-between items-start  gap-10">
          <div>
            <h3 className="sm:!text-text-small">SERVICES</h3>
            <div className="sm:my-8 mt-[83px] award-item-box flex sm:!flex-row items-center sm:items-start gap-4 justify-center ">
              <div className="award-items">
                <Image
                  src="/images/clutch1.png"
                  alt="awards cirtificate modal image"
                  width={80}
                  height={86.48}
                  className="object-cover"
                />
              </div>
              <div className="award-items">
                <Image
                  src="/images/clutch2.png"
                  alt="awards cirtificate modal image"
                  width={80}
                  height={86.48}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:!flex-row gap-12 sm:gap-4">
            <div className="flex flex-col gap-4">
              <p>Web & App Development</p>
              <p>UI/UX Design</p>
              <p>PPC (Pay-per-click)</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>SEO</p>
              <p>Brand Identity</p>
              <p>Motion Graphics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
