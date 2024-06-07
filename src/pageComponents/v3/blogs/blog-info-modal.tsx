import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogSection {
	title: string;
	descriptions: string[];
	type: "normal" | "list"; // Add a type field to distinguish between content types
}

interface BlogsInfoModalProps {
	data: {
		blogInfoModalImg: string;
		blogInfoModalBtnText: string;
		sections: BlogSection[];
	};
}

const BlogInfoModal: React.FC<BlogsInfoModalProps> = ({ data }) => (
	<div className="blog-details-modal-info-box">
		<div className="info-modal-image max-w-[1920px] w-full h-[581px]">
			<Image
				src={`/images/blogs/${data.blogInfoModalImg || ""}`}
				alt="info modal image"
				className="w-full h-full object-cover"
				width={1440}
				height={581}
			/>
		</div>

		{data.sections && data.blogInfoModalBtnText && (
			<div className="info-modal-info-main-cont pt-[77px] sm:pt-[60px] pb-[65px] sm:pb-[55px] sm:px-4  bg-mono-90">
				<div className="info-modal-info-main-cont-wrap max-w-[655px] w-full mx-auto">
					{data.sections.map((section, index) => (
						<div key={index} className="mb-10">
							{section.type === "normal" ? (
								<div className="normal-defult-type-content">
									<h3 className="title text-white text-[24px] sm:text-[20px] font-primary font-normal leading-[150%] tracking-[1.6px] text-center mb-4">
										{section.title}
									</h3>
									{section.descriptions.map((desc, descIndex) => (
										<h4
											key={descIndex}
											className="desc-text text-white text-[18px] text-center font-primary font-normal leading-[160%] tracking-[1.2px] mb-4 opacity-100">
											{desc}
										</h4>
									))}
								</div>
							) : (
								<div className="order-list-defult-type-content">
									<h3 className="title text-white text-[16px] font-accent font-bold leading-6 mb-4">
										{section.title}
									</h3>
									{section.descriptions.map((desc, descIndex) => (
										<p
											key={descIndex}
											className="subtitle-text text-white text-[16px] font-accent font-normal leading-6 mb-4">
											{desc}
										</p>
									))}
								</div>
							)}
						</div>
					))}
					<Link
						href="/contacts"
						className="px-[16px] py-[8px] rounded-[4px] mx-auto !mt-[63px] md:!mt-[25px] bg-white h-10 max-w-[175px] w-full text-[14px] text-mono-100 font-accent font-normal leading-[150%] flex items-center justify-center">
						{data.blogInfoModalBtnText}
					</Link>
				</div>
			</div>
		)}
	</div>
);

export default BlogInfoModal;
