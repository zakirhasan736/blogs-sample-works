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
                <Link href="" className="underline">
                  Player and Coach Portals,
                </Link>
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
      <section className="custom-container pt-[47px]">
        <div className="flex gap-[18px] justify-center ">
          <Image
            src="/images/homesh1.png"
            alt="Soulfull Health Homepage One"
            width={484}
            height={750}
            className="sm:w-full"
          />
          <Image
            className="mt-[43px] sm:w-full"
            src="/images/homesh2.png"
            alt="Soulfull Health Homepage Two"
            width={484}
            height={750}
          />
        </div>
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
        <div className="bg-[url('/images/proto1.png')] h-[496px] bg-cover sm:bg-center"></div>
        <div className="bg-[url('/images/proto2.png')] h-[579px] bg-cover"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular Partnered with <br /> Rushmoor Knights Academy
          </h3>
          <h4 className="mt-[26px] mb-8">
            Partnering with Particular Agency, Soulfull has begun its mission to
            revolutionise the wellness journey for their community.
          </h4>
          <h4>
            By prioritising user experience on the back of a research-driven
            approach, we developed a unique and ambitious website that matches
            its value proposition centred on convenience, affordability, and
            effectiveness for its audience of women worldwide.
          </h4>
        </div>
      </section>
      <section className="bg-white pt-[89px] pb-[83px] text-center flex justify-center relative">
        <div>
          <Image
            src="/images/kacademy.png"
            alt="Soulfull Health Logo"
            width={433}
            height={121}
            className="text-center object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="w-[667px] h-[351px] md:w-full mt-[110px]">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/images/demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="pt-[110px] pb-[72px]">
        <div className="flex gap-14 justify-center md:p-5">
          <Image
            src="/images/ethosm.png"
            alt="Soulfull Health pages"
            width={247}
            height={586}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/home.png"
            alt="SoulfullHome page"
            width={247}
            height={586}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/sgm.png"
            alt="Soulfull Health pages"
            width={247}
            height={586}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/product.png"
            alt="Soulfull Products page"
            width={247}
            height={586}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/login.png"
            alt="Soulfull Login page"
            width={247}
            height={586}
            className="object-contain md:w-full"
          />
        </div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex justify-center">
          <Image
            src="/images/2 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/4 1.png"
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
          <p className="text-[#666]">Founder</p>
          <button className="btn btn-dark mt-[30px]">Start a project</button>
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