"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";

const BlogsSec = () => {
  return (
    <section className="blogs pt-[105px] sm:pt-20 pb-[86px] sm:pb-[60px]">
      <div className="custom-container">
        <div className="grid-container">
          <div>
            <h2>News & Blog</h2>
          </div>
          <Link href="">
            <div className="bg-no-repea h-[262px]">
              <div className="overlay"></div>
              <video
                autoPlay
                muted
                loop
                className="absolute inset-0 z-0 w-full h-full object-cover"
              >
                <source src="/images/blog.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="content">
                <h5>cx</h5>
                <p>
                  Harness the power of customer experience to grow your business
                </p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="bg-no-repea bg-[url('/images/blog1.png')] h-[262px]">
              <div className="content">
                <h5>productivity</h5>
                <p>why is apple’s marketing so effective?</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid-container">
          <Link href="">
            <div className="bg-no-repea bg-[url('/images/blog2.png')] mt-[14px] h-[540px] sm:h-[262px]">
              <div className="content">
                <h5>social media</h5>
                <p>why is apple’s marketing so effective?</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col">
            <div className="grids my-[14px]">
              <Link href="">
                <div className="bg-no-repea bg-[url('/images/blog3.png')] h-[262px]">
                  <div className="content">
                    <h5>marketing</h5>
                    <p>
                      Harness the power of customer experience to grow your
                      business
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="bg-no-repea bg-[url('/images/blog4.png')] h-[262px]">
                  <div className="content">
                    <h5>marketing</h5>
                    <p>
                      Harness the power of customer experience to grow your
                      business
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <Link href="">
              <div className="bg-no-repea bg-[url('/images/blo.png')] h-[262px]">
                <div className="overlay"></div>
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute inset-0 z-0 w-full h-full object-cover"
                >
                  <source src="/images/blog6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <h5>design</h5>
                  <p>
                    Harness the power of customer experience to grow your
                    business
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <Link href="">
            <div className="bg-no-repea mt-[14px] h-[540px] sm:h-[262px]">
              <div className="overlay"></div>
              <video
                autoPlay
                muted
                loop
                className="absolute inset-0 z-0 w-full h-full object-cover"
              >
                <source src="/images/blog5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="content">
                <h5>business</h5>
                <p>
                  Harness the power of customer experience to grow your business
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSec;
