"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";
import ClientSlider from "@/components/common/cliend-slider/clientSlider";


const PartnersSec = () => {

	return (
    <section className="partners bg-[#181725] text-[#fff] pt-[33px] pb-[75px]">
      <div className="custom-container">
        <div className="flex justify-between mb-[73px]">
          <h2 className="sm:mb-4">Trusted by 50+ <br /> companies globally</h2>
          <Link href="">
            <button className="btn">Start a Project</button>
          </Link>
        </div>
        <ClientSlider />
      </div>
    </section>
  );
};

export default PartnersSec;
