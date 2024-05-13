import React from "react";
import Image from "next/image";

interface BlogsBannerProps {
	data: {
		blogFeaturedImg: string;
		blogCategory: string;
		bannerContentWidth?: string;
		title: string;
		authorName: string;
		blogTimeToRead: string;
	};
}

const BlogsBanner: React.FC<BlogsBannerProps> = ({ data }) => {
	return (
		<section className="blog-banner-section relative h-[453px] z-30">
			<div className="blog-featured-image-modal w-full max-w-[1920px] h-full absolute top-0 left-0 -z-[2]">
				<Image
					src={`/images/blogs/${data.blogFeaturedImg || ""}`}
					alt="bsingle blog featured image"
					className="w-full h-full"
					width={1440}
					height={443}
				/>
			</div>
			<div className="custom-container">
				<div className={`blogs-cont-wrapper  mx-auto w-full text-center pt-[135px] pb-[72px] max-w-${data.bannerContentWidth}`}>
					<p className="!opacity-100 blog-category mb-[9px] text-[16px] text-center font-normal font-accent uppercase tracking-[2.1px] leading-[120%] text-white">
						{data.blogCategory || ""}
					</p>
					<h1 className="banner-title mb-[9px] text-[56px] md:text-34px] sm:text-[32px] font-normal font-primary leading-[105%] tracking-[2.8px] text-center text-white opacity-100">
						{data.title || ""}
					</h1>
					<p className="!opacity-100 auther-name mb-[9px] text-[18px] sm:text-[14px] text-center text-white font-accent font-bold leading-[180%]">
						An Article Written By {data.authorName || ""}
					</p>
					<p className="!opacity-100 time-laps capitalize text-[18px] sm:text-[14px] text-center text-white font-accent font-bold leading-[180%]">
						{data.blogTimeToRead || ""} Read
					</p>
				</div>
			</div>
		</section>
	);
};

export default BlogsBanner;
