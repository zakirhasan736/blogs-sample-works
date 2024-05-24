"use client";
import React from "react";
import Image from "next/image";

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="soulfull-banner bg-[url('/images/seo.png')] bg-cover relative h-screen">
      <div className="custom-container">
        {/* Content */}
        <div className="absolute bottom-[48px] text-white">
          <p className="uppercase text-[12px]">Branding</p>
          <h4 className="my-4">Brand Design Company London</h4>
          <p className="text-[14px]">Your trusted team for unique and creative brand logo design</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
