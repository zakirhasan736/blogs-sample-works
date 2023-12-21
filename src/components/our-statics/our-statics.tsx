import React from "react";
interface staticsItems {
	title?: string;
	description?: string;
}
interface OurStaticsPropsType {
	staticsItems: staticsItems[];
}

const OurStatics: React.FC<OurStaticsPropsType> = ({ staticsItems }) => {
	return (
		<section className="our-statics-section pt-[120px] pb-[160px] sm:py-[70px]">
			<div className="custom-container">
				<div className="our-statics-sec-wrapper grid gap-5 grid-cols-12 sm:flex sm:flex-col">
					{staticsItems?.map((staticsItem, index) => (
						<div
							key={index}
							className="our-statics-card-items text-center col-span-4">
							<h3 className="our-statics-card-title text-neu-white text-center text-[44px] font-primary font-bold leading-none px-5 sm:text-[44px]">
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
