"use client";
import Link from "next/link";
import React from "react";

const PortfolioV3 = () => {
  return (
    <section className="portfolio-v3">
      <div className="custom-container">
        <div className="title mb-[42px]">
          <h2>Portfolio</h2>
          <p>
            We work with a variety of businesses across the globe all striving
            for <br />
            the best human experience for their users.
          </p>
        </div>
        <div className="projects text-white">
          <div className="w-full flex gap-6">
            <Link href="/drjohntsagaris" className=" w-2/4 sm:w-full">
              <div className="project p-6 bg-no-repea bg-[url('/images/project1.png')] h-[262px] sm:w-full">
                <div>
                  <span className="pill">Brand Identity</span>
                  <span className="pill">Photography</span>
                  <span className="pill">Web Design</span>
                </div>
                <div className="content">
                  <h4>Metisse</h4>
                  <p>Timeless pieces for extraordinary moments</p>
                </div>
              </div>
            </Link>

            <Link href="/knightsacademy" className=" w-2/4 sm:w-full">
              <div className="project p-6 bg-no-repea bg-[url('/images/project2.png')] h-[262px] sm:w-full">
                <div>
                  <span className="pill">Photography</span>
                  <span className="pill">Web Design</span>
                </div>
                <div className="content">
                  <h4>Stories of our Generation</h4>
                  <p>Finding the pieces that make up life.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="w-[70%] sm:w-full">
              <Link href="/soulfullhealth">
                <div className="project p-6 bg-no-repea bg-[url('/images/project3.png')] h-[262px] w-full mb-4">
                  <div>
                    <span className="pill">Brand Identity</span>
                    <span className="pill">Photography</span>
                    <span className="pill">Web Design</span>
                  </div>
                  <div className="content">
                    <h4>SoulFull Health</h4>
                    <p>A User Experience Design and Brand Identity project</p>
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="project p-6 relative h-[262px] sm:w-full">
                  {/* Video Background */}
                  <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    {/* Provide multiple video sources for broader browser compatibility */}
                    <source src="/images/project4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Pill tags */}
                    <div className=" mb-2">
                      <span className="pill">Brand Identity</span>
                      <span className="pill">Photography</span>
                      <span className="pill">Web Design</span>
                    </div>

                    {/* Content */}
                    <div className="content">
                      <h4>Metisse</h4>
                      <p>Timeless pieces for extraordinary moments</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%]">
              <Link href="">
                <div className="project p-6 relative h-[540px] sm:w-full">
                  {/* Video Background */}
                  <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    {/* Provide multiple video sources for broader browser compatibility */}
                    <source src="/images/project5.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <span className="pill">Brand Identity</span>
                      <span className="pill">Photography</span>
                      <span className="pill">Web Design</span>
                    </div>
                    <div className="content">
                      <h4>Burn Hard</h4>
                      <p>Timeless pieces for extraordinary moments</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="custom-container mt-[94px]">
          <div className="flex justify-between">
            <div className="title sm:mb-5">
              <h3>
                Partner with <br /> Particular
              </h3>
              <p className="mb-[32px] mt-[22px]">
                Specialist in designing bespoke digital strategies for <br />{" "}
                brands across all sectors and companies across the globe.
              </p>
              <Link href="contacts">
                <button className="btn btn-dark">Contact</button>
              </Link>
            </div>
            <div>
              <h6 className="mb-4">SERVICES</h6>
              <div className="flex gap-12 sm:gap-4">
                <div className="flex flex-col gap-4">
                  <Link href="">Web & App Development</Link>
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
        </div>
      </div>
    </section>
  );
};

export default PortfolioV3;
