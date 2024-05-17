"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";
import ClientSlider from "@/components/common/cliend-slider/clientSlider";

const PartnersSec = () => {
  return (
    <section className="partners bg-[#1a1a1a] text-[#fff] pt-[33px] pb-[75px]">
      <div className="custom-container">
        <div className="sm:block flex justify-between mb-[73px]">
          <h2 className="sm:mb-8">
            Trusted by 50+ <br /> companies globally
          </h2>
          <Link href="/contacts" className="btn">
            Start a Project
          </Link>
        </div>
        <ClientSlider />
      </div>
    </section>
  );
};

export default PartnersSec;
