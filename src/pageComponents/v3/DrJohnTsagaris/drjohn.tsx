"use client";
import Link from "next/link";
import React from "react";
import Banner from "./banner/banner";
import Image from "next/image";

const DrJohnTsagiris = () => {
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
                Dr John Tsagiris, Solopreneur
              </span>
            </div>
            <div>
              Key Areas of Focus:{" "}
              <span className="text-[#181725]">
                <Link href="" className="underline">
                  Website User Experience Design
                </Link>
                ,{" "}
                <Link href="" className="underline">
                  Logo Redesign
                </Link>
                , SEO Strategy
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Dr. John Tsagiris, a pioneer in holistic beauty and founder of the
            Acuskinlift Method, sought to rejuvenate the online presence of his
            brand, Dr. John Tsagiris. With a mission to optimise the ageless
            wellness journey of his clientele, Dr. Tsagiris pictured a digital
            platform that reflected his transformative natural skin tightening
            and lifting techniques.
          </p>
        </div>
      </section>
      <section className="pt-[57px] pb-[51px]">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/images/google.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="pt-[42px] pb-[108px] bg-white">
        <div className="custom-container">
          <div className="flex gap-6 mb-[86px] justify-center">
            <Image
              src="/images/jproblem1.png"
              alt="Image 1"
              width={371}
              height={400}
              className="sm:w-full"
            />
            <Image
              src="/images/jprob2.png"
              alt="Image 2"
              width={371}
              height={400}
              className="sm:w-full"
            />
            <Image
              src="/images/jprob3.png"
              alt="Image 3"
              width={371}
              height={400}
              className="sm:w-full"
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>
              The Founder's Challenges: A Lack of Online Presence and Brand
              Cohesion
            </h3>
            <p className="mt-[26px] mdp">
              Despite Dr. Tsagiris's renowned expertise, the brand faced
              challenges in establishing a cohesive online presence and
              effectively communicating its brand identity. The absence of a
              robust digital platform hindered engagement with the target
              audience, limiting Dr. Tsagiris's ability to attract high-profile
              clients and boost sales.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/jproto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/jproto2.png')] h-[579px] bg-cover"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular partnered with <br /> John Tsagiris
          </h3>
          <h4 className="mt-[26px] mb-8">
            Our philosophical approach to user experience research enabled us to
            capture Dr. Tsagiris's target audience and their unique needs and
            preferences. By meticulously analysing data and insights, we sought
            to identify the behaviours, motivations, and pain points of his
            buyer persona and provide them with high quality solutions.
          </h4>
          <h4 className="mb-5">
            This understanding allowed us to tailor every aspect of the website
            design, logo design, and SEO strategy to resonate with Dr.
            Tsagiris's audience in a way that doesn't just communicate with them
            but conveys the outcomes that would be enjoyed if they were lucky
            enough to interact with the brand.
          </h4>
          <Link href="/services" className="btn">
            Partner with Particular
          </Link>
        </div>
      </section>
      <section className="bg-white pt-[89px] pb-[83px] ">
        <div className=" flex justify-center relative">
          <div className=" flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          <div className="w-[667px] h-[351px] md:w-full mt-[110px]">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/images/jdemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="h-[768px] w-full">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="/images/djohndem.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            “"The brand, John Tsagiris, embodies a mission to optimise the
            ageless wellness journey of our clientele, integrating traditional
            holistic disciplines with modern aesthetic methods. Together with
            Particular Agency, we're shaping a future where beauty is synonymous
            with health and vitality.""
          </p>
          <p className="uppercase text-black">Dr. John Tsagiris</p>
          <p className="text-[#666] mb-[30px]">Solopreneur</p>
          <Link href="/contacts" className="btn btn-dark ">
            Start a project
          </Link>
        </div>
        <div className="custom-container text-[#181725] mt-[85px]">
          <div className="flex justify-between soul">
            <h4>See more Particular projects</h4>
            <button> See all</button>
          </div>
          <div className="flex gap-6 mt-[58px]">
            <Link href="" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/blogflower.png"
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

export default DrJohnTsagiris;
