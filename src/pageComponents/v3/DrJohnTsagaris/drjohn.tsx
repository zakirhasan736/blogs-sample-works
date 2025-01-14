"use client";
import Link from "next/link";
import React from "react";
import Banner from "./banner/banner";
import Image from "next/image";

const DrJohnTsagaris = () => {
  return (
    <>
      <Banner />
      <section className="pt-16 pb-20 bg-white">
        <div className="custom-container flex justify-between gap-[67px] sm:gap-8 ">
          <div className="mdp text-[#4D4D4D] w-1/2">
            <div>
              Business Stage: <span className="text-[#181725]">Pre-launch</span>
            </div>
            <div className="my-[19px]">
              Who in the team we worked with:{" "}
              <span className="text-[#181725]">
                Dr John Tsagaris, Solopreneur
              </span>
            </div>
            <div>
              Key Areas of Focus:{" "}
              <span className="text-[#181725]">
                <span className="underline">
                  Website User Experience Design
                </span>
                , <span className="underline">Logo Redesign</span>, SEO Strategy
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Dr. John Tsagaris, a pioneer in holistic beauty and founder of the
            Acuskinlift Method, sought to rejuvenate the online presence of his
            brand, Dr. John Tsagaris. With a mission to optimise the ageless
            wellness journey of his clientele, Dr. Tsagaris pictured a digital
            platform that reflected his transformative natural skin tightening
            and lifting techniques.
          </p>
        </div>
      </section>
      <section className="pt-[57px] pb-[51px]">
        <video
          src="/images/google.mov"
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
              src="/images/jproblem1.png"
              alt="Image 1"
              width={371}
              height={400}
            />
            <Image
              src="/images/jprob2.png"
              alt="Image 2"
              width={371}
              height={400}
            />
            <Image
              src="/images/jprob3.png"
              alt="Image 3"
              width={371}
              height={400}
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>
              The Founder's Challenges: A Lack of Online Presence and Brand
              Cohesion
            </h3>
            <p className="mt-[26px] mdp">
              Despite Dr. Tsagaris's renowned expertise, the brand faced
              challenges in establishing a cohesive online presence and
              effectively communicating its brand identity. The absence of a
              robust digital platform hindered engagement with the target
              audience, limiting Dr. Tsagaris's ability to attract high-profile
              clients and boost sales.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/jproto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/jproto2.png')] h-[579px] bg-cover sm:!bg-left"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular partnered with <br /> John Tsagaris
          </h3>
          <h4 className="mt-[26px] mb-8">
            Our philosophical approach to user experience research enabled us to
            capture Dr. Tsagaris's target audience and their unique needs and
            preferences. By meticulously analysing data and insights, we sought
            to identify the behaviours, motivations, and pain points of his
            buyer persona and provide them with high quality solutions.
          </h4>
          <h4 className="mb-5">
            This understanding allowed us to tailor every aspect of the website
            design, logo design, and SEO strategy to resonate with Dr.
            Tsagaris's audience in a way that doesn't just communicate with them
            but conveys the outcomes that would be enjoyed if they were lucky
            enough to interact with the brand.
          </h4>
          <Link href="/services">
            <button className="btn">Partner with Particular</button>
          </Link>
        </div>
      </section>
      <section className="bg-white pt-[130px] sm:pt-10 ">
        <div className=" flex justify-center relative">
          <div className=" flex sm:!flex-row john-a absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/jaward1.png"
              alt="Soulfull Health Logo"
              width={131}
              height={118}
              className="text-center object-contain"
            />
            <Image
              src="/images/johnlogo.png"
              alt="Soulfull Health Logo"
              width={433}
              height={121}
              className="text-center object-contain"
            />
            <Image
              src="/images/jaward2.png"
              alt="Soulfull Health Logo"
              width={122}
              height={124}
              className="text-center object-contain"
            />
          </div>
          <div className="w-[667px] md:w-full mt-[110px] sm:mt-6">
            <video
              src="/images/jdemo.mp4"
              className="w-full h-full object-cover"
              autoPlay={true}
              muted={true}
              playsInline={true}
              controls={false}
              loop={true}
            ></video>
          </div>
        </div>
        <div className="h-[768px] w-full">
          <video
            src="/images/djohndem.mp4"
            className="w-full h-full object-cover"
            autoPlay={true}
            muted={true}
            playsInline={true}
            controls={false}
            loop={true}
          ></video>
        </div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex justify-center">
          <Image
            src="/images/j2 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/j3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/j4 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
        </div>
        <div className="text-center text-[#181725] mt-[92px] w-[748px] m-auto sm:w-full">
          <p className="lgp">
            "The brand, John Tsagaris, embodies a mission to optimise the
            ageless wellness journey of our clientele, integrating traditional
            holistic disciplines with modern aesthetic methods. Together with
            Particular Agency, we're shaping a future where beauty is synonymous
            with health and vitality."
          </p>
          <p className="uppercase text-black my-3">Dr. John Tsagaris</p>
          <p className="text-[#666] mb-[30px]">Solopreneur</p>
          <Link href="/contacts">
            <button className="btn btn-dark">Start a project</button>
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
            <Link href="/knightsacademy" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/portfolio/rushmoore-thumb.png"
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
                <h4>Rushmoor knights academy</h4>
                <p>Leading the Rising Wave of American Football in the UK</p>
              </article>
            </Link>
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
                  <span className="pill">Web Design</span>
                </div>
                <h4>Burn-Hard</h4>
                <p>Making Waves In The Fitness Industry</p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DrJohnTsagaris;
