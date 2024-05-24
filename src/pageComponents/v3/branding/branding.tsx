"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Banner from "@/components/common/banner/branding-banner";

const BrandingPage = () => {
  return (
    <>
      <Banner />
      <section className="pt-10 pb-[70px] bg-white text-[#181725]">
        <div className="custom-container ">
          <p className="text-[14px] leading-5">
            Building a unique brand identity is essential to set your brand
            apart from the competitors. It allows you to showcase
            your company’s values and vision in the best possible way and
            resonate with your target audience. It creates brand awareness,
            drives sales, and enhances business growth. Having a creative and
            strategic branding plan in place will help in boosting the ROI as
            well. If you are searching for a brand design company London with an
            impressive portfolio, look no further. 
          </p>
          <h3 className="text-[22px] font-bold leading-8 text-black mt-10 mb-4">
            Particular Agency For Brand Design London 
          </h3>
          <p className="text-[14px] leading-5">
            At Particular Agency, we understand the power of creating branding
            in accelerating business growth. Our brand design experts London are
            here to assist you from concept to execution in building a unique
            brand identity for your business. From website development to social
            media marketing, we offer a range of services aimed at
            improving your brand presence in the digital landscape. When you
            need a reliable brand design agency London providing full-fledged
            digital marketing services, we make your ideal choice. 
          </p>
          <Image
            src="/images/seo-design.png"
            alt="Seo design"
            width={760}
            height={173}
            className="w-full mt-[47px]"
          />
          <h3 className="text-[22px] font-bold leading-8 text-black mt-10 mb-4">
            Our Approach To Brand Logo Design London 
          </h3>
          <p className="text-[14px] leading-5">
            As an established brand design company London, our goal is to drive
            measurable results for our clients through our committed brand
            strategy. We approach every project with a genuine passion for
            novelty and create designs that align with your business goals. 
            <br />
            <br />
            When you approach us for brand design, our initial step is to gain
            robust insights regarding your domain of business. Our team carries
            years of experience and a huge array of skills which help us craft
            effective strategies that put your brand on the success path.
            We come up with bespoke ideas and a strategic roadmap to build an
            impactful brand experience that resonates with your target group. 
          </p>
          <h3 className="text-[22px] font-bold leading-8 text-black mt-10 mb-4">
            Why Choose Us As Your Branding And Design Agency London? 
          </h3>
          <p className="text-[14px] leading-5">
            There are solid reasons why we are renowned as brand design experts
            London. At our core, we believe in the power of visual
            storytelling and it reflects on the brand designs we create. We
            understand every brand is unique and needs tailored solutions for
            branding. 
            <br />
            <br />
            From the initial brainstorming to the final delivery of the project,
            our brand design experts follow a collaborative approach. We work as
            an extended team of your company and contribute to the success of
            your business.  Being one of the top-rated brand design agency
            London, we have worked with global clients and diverse
            industries over the years. We have a proven track record of bringing
            impressive design solutions across multiple industries. We
            understand what it takes to cut through the noise and create a brand
            that attracts the attention of the audience. Given our team's design
            expertise and innovative approach, we are far ahead of our
            competitors to take on complex design challenges.  
          </p>
        </div>
      </section>
      <section className="bg-[#181725] text-center pt-[36px] pb-[56px]">
        <div className="custom-container">
          <h3 className="text-[22px] font-bold leading-8 text-white mb-[23px]">
            Book A Free Consultation Today!  
          </h3>
          <p className="text-[14px] leading-5 w-[760px] mx-auto sm:w-full italic">
            Whether you are launching a startup or want to rebrand your existing
            business, we provide steadfast services. Feel free to{" "}
            <Link href="/contacts" className="underline"> get in touch</Link>{" "}
            with our team today for further information. 
            <br />
            <br />
            Start your creative branding with Particular Agency today! 
          </p>
        </div>
      </section>
    </>
  );
};

export default BrandingPage;
