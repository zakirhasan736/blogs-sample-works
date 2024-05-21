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
		<section className="blog-banner-section relative z-30">
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
				<div className={`blogs-cont-wrapper  mx-auto w-full text-center pt-[183px] pb-[61px] max-w-${data.bannerContentWidth}`}>
					<p className="!opacity-100 blog-category mb-[9px] text-[16px] text-center font-light font-accent uppercase tracking-[15%] leading-[14.4px] text-white">
						{data.blogCategory || ""}
					</p>
					<h1 className="banner-title mb-[9px] max-w-[685px] mx-auto text-[32px] md:text-24px] sm:text-[18px] font-normal font-primary leading-[48px] tracking-[5%] text-center text-white opacity-100">
						{data.title || ""}
					</h1>
						<Image
					src='/images/blogs/logo.svg'
						alt="bsingle blog featured image"
						className="object-cover inline"
					width={55}
					height={22}
				/> Blogs
					
				</div>
			</div>
		</section>
	);
};

export default BlogsBanner;
