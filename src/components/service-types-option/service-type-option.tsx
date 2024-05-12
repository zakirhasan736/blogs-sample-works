import Image from "next/image";
import Button from "@elements/button/button";
import React from "react";
import Link from "next/link";
interface ServiceType {
  title: string;
  description: string;
}

interface ServiceTypeOptionProps {
  data: {
    ServicesTypeSecTitle: string;
    ServicesTypeSecBtnText: string;
    ServicesTypeSecModalGIF: string;
    ServicesTypeSecModalvideo?: string;
    services: ServiceType[];
  };
}

const ServiceTypeOption: React.FC<ServiceTypeOptionProps> = ({ data }) => {
  return (
    <div className="service-type-option-section pb-[100px] sm:pb-[65px]">
      <div className="custom-container">
        <div className="services-type-option-wrapper  max-w-[1430px] mx-auto">
          <div className="service-section-title-box mb-20 sm:mb-[30px]">
            <h2 className="service-sec-title text-[48px] md:text-[36px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
              {data.ServicesTypeSecTitle}
            </h2>
          </div>
          <div className="services-type-option-wrapper-cont-box grid grid-cols-16 gap-9 relative">
            <div className="col-span-9">
              <ul className="services-type-list-box">
                {data.services?.map((service, index) => (
                  <li
                    key={index}
                    className="services-types-option-list-items mb-[70px] md:mb-[45px] sm:mb-6"
                  >
                    <h3 className="services-type-item-title text-[34px]  md:text-[26px] text-left text-primary font-primary font-semibold leading-none mb-4 sm:mb-5 sm:text-[20px]">
                      {service.title}
                    </h3>
                    <p className="services-type-item-desc mb-9 sm:mb-5 text-[26px] md:text-[20px] text-left text-primary font-primary font-normal leading-normal sm:text-[13px] max-w-[824px] w-full">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/contacts">
                <Button
                  btnText={data.ServicesTypeSecBtnText}
                  btnVariant="primary-button services-type-options-button mt-5 sm:hidden sm:mt-16"
                />
              </Link>
            </div>
            <div className="col-span-7">
              <div className="services-type-sec-modal relative sm:absolute sm:right-0 sm:bottom-0 mt-4 sm:w-[168px] sm:h-[186px]">
                <Image
                  className="w-full h-full"
                  src={data.ServicesTypeSecModalGIF}
                  alt="services types modal image gif"
                  width={600}
                  height={500}
                />
                <video
                  className="video-modal-control"
                  playsInline
                  loop
                  muted
                  autoPlay={false}
                >
                  <source
                    src={data.ServicesTypeSecModalvideo}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeOption;
