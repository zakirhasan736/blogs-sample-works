"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import React from "react";
import BlogsBanner from "./blogs-banner";
import BlogInfoModal from "./blog-info-modal";
import SingleBlogDetailsInfo from "./single-blog-details-info";

interface BlogsPageProps {
  data: {
    BannerData: any;
    BlogInfoModals: any;
    SingleBlogsDetailsInfo: any;
  };
}

const OFFSET = 100; // Offset in pixels

const BlogsPage: React.FC<BlogsPageProps> = ({ data }) => {
  const [activeblogDetailsIndex, setActiveblogDetailsIndex] =
    useState<number>(0);
  const blogDetailsItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const blogContentItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!data) {
      return;
    }

    const handleScroll = () => {
      blogContentItemsRef.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= OFFSET) {
            setActiveblogDetailsIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  if (!data) {
    return <div>No article content available</div>;
  }

  const { BannerData, BlogInfoModals, SingleBlogsDetailsInfo } = data;

  const blogDetailsInfoItems =
    SingleBlogsDetailsInfo?.blogDetailsInfoItems || [];
  const blogTitle = blogDetailsInfoItems.map(
    (item: { title: string }) => item.title
  );

  const handleTitleClick = (index: number) => {
    const target = blogContentItemsRef.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="blogspage-main-wrapper bg-white">
      {/* banner section */}
      <BlogsBanner data={BannerData} />
      {/* single blog details content */}
      <div className="single-blog-details-content-wrap gap-5 sm:gap-20 flex items-start pb-[72px] sm:pb-[20px] sm:flex-col custom-container max-w-[1440px] pl-[139px] laptop-m:pl-[30px] lg:pl-[24px] md:pl-[20px] sm:pl-[16px] pr-0 pt-[64px]">
        <div className="blog-details-left-cont w-full sticky sm:relative sm:top-0 top-10 max-w-[272px] md:max-w-[200px] sm:max-w-full">
          <h3 className="blogs-details-title mb-4 text-[#666] font-accent font-normal !text-[14px] text-left leading-[120%] tracking-[2.4px] uppercase">
            Contents
          </h3>
          <ul className="blogs-details-list-items flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {blogTitle && (
              <>
                {blogTitle.map((title: string, index: number) => (
                  <li
                    key={index}
                    ref={(el) => {
                      blogDetailsItemsRef.current[index] = el;
                    }}
                    className={`blogDetailss-list ${
                      activeblogDetailsIndex === index ? "active" : ""
                    }`}
                  >
                    <button
                      className="blogDetailss-item-btn !h-auto hover:underline hover:font-semibold transition-all ease-in-out text-[14px] text-left text-[#181725] font-accent leading-[150%] active:underline active:font-medium"
                      type="button"
                      onClick={() => handleTitleClick(index)}
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </>
            )}
          </ul>

          <Link
            href="/contacts"
            className="bg-[#181725] mt-[44px] rounded-[4px] py-[8px] px-4 max-w-[121px] h-[40px] flex items-center justify-center text-white text-center text-[14px] font-accent font-normal leading-[1.2]"
          >
            Start a project
          </Link>
        </div>

        <div className="blog-details-right-cont max-w-full w-full">
          <SingleBlogDetailsInfo
            data={SingleBlogsDetailsInfo}
            blogContentItemsRef={blogContentItemsRef}
          />
        </div>
      </div>
      {/* blog info modal section */}
      <BlogInfoModal data={BlogInfoModals} />
      {/* single blog testimonials section */}
      {/* <BlogsTestimonials /> */}
      {/* featured blog section */}
    </div>
  );
};

export default BlogsPage;
