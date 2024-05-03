"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section
      className="soulfull-banner bg-[url('/images/soulfull-banner.png')] bg-cover relative"
      style={{ height: "80vh" }}
    >
      <div className="custom-container">
        {/* Content */}
        <div className="absolute bottom-[48px] text-white">
          <h1>SoulFull Health</h1>
          <h4>A User Experience Design and Brand Identity project</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
