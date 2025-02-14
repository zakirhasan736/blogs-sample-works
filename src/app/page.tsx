"use client";
import HomeBanner from "@/components/common/banner/home-banner-3";
import BlogsSec from "@/components/component-v3/blogs/blogs";
import ContactSec from "@/components/component-v3/contact/contact";
import ExperienceSec from "@/components/component-v3/experience/experience";
import PartnersSec from "@/components/component-v3/partners/partners";
import PortfolioSec from "@/components/component-v3/portfolio/portfolio";
import ServicesSec from "@/components/component-v3/services/services";
import TestimonialSec from "@/components/component-v3/testimonials/testimonials";
import VideoSec from "@/components/component-v3/video/video";
import { animatePageIn } from "@/utils/animations";
import LatestBlogs from "@data/blogs/short-blog-data.json";
import { useEffect } from "react";

const Home = () => {
  // Sort the latest blogs by date in descending order
  const sortedLatestBlogs = LatestBlogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  useEffect(() => {
    animatePageIn();
  }, []);

  // Select the latest three blogs
  const latestThreeBlogs = sortedLatestBlogs.slice(0, 3);
  const testimonialsSliderData = [
    {
      testisliderModalImag: "/images/testimonials-slides-modal-img-1.png",
      testimonialsAutherBio: "Dr. John Tsagaris, Founder",
      testimonialsAutherName: "- Dr. John Tsagaris",
      testimonialsText:
        "My partnership with Particular Agency for our web application development has been nothing short of remarkable.",
    },
    {
      testisliderModalImag: "/images/testimonials-v2-img-4.png",
      testimonialsAutherBio: "TC Cambridge conferences,  Industry Expert",
      testimonialsAutherName: "- Dr. Sooter",
      testimonialsText:
        "We collaborated with Particular for the Design and Launch of our web Platform. The team at Particular was fantastic.",
    },
    {
      testisliderModalImag: "/images/testimonials-v2-img-3.jpg",
      testimonialsAutherBio: "Leaders Rising, Founder",
      testimonialsAutherName: "- Susie Rushden",
      testimonialsText:
        "Since our collaboration began, we've experienced consistent improvement in our marketing outcomes, social media engagement, and brand visibility.",
    },
  ];
  return (
    <>
      {/* <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-[9999999999] fixed top-0 left-3/4 w-1/4"
      /> */}
      <div className="home-page-main-wrapper overflow-hidden">
        {/* home banner section */}
        <HomeBanner />
        {/* home banner section end*/}
        {/* portfolio banner section */}
        <PortfolioSec />
        {/* portfolio section end*/}
        {/* experience section */}
        <ExperienceSec />
        {/* experience section end*/}
        {/* services section */}
        <ServicesSec />
        {/* services section end*/}
        {/* testimonial section */}
        <TestimonialSec />
        {/* testimonial section end*/}
        {/* partners section */}
        <PartnersSec />
        {/* partners section end*/}
        {/* blogs section */}
        <BlogsSec />
        {/* blogs section end*/}

        {/* video section */}
        <VideoSec />
        {/* video section end*/}
        {/* contact section */}
        <ContactSec />
        {/* contact section end*/}
      </div>
    </>
  );
};

export default Home;
