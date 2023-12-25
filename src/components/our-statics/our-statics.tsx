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
		<section className="our-statics-section pt-[100px] pb-[120px] sm:py-[70px]">
			<div className="custom-container">
				<h2 className="our-statics-title mb-20 text-[48px] sm:text-[32px] text-center text-primary font-bold font-primary leading-none empty:hidden">
					{ourStaticsTitle}
				</h2>
				<div className="our-statics-sec-wrapper grid gap-5 grid-cols-12 sm:flex sm:flex-col max-w-[1430px]">
					{staticsItems?.map((staticsItem, index) => (
						<div
							key={index}
							className="our-statics-card-items text-center col-span-4 sm:mb-7">
							<h3 className="our-statics-card-title text-neu-white text-center text-[48px] font-primary font-bold leading-none px-5 sm:text-[32px]">
								{staticsItem?.title || ""}
							</h3>
							<p className="our-statics-card-desc mt-4 text-neu-white text-center text-text-medium-4 font-primary font-medium leading-none sm:text-[18px]">
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
