"use client";
import React from "react";
import Link from "next/link";

const Particularpedia = () => {
	return (
		<div className="particularpedia-page-main-wrapper t bg-white pt-[153px] sm:pt-[120px]">
			<div className="particularpedia-sec-title-box custom-container mb-[56px] sm:mb-[35px]">
				<h1 className="title mb-[24px] text-mono-100 sm:mb-4">
					Particularpedia
				</h1>
				<p className="desc-text text-mono-100">
					All the branding, marketing & business definitions you need to know at
					Particular
				</p>
			</div>

			<div className="pedia-navigation-area bg-[#F5F5F5]">
				<div className="custom-container">
					<ul className="pedia-navigation-list flex h-[42px] items-center justify-between gap-0">
						{[
							"a",
							"b",
							"c",
							"d",
							"e",
							"f",
							"g",
							"h",
							"i",
							"j",
							"k",
							"l",
							"m",
							"n",
							"o",
							"p",
							"q",
							"r",
							"s",
							"t",
							"u",
							"v",
							"w",
							"x",
							"y",
							"z",
						].map((letter, idx) => (
							<li
								key={idx}
								className="pedia-navigation-item font-medium tracking-[1.2px] cursor-pointer text-[24px] uppercase text-[#000] hover:text-[#026FEE] active:text-[#026FEE]">
								{letter}
							</li>
						))}
					</ul>
				</div>
			</div>

			<section className="pedia-nested-list-section mt-12">
				<div className="custom-container">
					<div className="pedia-nested-flter-item">
						<div className="pedia-nested-flter-list-item pb-16">
							<h3 className="nested-letter-item-title mb-[18px] font-primary text-[40px] font-medium uppercase tracking-[2.8px] text-[#4D4D4D]">
								a
							</h3>
							<div className="pedia-nested-list-grid flex-start flex justify-between gap-4">
								{/* You can map over the terms dynamically once fetched */}
								{[...Array(4)].map((_, colIdx) => (
									<ul
										key={colIdx}
										className="item-filter-result-grid-item flex flex-col gap-4">
										{[...Array(7)].map((_, itemIdx) => (
											<li
												key={itemIdx}
												className="result-title font-primary text-[24px] font-medium capitalize tracking-[1.2px] text-[#4D4D4D] hover:text-[#026FEE] hover:underline">
												<Link href="/">Attribute {itemIdx + 1}</Link>
											</li>
										))}
									</ul>
								))}
							</div>
							<Link
								className="mt-7 block text-right font-primary text-[20px] font-medium capitalize tracking-[1.2px] text-[#026FEE] underline"
								href="/">
								See complete list of A terms
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Particularpedia;
