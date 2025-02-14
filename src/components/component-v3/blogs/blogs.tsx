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
          <Link href="blogs/customer-experience">
            <div className="bg-no-repea h-[262px]">
              <div className="overlay"></div>
              <video
                src="/images/blog.mp4"
                autoPlay={true}
                muted={true}
                playsInline={true}
                controls={false}
                loop={true}
                className="absolute inset-0 z-0 w-full h-full object-cover"
              />
              <div className="content">
                <h5>cx</h5>
                <p>
                  What is customer experience and why your business will die
                  without valuing it
                </p>
              </div>
            </div>
          </Link>
          <Link href="blogs/how-much-does-seo-cost-in-2024">
            <div className="bg-no-repea bg-[url('/images/blog1.png')] h-[262px]">
              <div className="content">
                <h5>seo</h5>
                <p>How much does SEO cost in 2024?</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid-container">
          <Link href="blogs/the-role-of-content-marketing">
            <div className="bg-no-repea bg-[url('/images/blog2.png')] mt-[14px] h-[540px] sm:h-[262px]">
              <div className="content">
                <h5>social media</h5>
                <p>The role of content marketing</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col">
            <div className="grids my-[14px]">
              <Link href="blogs/the-power-of-integrated-marketing-communications">
                <div className="bg-no-repea bg-[url('/images/blog3.png')] h-[262px]">
                  <div className="content">
                    <h5>marketing</h5>
                    <p>The power of integrated marketing communications</p>
                  </div>
                </div>
              </Link>
              <Link href="blogs/what-do-marketing-agencies-do">
                <div className="bg-no-repea bg-[url('/images/blog4.png')] h-[262px]">
                  <div className="content">
                    <h5>marketing</h5>
                    <p>What do marketing agencies do?</p>
                  </div>
                </div>
              </Link>
            </div>
            <Link href="blogs/how-much-should-a-website-cost-in-2024">
              <div className="bg-no-repea bg-[url('/images/blo.png')] h-[262px]">
                <div className="overlay"></div>
                <video
                  src="/images/blog6.mp4"
                  autoPlay={true}
                  muted={true}
                  playsInline={true}
                  controls={false}
                  loop={true}
                  className="absolute inset-0 z-0 w-full h-full object-cover"
                />
                <div className="content">
                  <h5>design</h5>
                  <p>How much should a website cost in 2024?</p>
                </div>
              </div>
            </Link>
          </div>
          <Link href="blogs/benefit-of-analytics-on-website">
            <div className="bg-no-repea mt-[14px] h-[540px] sm:h-[262px]">
              <div className="overlay"></div>
              <video
                src="/images/blog5.mp4"
                autoPlay={true}
                muted={true}
                playsInline={true}
                controls={false}
                loop={true}
                className="absolute inset-0 z-0 w-full h-full object-cover"
              />
              <div className="content">
                <h5>Data analytics</h5>
                <p>
                  How businesses benefit from using analytics on their website
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
