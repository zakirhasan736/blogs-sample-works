import React from "react";

interface SectionTitleBoxTwoProps {
	title: string;
	subtitle: string[];
	description: string;
	classNames?: string;
	colorText?: string;
	isColorText?: boolean;
}

const SectionTitleBoxTwo: React.FC<SectionTitleBoxTwoProps> = ({
	title,
	subtitle,
	description,
	classNames,
	isColorText,
	colorText,
}) => {
	const containerClasses = `section-common-title-box-content grid gap-5 grid-cols-16 sm:flex sm:gap-10 sm:flex-col ${
		classNames || ""
	}`;

	return (
		<div className={containerClasses}>
			<div className="section-common-title-box col-span-7">
				<h2 className="section-common-title max-w-[517px] text-neu-white text-left text-[60px] md:text-[38px] sm:text-[32px] font-primary font-semibold leading-none">
					{title || ""}
					{isColorText && <span className="color-text">{colorText || ""}</span>}
				</h2>
			</div>
			<div className="section-common-title-boc-details-cont col-span-9">
				<h5 className="section-common-subtitle text-text-accend-3 text-left sm:text-[18px] md:text-[20px] text-neu-white font-primary font-semibold leading-[1.1]">
					{subtitle.map((line, index) => (
						<React.Fragment key={index}>
							{line || ""}
							<br />
						</React.Fragment>
					))}
				</h5>
				<p className="section-common-desc mt-[34px] text-text-medium-4 text-left sm:text-[18px] md:text-[20px] text-neu-white font-primary font-medium leading-normal">
					{description || ""}
				</p>
			</div>
		</div>
	);
};

export default SectionTitleBoxTwo;
