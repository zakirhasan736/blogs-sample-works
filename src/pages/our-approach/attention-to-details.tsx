import BannerVarientTwo from "@/components/common/banner/banner-varient-2";
import SectionTitleBoxTwo from "@/components/common/sec-common-title-box/section-title-box-two";
import OurStatics from "@/components/our-statics/our-statics";

const AttentionToDetails = () => {
	const bannerData = {
		subHeading: "Attention to detail",
		title: " in quality to deliver for a purpose.",
		description:
			"Our gift is observation. It just so happens that we’re a marketing agency.",
		isColorText: true,
		colorText: "Lead with detail",
	};

	const titleData = {
		title: "Our Approach at ",
		colorText: "Particular",
		isColorText: true,
		subtitle: [
			"We encourage Scrutiny and questioning.",
			"Then redesign and polishing. And then more questioning. And more polishing.",
		],
		description:
			"This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.",
		classNames: "mb-[136px]",
	};
	return (
		<div className="our-thought-division-main-wrapper">
			{/* thought division banner */}
			<BannerVarientTwo data={bannerData} />
			{/* thought division banner */}
			<div className="our-thought-division-main-wrapper-cont pt-[184px]">
				<div className="custom-container">
					<div className="our-thought-division-section-box">
						<SectionTitleBoxTwo {...titleData} />
					</div>
				</div>
				{/* thought division dedtails info */}
				<section className="thought-division-details-section bg-neu-gray-black-2 pb-[169px] pt-[126px] overflow-hidden">
					<div className="custom-container">
						<div className="thought-division-details-wrap relative grid grid-cols-16 gap-5 z-50">
							<ul className="thought-division-slug flex flex-col-reverse items-start left-0 top-20  absolute gap-10">
								<li className="slugs-item whitespace-nowrap text-neu-white text-left uppercase text-text-xxs-small font-normal font-primary tracking-[.56px]">
									digital marketing
								</li>
								<li className="slugs-item whitespace-nowrap text-neu-white text-left uppercase text-text-xxs-small font-normal font-primary tracking-[.56px]">
									designing
								</li>
								<li className="slugs-item whitespace-nowrap text-neu-white text-left uppercase text-text-xxs-small font-normal font-primary tracking-[.56px]">
									development
								</li>
							</ul>

							<div className="thought-division-details-cont-box col-span-14 col-start-3 w-full relative">
								<div className="modal-text-box absolute z-[-10]">
									<div className="modal-scroll-text scrolling-text text-transparent whitespace-nowrap text-modal-heading font-primary font-normal leading-[170%]">
										Attention to details
									</div>
								</div>
								<div className="thought-division-title-box relative z-10">
									<h2 className="thought-division-title whitespace-nowrap  text-left text-text--large font-primary font-normal tracking-[.8px] uppercase leading-normal">
										ATTENTION TO DETAIL
									</h2>
									<span className="divider-shape h-[1px] w-[61px] bg-neu-white block"></span>
								</div>

								<div className="thought-division-info-text-box max-w-[940px] w-full ml-auto mt-[17px]  relative z-10">
									<h4 className="thought-division-subtitle mb-5 thought-division-title text-neu-white text-left text-text--large font-primary font-bold tracking-[.8px] leading-[190%]">
										Areas of thinking we explore with you in our digital and
										creative solutions:
									</h4>
									<div className="thought-division-details-box ">
										<div className="thought-division-details-info-item mb-5">
											<p className="details-info-text text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal mb-3">
												User Experience
											</p>
											<p className="info-desc text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
												Intuitive, aesthetically pleasing user-journey designs
												combined with innovative, sensible functionality in your
												online and offline business components.
											</p>
										</div>
										<div className="thought-division-details-info-item mb-5">
											<p className="details-info-text text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal mb-3">
												Brand Intention
											</p>
											<p className="inf-desc text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
												Happier online users and clients come from bold, unique
												intentions. Exploring creativity helps deliver them to
												satisfaction.
											</p>
										</div>
										<div className="thought-division-details-info-item mb-5">
											<p className="details-info-text text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal mb-3">
												Science
											</p>
											<p className="info-desc text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
												Make intelligent, people-centric business decisions that
												benefit your brand’s eco-system. The data that humanity
												has uncovered in Psychology, Economics and Business ties
												it all together.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* thought division dedtails info end */}

				{/* our statics section */}
				<OurStatics />
				{/* our statics section end*/}
			</div>
		</div>
	);
};

export default AttentionToDetails;
