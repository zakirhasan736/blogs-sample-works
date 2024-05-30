"use client";
import Link from "next/link";
import React from "react";
import Banner from "./banner/banner";
import Image from "next/image";

const CindyCare = () => {
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
              <span className="text-[#181725]">Founder</span>
            </div>
            <div>
              Key Areas of Focus:{" "}
              <span className="text-[#181725]">
                <span className="underline">
                  Website Design & User Experience,
                </span>{" "}
                Brand Identity and Buyer Persona Research
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Cindy Care, an upcoming home care agency, aims to transform the
            landscape of live-in care services for high-class clientele in
            Bedfordshire, Buckinghamshire, Northamptonshire, and beyond. Founded
            with a commitment to providing premium yet affordable care, Cindy
            Care aims to exceed expectations and redefine the standards of
            elderly care, by offering personalised services tailored to each
            client's needs.
          </p>
        </div>
      </section>
      <section>
        <video
          src="/images/cindy.mp4"
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
              src="/images/cindyprobimg1.png"
              alt="Image 1"
              width={371}
              height={400}
            />
            <Image
              src="/images/cindyprobimg2.png"
              alt="Image 2"
              width={371}
              height={400}
            />
            <Image
              src="/images/cindyprobimg3.png"
              alt="Image 3"
              width={371}
              height={400}
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>
              Founder's Challenges: Standing Out In A Competitive Industry
            </h3>
            <p className="mt-[26px] mb-8 mdp">
              The Founder of Cindy Care, Cindy, identified several key
              challenges in the industry. Firstly, the market was saturated with
              companies offering basic services, lacking the premium touch
              desired by high-class clients.
            </p>
            <p className="mdp">
              High-class clientele, accustomed to personalised experiences,
              demanded more than standard care, requiring Cindy Care to build a
              unique value proposition. Secondly, there was a lack of credible
              online presence and brand identity, making it difficult to stand
              out in a crowded marketplace.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/cindyproto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/cindyproto2.png')] h-[579px] bg-cover"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular Partnered with <br /> CindyCare
          </h3>
          <h4 className="mt-[26px] mb-8">
            Particular Agency collaborated closely with Cindy Care to address
            these challenges and bring their vision to life. Our approach began
            with in-depth buyer persona research, delving into the preferences,
            lifestyles, and expectations of high-class clientele in the targeted
            regions.
          </h4>
          <h4 className="mb-5">
            This research formed the foundation of our design process, ensuring
            that every element of Cindy Care's brand identity and website
            resonated with their target audience.
          </h4>
          <Link href="/services">
            <button className="btn">Partner with Particular</button>
          </Link>
        </div>
      </section>
      <section className="bg-white pt-[89px]">
        <div className="flex justify-center relative mb-[67px] mt-10">
          <Image
            src="/images/cindylogo.png"
            alt="CindyCare Logo"
            width={433}
            height={121}
            className="text-center object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="/images/cindy.png"
            alt="CindyCare Logo"
            width={393}
            height={351}
            className="mt-24"
          />
        </div>
        <div className="bg-[url('/images/cindydemo.gif')] h-[768px] w-full bg-cover"></div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex justify-center">
          <Image
            src="/images/cindy2 1.png"
            alt="CindyCare pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/cindy3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/cindy4 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
        </div>
        <div className="text-center text-[#181725] mt-[92px] w-[748px] m-auto sm:w-full">
          <p className="lgp mb-8">
            "At Cindy Care, we are determined to redefine the standards of
            live-in care services by providing high-class clientele with
            personalised and premium care experiences. In collaboration with
            Particular Agency, we are confident in our ability to establish a
            prominent online presence and deliver exceptional service to our
            clients."
          </p>
          <p className="uppercase text-black my-3">Cindy</p>
          <p className="text-[#666] mb-[30px]">Founder</p>
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
            <Link href="/metisse" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/portfolio/modal-image-3.png"
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
                <h4>Metisse</h4>
                <p>Timeless pieces for every watch lover</p>
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

export default CindyCare;
