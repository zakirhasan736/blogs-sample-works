"use client";
import Link from "next/link";
import React from "react";
import Banner from "./banner/banner";
import Image from "next/image";

const BurnHard = () => {
  return (
    <>
      <Banner />
      <section className="pt-16 pb-20 bg-white">
        <div className="custom-container flex justify-between gap-[123px] sm:gap-8 ">
          <div className="mdp text-[#4D4D4D] w-1/2">
            <div>
              Business Stage: <span className="text-[#181725]">Pre-launch</span>
            </div>
            <div className="my-[19px]">
              Who in the team we worked with:{" "}
              <span className="text-[#181725]">Founders</span>
            </div>
            <div>
              Key Areas of Focus:{" "}
              <span className="text-[#181725]">
                <span className="underline">
                  Web Design & Development,
                </span>{" "}
              </span>
              <span className="text-[#181725]">
                <span className="underline">
                  Branding and Verbal Identity,
                </span>{" "}
              </span>
              <span className="text-[#181725]">
                <span className="underline">
                  Social Media Strategy,
                </span>{" "}
              </span>
              <span className="text-[#181725]">
                <span className="underline">
                  Visual Assets and PPC
                </span>{" "}
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Metisse, a ambitious watch brand led by Noura, aimed to disrupt the
            watch industry with innovative designs targeting women aged 16-35 in
            the UK.
          </p>
        </div>
      </section>
      <section>
        <video
          src="/images/metisse.mp4"
          autoPlay={true}
          muted={true}
          playsInline={true}
          controls={false}
          loop={true}
          className="w-full h-full object-cover"
        ></video>
      </section>
      <section className="pt-[42px] pb-[108px] bg-white">
        <div className="custom-container">
          <div className="flex gap-6 mb-[86px] justify-center">
            <Image
              src="/images/metisseprobimg1.png"
              alt="Image 1"
              width={371}
              height={400}
            />
            <Image
              src="/images/metisseprobimg2.png"
              alt="Image 2"
              width={371}
              height={400}
            />
            <Image
              src="/images/metisseprobimg3.png"
              alt="Image 3"
              width={371}
              height={400}
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>Founder's Challenges: Setting Up In a New Industry</h3>
            <p className="mdp">
              Noura, entering the watch industry as a newcomer, faced daunting
              challenges. From navigating complex manufacturing processes to
              distinguishing Metisse in a competitive landscape, she encountered
              hurdles at every turn. Additionally, as a first-time entrepreneur,
              she struggled with brand development, marketing, and e-commerce
              operations, seeking expert guidance to overcome these obstacles.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/metisseproto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/metisseproto2.png')] h-[579px] bg-cover"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular Partnered with <br /> Metisse
          </h3>
          <h4 className="mt-[26px] mb-8">
            Embracing Noura's vision, Particular Agency went on a journey to
            redefine Metisse's brand narrative. Our collaboration began with a
            comprehensive buyer persona research strategy, revealing insights
            into the preferences and aspirations of the target demographic.
          </h4>
          <h4 className="mb-5">
            Leveraging our findings, we then crafted a distinct brand identity
            and positioning strategy centred around Metisse's unique hexagonal
            dial design.
          </h4>
          <Link href="/services" className="btn">
            Partner with Particular
          </Link>
        </div>
      </section>
      <section className="bg-white pt-[89px]">
        <div className="flex justify-center relative mb-[67px] mt-10">
          <Image
            src="/images/metisselogo.png"
            alt="BurnHard Logo"
            width={433}
            height={121}
            className="text-center object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="w-[667px] md:w-full mt-[110px]">
            <video
              src="/images/metissedemo.mp4"
              autoPlay={true}
              muted={true}
              playsInline={true}
              controls={false}
              loop={true}
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
        <div className="bg-[url('/images/metissedemo.gif')] h-[768px] w-full bg-cover"></div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex justify-center">
          <Image
            src="/images/metisse2 1.png"
            alt="BurnHard pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/metisse3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/metisse4 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
        </div>
        <div className="text-center text-[#181725] mt-[92px] w-[748px] m-auto sm:w-full">
          <p className="lgp mb-8">
            "Our mission is to redefine watch design by blending innovation with
            elegance, empowering women to make a statement with their
            timepieces. Partnering with Particular has been instrumental in
            bringing our vision to life, and I am confident that together, we
            will achieve unparalleled success in the watch industry."
          </p>
          <p className="uppercase text-black">Noura</p>
          <p className="text-[#666] mb-[30px]">Founder</p>
           <Link href="/contacts" className="btn btn-dark ">
            Start a project
          </Link>
        </div>
        <div className="custom-container text-[#181725] mt-[85px]">
          <div className="flex justify-between soul">
            <h4>See more Particular projects</h4>
            <Link href="/portfolio">
              <button> See all</button>
            </Link>
          </div>
          <div className="flex gap-6 mt-[58px]">
            <Link href="/burn-hard" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/portfolio/burn-hard.png"
                  alt="Soulfull Health Project"
                  width={433}
                  height={121}
                  className="w-full h-[262px] object-cover"
                />
                <div className="mt-8 mb-[19px] portd">
                  <span className="pill">Brand Identity</span>
                  <span className="pill">Photography</span>
                  <span className="pill">Web Design</span>
                </div>
                <h4>Burn-Hard</h4>
                <p>Making Waves In The Fitness Industry</p>
              </article>
            </Link>
            <Link href="/drjohntsagaris" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/portfolio/drjohn-thumb.png"
                  alt="Soulfull Health Project"
                  width={433}
                  height={121}
                  className="w-full h-[262px] object-cover"
                />
                <div className="mt-8 mb-[19px] portd">
                  <span className="pill">Web Design</span>
                  <span className="pill">Logo Re-design</span>
                  <span className="pill">SEO</span>
                </div>
                <h4>Dr John Tsagaris</h4>
                <p>A leading practitioner in health and wellness</p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BurnHard;
