"use client";
import React, { useState } from "react";
import ArticleSectionVersionTwo from "@/components/article-section/article-section-v2";
import BlogsBanner from "@/components/common/blogs-banner/blogs-banner";
import latestBlogs from "@data/blogs/short-blog-data.json";

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
	imgAltText: string;
}

const BlogsPerPage: number = 6;

const ArticlesPage: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const totalBlogs: number = latestBlogs.length;
	const totalPages: number = Math.ceil(totalBlogs / BlogsPerPage);

	const startIndex: number = (currentPage - 1) * BlogsPerPage;
	const endIndex: number = Math.min(startIndex + BlogsPerPage, totalBlogs);

	const currentBlogs: Blog[] = latestBlogs.slice(startIndex, endIndex);

	const handlePageChange = (page: number): void => {
		const newPage = Math.max(1, Math.min(page, totalPages)); // Ensure newPage is within valid range
		setCurrentPage(newPage);
	};

	const renderPagination = (): JSX.Element[] => {
		const pages: JSX.Element[] = [];

		// Render page numbers
		if (totalPages <= 7) {
			// If total pages are less than or equal to 7, render all pages
			for (let i: number = 1; i <= totalPages; i++) {
				pages.push(
					<button
						key={i}
						onClick={() => handlePageChange(i)}
						className={
							currentPage === i
								? "active py-[13px] px-[19px] border-2 border-[#222629]"
								: "py-[13px] px-[19px]"
						}>
						{i}
					</button>,
				);
			}
		} else {
			// Render first two pages
			for (let i: number = 1; i <= 2; i++) {
				pages.push(
					<button
						key={i}
						onClick={() => handlePageChange(i)}
						className={
							currentPage === i
								? "active py-[13px] px-[19px] border-2 border-[#222629]"
								: "py-[13px] px-[19px]"
						}>
						{i}
					</button>,
				);
			}

			// Render ellipsis if currentPage is not in the first four pages
			if (currentPage > 4) {
				pages.push(<span key="start-ellipsis">...</span>);
			}

			// Render current page and surrounding pages
			const start = Math.max(3, currentPage - 1);
			const end = Math.min(currentPage + 1, totalPages - 2);

			for (let i: number = start; i <= end; i++) {
				pages.push(
					<button
						key={i}
						onClick={() => handlePageChange(i)}
						className={
							currentPage === i
								? "active py-[13px] px-[19px] border-2 border-[#222629]"
								: " py-[13px] px-[19px]"
						}>
						{i}
					</button>,
				);
			}

			// Render ellipsis if currentPage is not in the last four pages
			if (currentPage < totalPages - 3) {
				pages.push(<span key="end-ellipsis">...</span>);
			}

			// Render last two pages
			for (let i: number = totalPages - 1; i <= totalPages; i++) {
				pages.push(
					<button
						key={i}
						onClick={() => handlePageChange(i)}
						className={
							currentPage === i
								? "active py-[13px] px-[19px] border-2 border-[#222629]"
								: " py-[13px] px-[19px]"
						}>
						{i}
					</button>,
				);
			}
		}

		return pages;
	};
	return (
		<div className="blogs-page-main-wrapper overflow-hidden">
			<BlogsBanner />
			<ArticleSectionVersionTwo
				latestBlogs={currentBlogs}
				blogClass="pb-[50px] pt-[71px]"
			/>
			<div className="custom-container max-w-[517px] pb-[77px]">
				<div className="pagination flex items-center gap-3 justify-center">
					<button
						className="glow-button text-neu-white  capitalize text-[16px] text-center font-semibold font-tertery leading-normal"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}>
						<span className="py-[13px] px-[19px]">Previous</span>
						<div className="gradient"></div>
					</button>

					<div className="pagination-numbers flex items-center gap-[6px]">
						{renderPagination()}
					</div>

					<button
						className="glow-button capitalize  text-neu-white text-[16px] text-center font-semibold font-tertery leading-normal"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}>
						<span className="py-[13px] px-[19px]">Next</span>
						<div className="gradient"></div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticlesPage;
