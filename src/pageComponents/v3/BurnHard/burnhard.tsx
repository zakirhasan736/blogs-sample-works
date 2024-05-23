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
                <span className="underline">Client Acquisition,</span>{" "}
              </span>
              <span className="text-[#181725]">
                <span className="underline">
                  Brand Visibility and Client Engagement
                </span>{" "}
              </span>
            </div>
          </div>
          <p className="lgp text-black w-1/2">
            Burn Hard, an influential personal training brand spearheaded by its
            Founder, Bernhard, looked to elevate its online presence to attract
            affluent clientele and amplify its brand image in the fitness
            industry.
          </p>
        </div>
      </section>
      <section>
        <video
          src="/images/burnhard.mp4"
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
              src="/images/burnprobimg1.png"
              alt="Image 1"
              width={371}
              height={400}
            />
            <Image
              src="/images/burnprobimg2.png"
              alt="Image 2"
              width={371}
              height={400}
            />
            <Image
              src="/images/burnprobimg3.png"
              alt="Image 3"
              width={371}
              height={400}
            />
          </div>
          <div className="text-center text-black w-[767px] md:w-full m-auto">
            <h3>
              Founder's Challenges: A Lack of Online Presence and Brand Cohesion
            </h3>
            <p className="mt-[26px] mb-8 mdp">
              Navigating the fitness industry, Bernhard had the challenge of
              standing out in a sea of personal trainers.
            </p>
            <p className="mdp">
              With the market saturated with generic self-help programs and
              fitness DVDs, Bernhard realised the need for a stronger online
              presence to convey his approach and value proposition effectively.
              Additionally, catering to middle-to-high-income clients while
              maintaining a competitive edge posed a significant hurdle.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[77px]">
        <div className="bg-[url('/images/burnproto1.png')] h-[496px] bg-cover sm:bg-[center]"></div>
        <div className="bg-[url('/images/burnproto2.png')] h-[579px] bg-cover sm:!bg-[30%]"></div>
        <div className="text-center text-white w-[728px] md:w-full m-auto mt-[84px] md:p-5">
          <h3>
            How Particular Partnered with <br /> Burn-Hard
          </h3>
          <h4 className="mt-[26px] mb-8">
            Collaborating with Burn Hard, Particular Agency set out to create
            captivating visual content that would set Burn Hard apart in the
            fitness industry. By providing Burn Hard's brand narrative with
            elements of warmth, authenticity, and inclusivity, we aimed to
            create an emotional connection with the audience, emphasising the
            brand’s commitment to empowering individuals through fitness.
          </h4>
          <h4 className="mb-5">
            Our focus on creating cinematic video clips and photo shoots aimed
            to capture Bernhard's energy and expertise, positioning Burn Hard as
            a premier destination for upscale clientele.
          </h4>
          <Link href="/services" className="btn">
            Partner with Particular
          </Link>
        </div>
      </section>
      <section className="bg-white pt-[89px]">
        <div className="flex justify-center relative mb-[67px] mt-10">
          <Image
            src="/images/burnlogo.png"
            alt="BurnHard Logo"
            width={433}
            height={121}
            className="text-center object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="w-[667px] md:w-full mt-[110px]">
            <video
              className="w-full h-full object-cover"
              autoPlay={true}
              muted={true}
              playsInline={true}
              controls={false}
              loop={true}
            >
              <source src="/images/burndemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="bg-[url('/images/burndemo.gif')] h-[768px] w-full bg-cover"></div>
      </section>
      <section className="bg-white pt-[83px] pb-[46px]">
        <div className="flex justify-center">
          <Image
            src="/images/burn2 1.png"
            alt="BurnHard pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/burn3 1.png"
            alt="SoulfullHome page"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
          <Image
            src="/images/burn4 1.png"
            alt="Soulfull Health pages"
            width={481}
            height={685}
            className="object-contain md:w-full"
          />
        </div>
        <div className="text-center text-[#181725] mt-[92px] w-[748px] m-auto sm:w-full">
          <p className="lgp mb-8">
            "With the support of Particular Agency, we're excited to strengthen
            our brand presence and deliver great fitness experiences to our
            clients."
          </p>
          <p className="uppercase text-black">Bernhard</p>
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
            <Link href="/soulfullhealth" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/portfolio/soulful-health-thumbnail-image.png"
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
                <h4>Soulfull Health</h4>
                <p>Enlightenment for woman</p>
              </article>
            </Link>
            <Link href="/cindycare" className="w-1/2 sm:w-full">
              <article>
                <Image
                  src="/images/portfolio/cindy.png"
                  alt="Soulfull Health Project"
                  width={433}
                  height={121}
                  className="w-full h-[262px] object-cover"
                />
                <div className="mt-8 mb-[19px] portd">
                  <span className="pill">Web Design</span>
                </div>
                <h4>Cindy Care</h4>
                <p>The perfect alternative to a care home</p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BurnHard;
