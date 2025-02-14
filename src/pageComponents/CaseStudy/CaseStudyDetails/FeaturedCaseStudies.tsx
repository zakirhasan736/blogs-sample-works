import { Image, Link } from "@packages/packages";
import React from "react";
interface CaseStudy {
	image: string;
	link: string;
	title: string;
	subtitle: string;
}

interface FeaturedCaseStudiesProps {
	data: {
		featuredSecTitle?: string;
		posts: CaseStudy[];
	};
}

const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({
	data
}) => {
		if (!data) {
			return <div>No article content available</div>;
		}
	return (
		<div className="featured-case-study-section pb-[200px] sm:pb-[143px] overflow-hidden">
			<div className="custom-container">
				<div className="featured-case-study-sec-title-box text-center">
					<h2 className="section-title text-[55px] text-center md:text-[34px] md:mb-[45px]  mb-[90px] sm:mb-[45px] text-neu-white font-primary font-semibold tracking-[2px] leading-none capitalize sm:text-[36px]">
						{data.featuredSecTitle || ""}
					</h2>
				</div>
				<div className="featured-case-study-wrap max-w-[1115px] w-full mx-auto grid grid-cols-12 gap-5 sm:flex sm:items-start sm:w-[700px] sm:left-[-170px] relative">
					{data.posts.map((post, index) => (
						<div
							key={index}
							className="featured-case-study-card-item col-span-4 sm:h-[369px] sm:w-[229px] relative">
									<Image
										src={post.image || ""}
										alt={`Featured Case study card ${index + 1}`}
										width={356}
										height={571}
										className="featured-case-study-modal-img sm:h-[369px] sm:w-[229px]"
									/>
									<div className="case-study-cont-text absolute"> 
										<Link  href={post.link || ""}>
											<h3 className="case-study-card-title text-[22px] text-left text-[#ffffff] font-primary font-extrabold tracking-[3px] uppercase sm:text-[9px]">
												{post.title || ""}
											</h3>
											<h5 className="case-study-card-subtitle text-[16px] text-left text-[#ffffff] font-primary font-extrabold tracking-[3px] uppercase sm:text-[9px]">
												{post.subtitle || ""}
											</h5>
										</Link>
									</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedCaseStudies;
