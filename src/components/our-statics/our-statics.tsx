import React from "react";
interface staticsItems {
	title?: string;
	description?: string;
}
interface OurStaticsPropsType {
	staticsItems: staticsItems[];
	ourStaticsTitle?: string;
}

const OurStatics: React.FC<OurStaticsPropsType> = ({
	staticsItems,
	ourStaticsTitle,
}) => {
	return (
		<section className="our-statics-section pt-[86px] pb-[100px] sm:py-20">
			<div className="custom-container max-w-[1048px]">
				<div className="comon-title mb-11">
					<h2>{ourStaticsTitle}</h2>
					<span></span>
				</div>
				<div className="our-statics-sec-wrapper grid gap-5 grid-cols-12 sm:flex sm:flex-col max-w-[1430px]">
					{staticsItems?.map((staticsItem, index) => (
						<div
							key={index}
							className="our-statics-card-items text-center col-span-4 sm:mb-7">
							<h3 className="our-statics-card-title text-neu-white text-center text-[48px] font-tertery font-normal leading-none px-5 sm:text-[32px]">
								{staticsItem?.title || ""}
							</h3>
							<p className="our-statics-card-desc mt-2 opacity-80 text-neu-white text-center text-[16px] font-tertery font-normal leading-none sm:text-[16px]">
								{staticsItem?.description || ""}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurStatics;
