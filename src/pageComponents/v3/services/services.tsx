import React from "react";

import ServiceDetailsItem from "./servicedetailsItem";
import Link from "next/link";
const ServicesPage = () => {
  return (
    <div className="services-page-main-wrapper pt-[153px] sm:pt-[120px] bg-white">
      <div className="services-sec-title-box custom-container mb-[56px] sm:mb-[35px]">
        <h1 className="title text-mono-100 mb-[24px] sm:mb-4">Services</h1>
        <p className="desc-text text-mono-100">
          Explore our array of services designed to strengthen your brand's
          online presence and drive your success.
        </p>
      </div>
      <div className="custom-container">
        <ServiceDetailsItem />
      </div>
      <section className="cta-section bg-[#CBD7E3] pt-[82px] pb-[71px] md:py-[60px] sm:py-[45px]">
        <div className="custom-container">
          <div className="cta-wrapper">
            <h2 className="text-mono-100 mb-[23px] text-center md:text-[32px]">
              Partner with Particular
            </h2>
            <p className="cta-desc max-w-[620px] mx-auto w-full mb-8 sm:mb-4 text-[18px] sm:text-[14px] text-center text-mono-100 leading-[180%] font-accent font-normal">
              Specialist in designing bespoke digital strategies for brands
              across all sectors and companies across the globe.
            </p>
            <Link
              href="/contacts"
              className="px-4 py-2 h-[48px] max-w-[111px] flex justify-center items-center mx-auto bg-mono-100 rounded-[4px]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
