"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogsBanner from "./blogs-banner";
import BlogInfoModal from "./blog-info-modal";
import BlogsTestimonials from "./blogs-testimonials";
import SingleBlogDetailsInfo from "./single-blog-details-info";
interface BlogsPageProps {
	data: {
		BannerData: any;
		BlogInfoModals: any;
		SingleBlogsDetailsInfo: any;
	};
}
const OFFSET = 50; // Offset in pixels
const BlogsPage: React.FC<BlogsPageProps> = ({ data }) => {
	
  const [activeblogDetailsIndex, setActiveblogDetailsIndex] =
		useState<number>(0);
	const blogDetailsItemsRef = useRef<(HTMLLIElement | null)[]>([]);
	const dataIndexItemsRef = useRef<(HTMLElement | null)[]>([]);
if (!data) {
    return <div>No article content available</div>;
  }

  const { BannerData, BlogInfoModals, SingleBlogsDetailsInfo } = data;

const blogDetailsInfoItems =
	data.SingleBlogsDetailsInfo?.blogDetailsInfoItems || [];
const blogTitle = blogDetailsInfoItems.map(
	(item: { title: string }) => item.title,
);


  console.log(blogTitle);






  return (
		<div className="blogspage-main-wrapper bg-white">
			{/* banner section */}
			<BlogsBanner data={BannerData} />
			{/* single blog details content */}
			<div className="single-blog-details-content-wrap gap-5 flex items-start pb-[24px] sm:pb-[20px] sm:flex-col custom-container pt-[64px]">
				<div className="blog-details-left-cont  w-full sticky sm:relative sm:top-0 top-10 max-w-[272px] md:max-w-[200px] sm:max-w-full">
					<h3 className="blogs-details-title mb-4 text-mono-60 font-accent font-normal !text-[16px] text-left leading-[120%] tracking-[2.4px] uppercase">
						Contents
					</h3>
					<ul className="blogs-details-list-items flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
						{/* Assuming blogDetailsData is available */}
						{blogTitle &&
							blogTitle.map((title: string, index: number) => (
								<li
									key={index}
									ref={el => (blogDetailsItemsRef.current[index] = el)}
									className={`blogDetailss-list ${activeblogDetailsIndex === index ? "active" : ""}`}>
									<button
										className="blogDetailss-item-btn hover:underline hover:font-semibold transition-all ease-in-out text-[16px] text-left text-mono-100 font-accent  leading-[150%] active:underline active:font-medium"
										type="button">
										{title}
									</button>
								</li>
							))}
					</ul>
					<Link
						href="/contacts"
						className="bg-[#181725] mt-[44px] rounded-[4px] py-[8px] px-4 max-w-[121px] h-[40px] flex items-center justify-center text-white text-center text-[14px] font-accent font-normalleading-[1.2]">
						Start a project
					</Link>
				</div>
				<div className="blog-details-right-cont max-w-[650px]  w-full">
					<SingleBlogDetailsInfo data={SingleBlogsDetailsInfo} />
				</div>
			</div>
			{/* blog info modal section */}
			<BlogInfoModal data={BlogInfoModals} />
			{/* single blog testimonials section */}
			<BlogsTestimonials />
			{/* featured blog section */}
			<div className="single-blog-details-featured-blog pt-[56px] pb-[48px] bg-[#026FEE]">
				<div className="custom-container">
					<div className="section-title-box mb-12 md:mb-8 sm:mb-6 flex items-center justify-between gap-[30px]">
						<h2 className="section-title text-[24px] text-left text-white font-primary font-normal leading-[120%] tracking-[1.2px]">
							See more Particular Articles
						</h2>
						<Link
							href="/contacts"
							className="flex items-center justify-center h-12 max-w-[106px] w-full rounded-[4px] border border-[#fff] text-white ">
							Book A Call
						</Link>
					</div>
					<div className="featured-blogs-wrap grid grid-cols-12 sm:grid-cols-6 gap-6 sm:gap-[30px]">
						<div className="blog-card-item col-span-6 sm:col-span-6">
							<Image
								src="/images/blogs/featured-blog-card-img-1.png"
								alt="featured blog thumbnail image"
								className="w-full max-w-[569px] mb-8 sm:mb-4 h-[262px] rounded-[4px] object-cover"
								width={569}
								height={262}
							/>
							<div className="blog-card-cont-box">
								<ul className="blog-category-lists mb-[19px] sm:mb-[12px] flex flex-wrap gap-[18px] items-center">
									<li className="blogs-category-list text-[12px] text-center text-white font-accent font-normal leading-[150%] flex items-center justify-center border border-white p-2 rounded-full h-[34px]">
										Web Design
									</li>
									<li className="blogs-category-list text-[12px] text-center text-white font-accent font-normal leading-[150%] flex items-center justify-center border border-white p-2 rounded-full h-[34px]">
										UX/UI
									</li>
								</ul>
								<h4 className="blog-title mb-[8px] tracking-[1.2px] leading-[150%] font-normal font-primary text-[24px] md:text-[20px] sm:text-[18px] text-white">
									How much does a website cost in 2024?
								</h4>
								<p className="blog-desc text-[16px] sm:text-[12px] font-accent font-normal leading-[150%] text-left text-white !opacity-100">
									Find out how much building your website will cost this year.
								</p>
							</div>
						</div>
						<div className="blog-card-item col-span-6 sm:col-span-6">
							<Image
								src="/images/blogs/featured-blog-card-img-2.png"
								alt="featured blog thumbnail image"
								className="w-full max-w-[569px] mb-8 sm:mb-4 h-[262px] rounded-[4px] object-cover"
								width={569}
								height={262}
							/>
							<div className="blog-card-cont-box">
								<ul className="blog-category-lists mb-[19px] sm:mb-[12px] flex flex-wrap gap-[18px] items-center">
									<li className="blogs-category-list text-[12px] text-center text-white font-accent font-normal leading-[150%] flex items-center justify-center border border-white p-2 rounded-full h-[34px]">
										Marketing
									</li>
								</ul>
								<h4 className="blog-title mb-[8px] tracking-[1.2px] leading-[150%] font-normal font-primary text-[24px] md:text-[20px] sm:text-[18px] text-white">
									What Do Marketing Agencies Do?
								</h4>
								<p className="blog-desc text-[16px] sm:text-[12px] font-accent font-normal leading-[150%] text-left text-white !opacity-100">
									Find out how much building your website will cost this year.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogsPage;
