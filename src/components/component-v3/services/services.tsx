import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServicesSecProps {}

const ServicesSec: React.FC<ServicesSecProps> = () => {
  return (
    <section className="services bg-[#1A1A1A] text-[#FFFFFF] pt-[71px] pb-[33px]">
      <div className="custom-container">
        <div className="flex justify-between">
          <div>
            <h3>SERVICES</h3>
            <div className="sm:my-8 mt-[83px] award-item-box flex items-center sm:items-start gap-4 justify-center ">
              <div className="award-items">
                <Image
                  src="/images/top_clutch-award-1.svg"
                  alt="awards cirtificate modal image"
                  width={80}
                  height={86.48}
                />
              </div>
              <div className="award-items">
                <Image
                  src="/images/top_clutch-award-2.svg"
                  alt="awards cirtificate modal image"
                  width={80}
                  height={86.48}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-12 sm:gap-4">
            <div className="flex flex-col gap-4">
              <Link href="" className="underline font-normal">Web & App Development</Link>
              <Link href="">UI/UX Design</Link>
              <Link href="">Content Strategy</Link>
              <Link href="">PPC (Pay-per-click)</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="">SEO</Link>
              <Link href="">Brand Identity</Link>
              <Link href="">Motion Graphics</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
