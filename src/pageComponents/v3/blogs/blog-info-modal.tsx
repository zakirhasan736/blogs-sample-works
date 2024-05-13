import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogsInfoModalProps {
	data: {
	blogInfoModalImg: string;
	blogInfoModalTitle: string;
	blogInfoModalDesc1?: string;
	blogInfoModalDesc2?: string;
	blogInfoModalBtnText: string;
	}
}

const BlogInfoModal: React.FC<BlogsInfoModalProps> = ({ data }) => {
	return (
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
			{data.blogInfoModalTitle && data.blogInfoModalBtnText && (
				<div className="info-modal-info-main-cont pt-[78px] sm:pt-[60px] pb-[118px] sm:pb-[75px] bg-mono-90">
					<div className="info-modal-info-main-cont-wrap max-w-[655px] w-full mx-auto">
						<h3 className="title text-white text-center text-[32px] max-w-[449px] mx-auto md:text-[26px] sm:text-[22px] font-primary font-normal leading-[150%] tracking-[1.6px] mb-[63px] md:mb-[40px] sm:mb-[25px]">
							{data.blogInfoModalTitle || ""}
						</h3>
						{data.blogInfoModalDesc1 && (
							<h4 className="subtitle-text text-white text-center text-[24px] md:text-[20px] sm:text-[18px] font-primary font-normal leading-[150%] tracking-[1.6px] mb-4">
								{data.blogInfoModalDesc1 || ""}
							</h4>
						)}
						{data.blogInfoModalDesc2 && (
							<h4 className="subtitle-text text-white text-center text-[24px] md:text-[20px] sm:text-[18px] font-primary font-normal leading-[150%] tracking-[1.6px] mb-4">
								{data.blogInfoModalDesc2 || ""}
							</h4>
						)}
						<Link
							href="/contacts"
							className="px-[16px] py-[8px] rounded-[4px] mx-auto !mt-[63px] md:!!mt-[25px] bg-white h-10 max-w-[175px] w-full text-[14px] text-center text-mono-100 font-accent font-normal leading-[150%] flex items-center justify-center">
							{data.blogInfoModalBtnText || ""}
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default BlogInfoModal;
