"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";


const BlogsSec = () => {

	return (
    <section className="blogs">
      <div className="custom-container">
        <div className="grid-container">
          <div>
            <h2>News & Blog</h2>
          </div>
          <div className="bg-no-repea bg-[url('/images/blog.png')] h-[262px]">
            <div className="content">
              <h5>cx</h5>
              <p>
                Harness the power of customer experience to grow your business
              </p>
            </div>
          </div>
          <div className="bg-no-repea bg-[url('/images/blog1.png')] h-[262px]">
            <div className="content">
              <h5>productivity</h5>
              <p>why is apple’s marketing so effective?</p>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="bg-no-repea bg-[url('/images/blog2.png')] mt-[14px] h-[540px]">
            <div className="content">
              <h5>social media</h5>
              <p>why is apple’s marketing so effective?</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grids my-[14px]">
              <div className="bg-no-repea bg-[url('/images/blog3.png')] h-[262px]">
                <div className="content">
                  <h5>marketing</h5>
                  <p>
                    Harness the power of customer experience to grow your
                    business
                  </p>
                </div>
              </div>
              <div className="bg-no-repea bg-[url('/images/blog4.png')] h-[262px]">
                <div className="content">
                  <h5>marketing</h5>
                  <p>
                    Harness the power of customer experience to grow your
                    business
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-no-repea bg-[url('/images/blog6.png')] h-[262px]">
              <div className="content">
                <h5>design</h5>
                <p>
                  Harness the power of customer experience to grow your business
                </p>
              </div>
            </div>
          </div>
          <div className="bg-no-repea bg-[url('/images/blog5.png')] mt-[14px] h-[540px]">
            <div className="content">
              <h5>business</h5>
              <p>
                Harness the power of customer experience to grow your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSec;