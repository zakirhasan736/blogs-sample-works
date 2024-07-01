"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PortfolioV3 = () => {
  return (
    <section className="portfolio-v3">
      <div className="custom-container">
        <div className="title mb-[42px] sm:mb-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="mdp"
          >
            We work with a variety of businesses across the globe all striving
            for <br />
            the best human experience for their users.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="projects text-white"
        >
          <div className="w-full flex gap-6">
            <Link href="/metisse" className=" w-2/4 sm:w-full">
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

            <Link href="/drjohntsagaris" className=" w-2/4 sm:w-full">
              <div className="project p-6 bg-no-repea bg-[url('/images/drjohn.png')] h-[262px] sm:w-full">
                <div>
                  <span className="pill">SEO</span>
                  <span className="pill">Logo Design</span>
                </div>
                <div className="content">
                  <h4>Dr John Tsagaris</h4>
                  <p>A leading practitioner in health and wellness</p>
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
                    <span className="pill">Web Design</span>
                  </div>
                  <div className="content">
                    <h4>SoulFull Health</h4>
                    <p>A User Experience Design and Brand Identity project</p>
                  </div>
                </div>
              </Link>
              <Link href="/knightsacademy">
                <div className="project p-6 relative h-[262px] sm:w-full">
                  {/* Video Background */}
                  <video
                    src="/images/project4.mp4"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    controls={false}
                    loop={true}
                    className="absolute inset-0 w-full h-full object-cover"
                  ></video>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Pill tags */}
                    <div className=" mb-2">
                      <span className="pill">Web App Development</span>
                    </div>

                    {/* Content */}
                    <div className="content">
                      <h4>Rushmore Knights Academy</h4>
                      <p>
                        Leading the Rising Wave of American Football in the UK
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%] sm:w-auto">
              <Link href="/burn-hard">
                <div className="project p-6 relative h-[540px] sm:w-full">
                  {/* Video Background */}
                  <video
                    src="/images/project5.mp4"
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    controls={false}
                    loop={true}
                    className="absolute inset-0 w-full h-full object-cover"
                  ></video>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <span className="pill">Brand Identity</span>
                      <span className="pill">Photography</span>
                      <span className="pill">Videography</span>
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
        </motion.div>
      </div>
      <div>
        <div className="custom-container mt-[94px] sm:mt-[56px]">
          <div className="flex justify-between sm:flex-col">
            <div className="title sm:mb-[53px]">
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
              <div className="flex sm:!flex-row gap-12 sm:gap-4">
                <div className="flex flex-col gap-4">
                  <Link href="/services">Web & App Development</Link>
                  <Link href="/services">UI/UX Design</Link>
                  <Link href="/services">Content Strategy</Link>
                  <Link href="/services">PPC (Pay-per-click)</Link>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/services">SEO</Link>
                  <Link href="/services">Brand Identity</Link>
                  <Link href="/services">Motion Graphics</Link>
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
