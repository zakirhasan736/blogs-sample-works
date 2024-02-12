"use client";
import React from "react";

import Image from "next/image";
interface ThoughtDivisionItem {
	detailsinfo_title?: string;
	detailsinfo_description?: string;
	infoList?: string[];
}

interface ThoughtDivisionInfoListProps {
	items: ThoughtDivisionItem[];
	division: {
		modalScrollText?: string;
		thoughtDivisionTitle?: string;
		thoughtDivisionSubtitle?: string;
		thoughtDivisionImage: string;
	};
}


const ThoughtDivisionInfoList: React.FC<ThoughtDivisionInfoListProps> = ({
	items,
	division,
}) => {

	return (
		<div className="thought-division-details-cont-box main-visual-sectionFour w-full relative bg-[#fff] rounded-[12px] px-9 pt-8 sm:px-5 sm:py-7 pb-[26px]">
			<div className="thought-division-title-box relative z-10">
				<h2 className="thought-division-title whitespace-nowrap opacity-50 text-[#000] text-left text-[14px] sm:text-[14px] font-tertery font-extrabold tracking-[.8px] uppercase leading-normal">
					{division.thoughtDivisionTitle || ""}
				</h2>
			</div>
			<div className="thought-division-info-text-box w-full ml-auto  relative z-10">
				<h4 className="thought-division-subtitle mb-4 thought-division-title text-neu-black text-left text-[28px] sm:text-[20px] sm:leading-none font-tertery font-bold capitalize leading-normal ">
					{division.thoughtDivisionSubtitle ||
						"Free-thought at Particular involves pursuing new and often non-conventional ideas"}
					<span className="divider-shape h-[3px] w-[22px] bg-neu-black block"></span>
				</h4>
				<div className="approach-modal-image-box">
					<Image
						src={division.thoughtDivisionImage}
						alt="approach modal image"
						width={969}
						height={251}
						className="sm:h-[160px] object-cover"
					/>
				</div>
				<div className="thought-division-details-box mt-5">
					{items?.map((item, index) => (
						<div key={index} className="thought-division-details-info-item">
							<p className="details-info-text text-[16px] sm:text-[14px] text-left text-[#000] font-tertery font-extrabold uppercase opacity-50 leading-normal">
								{item.detailsinfo_title || ""}
							</p>
							<p className="info-desc text-[16px] sm:text-[14px] text-left text-[#000] font-tertery font-normal leading-normal">
								{item.detailsinfo_description || ""}
							</p>
							{item.infoList && (
								<ul className="thought-division-info-list pl-5">
									{item.infoList.map((info, idx) => (
										<li
											key={idx}
											className="thought-division-info-text sm:text-[14px] text-[16px] text-left text-[#000] font-tertery font-normal leading-normal mb-3 list-disc">
											{info || ""}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThoughtDivisionInfoList;
