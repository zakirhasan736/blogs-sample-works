"use client";
import Link from "next/link";
import React from "react";
import Banner from "./banner/banner";
import Image from "next/image";

const SoulfullHealth = () => {
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
                <Link href="" className="underline">
                  Website User Experience Design
                </Link>
                ,{" "}
                <Link href="" className="underline">
                  Brand Identity
                </Link>
                , Enhanced Customer Engagement, Improved Market Positioning,
                Business Growth
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Soulfull Health, a rising star thoughtfully-conceived by its
            Founder, Helen, is soon to launch in the world of women's wellness
            and aims to reshape the landscape of holistic health for women
            worldwide. 
          </p>
        </div>
      </section>
      <section>
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/images/soul.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="pt-[42px] pb-[108px] bg-white">
        <div className="custom-container">
          <div className="flex gap-6 mb-[86px] justify-center">
            <Image
              src="/images/probimg1.png"
              alt="Image 1"
              width={371}
              height={400}
              className="sm:w-full"
            />
            <Image
              src="/images/probimg2.png"
              alt="Image 2"
              width={371}
              height={400}
              className="sm:w-full"
            />
            <Image
              src="/images/probimg3.png"
              alt="Image 3"
              width={371}
              height={400}
              className="sm:w-full"
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>
              The Founder’s Problems were a lack of Brand Identity and a Useful
              Website Presence
            </h3>
            <p className="mt-[26px] mb-8 mdp">
              Stemming from data-driven research and real-world problem-solving,
              Helen found it challenging to translate her objectives into the
              digital space. The market was saturated by established brands and
              an ‘overly-complicated’ stigma around women’s wellness, apparently
              weakening their value proposition.
            </p>
            <p className="mdp">
              Compounding these pain points was the lack of a robust online
              presence that positively communicated and facilitated interaction
              with the brand, limiting engagement with the target audience.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/proto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/proto2.png')] h-[579px] bg-cover"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular partnered with <br /> Soulfull Health
          </h3>
          <h4 className="mt-[26px] mb-8">
            Partnering with Particular Agency, Soulfull has begun its mission to
            revolutionise the wellness journey for their community.
          </h4>
          <h4 className="mb-5">
            By prioritising user experience on the back of a research-driven
            approach, we developed a unique and ambitious website that matches
            its value proposition centred on convenience, affordability, and
            effectiveness for its audience of women worldwide.
          </h4>
          <Link href="/services" className="btn">
            Partner with Particular
          </Link>
        </div>
      </section>
      <section className="bg-white pt-[89px]">
        <div className=" text-center flex justify-center relative">
          <Image
            src="/images/slogo.svg"
            alt="Soulfull Health Logo"
            width={433}
            height={121}
            className="text-center object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="w-[667px] h-[351px] md:w-full mt-[110px] mb-[83px]">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/images/demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="bg-[url('/images/demo.gif')] h-[768px] w-full bg-cover"></div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex w-full">
          <Image
            src="/images/2 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-cover w-1/3 md:w-full"
          />
          <Image
            src="/images/3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-cover w-1/3 md:w-full"
          />
          <Image
            src="/images/4 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-cover w-1/3 md:w-full"
          />
        </div>
        <div className="text-center text-[#181725] mt-[92px] w-[748px] m-auto sm:w-full">
          <p className="lgp">
            “At Soulfull Health, our mission is to ignite a global movement of
            wellness empowerment for women of every age, shaping a future where
            every woman takes charge of her wellness journey, supported by
            accessible resources and a global network of like-minded
            individuals."
          </p>
          <p className="uppercase text-black">Helen nguyen</p>
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
            <Link href="" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/project1.png"
                  alt="Soulfull Health Project"
                  width={433}
                  height={121}
                  className="w-full"
                />
                <div className="mt-8 mb-[19px] portd">
                  <span className="pill">Brand Identity</span>
                  <span className="pill">Photography</span>
                  <span className="pill">Web Design</span>
                </div>
                <h4>Metisse</h4>
                <p>Timeless pieces for extraordinary moments</p>
              </article>
            </Link>
            <Link href="" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/project2.png"
                  alt="Soulfull Health Project"
                  width={433}
                  height={121}
                  className="w-full"
                />
                <div className="mt-8 mb-[19px] portd">
                  <span className="pill">Web Design</span>
                </div>
                <h4>Stories of our Generations</h4>
                <p>Finding the pieces that make up life.</p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoulfullHealth;
