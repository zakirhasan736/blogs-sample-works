"use client";
import Link from "next/link";
import React from "react";
import Banner from "./banner/banner";
import Image from "next/image";

const KnightsAcademy = () => {
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
                  Player and Coach Portals,
                </span>{" "}
                Data Analytics and Metrics Tracking
              </span>
            </div>
            <div>
              Tech Stack:{" "}
              <span className="text-[#181725]">
                Next JS, Mango DB, AWS Cloud Computing
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Rushmoor Knights Academy is dedicated to elevating youth American
            football in the UK, bringing well-deserved attention to the industry
            and fostering increased facilitation. Their mission is to elevate
            the sport's standards by transitioning youth programs and
            facilitating skill development. To achieve this, they aimed to build
            an established online presence and revamp the market through
            innovative digital solutions.
          </p>
        </div>
      </section>
      <section>
        <video
          src="/images/rushmoor.mp4"
          className="w-full h-full object-cover"
          autoPlay={true}
          muted={true}
          playsInline={true}
          controls={false}
          loop={true}
        ></video>
      </section>
      <section className="pt-[42px] pb-[108px] bg-white">
        <div className="custom-container">
          <div className="flex gap-6 mb-[86px] justify-center">
            <Image
              src="/images/rprobimg3.png"
              alt="Image 1"
              width={371}
              height={400}
            />
            <Image
              src="/images/rprobimg1.png"
              alt="Image 2"
              width={371}
              height={400}
            />
            <Image
              src="/images/rprobimg2.png"
              alt="Image 3"
              width={371}
              height={400}
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>
              Founder's Challenges: Executing on an unprecedented solution
            </h3>
            <p className="mt-[26px] mb-8 mdp">
              Establishing a prominent online presence and bringing innovation
              to the market while ensuring user-friendliness and fitness for
              purpose posed a challenge.
            </p>
            <p className="mdp">
              With complex features like player portals and ranking systems,
              building something capable of delivering such solutions within the
              desired timeframe was a daunting task. Overcoming these challenges
              required a strategic approach to hit the nail on the head
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/rproto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/rproto2.png')] h-[579px] bg-cover"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular Partnered with <br /> Rushmoor Knights Academy
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
        <div className="flex justify-center relative">
          <Image
            src="/images/kacademy.png"
            alt="Soulfull Health Logo"
            width={433}
            height={121}
            className="text-center object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="w-[667px] md:w-full mt-[110px]">
            <video
              src="/images/rdemo.mp4"
              autoPlay={true}
              muted={true}
              playsInline={true}
              controls={false}
              loop={true}
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
        <div className="bg-[url('/images/rdemo.gif')] h-[768px] w-full bg-cover"></div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex justify-center">
          <Image
            src="/images/r2 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/r3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/r4 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
        </div>
        <div className="text-center text-[#181725] mt-[92px] w-[748px] m-auto sm:w-full">
          <p className="lgp mb-8">
            "Our mission is to elevate the standards of youth football in the UK
            by providing players and coaches with innovative tools and
            resources. Through our partnership with Particular Agency, we are
            changing the way the sport operates, empowering individuals to reach
            their full potential and driving excellence across the board."
          </p>
          <p className="uppercase text-black">STephen diaper</p>
          <p className="text-[#666] mb-[30px]">Founder</p>
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

export default KnightsAcademy;
