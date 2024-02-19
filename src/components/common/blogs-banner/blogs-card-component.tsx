
import React from "react";
import { Link, Image } from "@packages/packages";

interface Blog {
	id: number;
	title: string;
	imageUrl: string;
	link: string;
	date: string;
	agency: string;
	imageHeight: number;
	imageWidth: number;
	imgAltText: string;
	blogsItemsClass?: string;
	featured?: boolean;
}

interface BlogsCardComponentProps {
	blogs: Blog[];
}

const BlogsCardComponent: React.FC<BlogsCardComponentProps> = ({ blogs }) => {
	return (
		<div className="articles-blogs-main-wrap grid grid-cols-12 gap-[13px] md:justify-center sm:gap-[30px]">
			{blogs.map(blog => (
				<div
					key={blog.id}
					className={`blog articles-blogs-item col-span-4 md:col-span-6 sm:col-span-full ${blog.blogsItemsClass}`}>
					<Link href={blog.link} className="relative">
						<Image
							width={blog.imageWidth}
							height={blog.imageHeight}
							src={blog.imageUrl}
							alt={blog.imgAltText}
							className="rounded-3 h-[237px] object-cover"
						/>
						{blog.featured && (
							<span className="featured-tag category-tags absolute top-[17px] left-[19px] px-3 py-[6px] text-center text-[14px] text-neu-white font-primary font-medium leading-normal bg-[#00000080]">
								Featured
							</span>
						)}
					</Link>
					<Link className="text-[#ffffff]" href={blog.link}>
						<h4>{blog.title}</h4>
					</Link>
					<div className="blog-info">
						<div>
							<p>- {blog.agency}</p>
						</div>
						<div>
							<p>{blog.date}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogsCardComponent;
