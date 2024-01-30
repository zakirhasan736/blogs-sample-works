import React from "react";
import BlogsCardComponent from "../common/blogs-banner/blogs-card-component";
import Link from "next/link";
import GlowButton from "../elements/button/glow-button";

interface Blog {
	id: number;
	title: string;
	imageUrl: string;
	link: string;
	date: string;
	agency: string;
	imageHeight: number;
	imageWidth: number;
	featured?: boolean;
}

interface ArticleSectionVersionTwoProps {
	blogClass?: string;
	latestBlogs: Blog[];
	ShortBlogs?: boolean;
}

const ArticleSectionVersionTwo: React.FC<ArticleSectionVersionTwoProps> = ({
	blogClass,
	latestBlogs,
	ShortBlogs,
}) => {
	return (
		<section className={`article-blogs-section pb-[100px] ${blogClass || ""}`}>
			<div className="custom-container max-w-[1220px]">
				<div>
					<div className="common-title mb-6">
						<h2 className="text-[38px] sm:text-[28px] text-neu-white text-left mb-2 font-tertery font-bold leading-[1.1]">
							Blogs and Articles
						</h2>
						<span className="h-[4px] w-[34px] block bg-neu-white"></span>
					</div>
					<BlogsCardComponent blogs={latestBlogs} />

					{ShortBlogs && (
						<div className="articles-blogs-bottom-info end-info mt-[55px]">
							<p className="mb-[21px]">
								Explore the latest trends and insights in our informative blog
								posts.
							</p>
							<Link href="/articles" className="inline-block">
								<GlowButton glowBtnText="View All Blogs" />
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ArticleSectionVersionTwo;
