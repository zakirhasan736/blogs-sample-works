import {Image} from "@packages/packages"

const GuidedSection = () => {
  return (
		<section className="guided-section pb-[120px] md:pb-[94px] sm:pb-[73px]">
			<div className="custom-container">
				<div className="guided-sec-main-wrapper grid grid-cols-16 gap-5 px-[37px] sm:px-0 sm:block">
					<div className="guided-modal-image-one col-span-6 md:col-span-8 md:w-[280px] md:h-[260px]">
						<Image
							src="/images/giuded-sec-image-1.png"
							alt="duided modal image"
							width={447}
							height={416}
							className="modal-image-one sm:w-full sm:h-full"
						/>
					</div>
					<div className="guided-modal-text-item col-span-12 md:col-span-10 pb-[91px] md:pb-[150px] sm:pb-[250px] pt-[123px] md:pt-10 sm:pt-0 relative col-start-5">
						<div className="guided-content-text-box">
							<h2 className="guided-sec-title text-shadow-1 max-w-[623px] w-full text-threeth-heading-4 text-left font-primary font-medium leading-[1.1] text-primary md:text-[45px]">
								Guided by purpose, defined by{" "}
								<span className="color-text">philosophy.</span>
							</h2>
						</div>
						<div className="guided-modal-image-two absolute bottom-0 left-[233px] z-[-1] md:w-[419px] md:h-{344px] sm:left-20">
							<Image
								width={795}
								height={652}
								src="/images/giuded-sec-image-2.png"
								alt="modal image two"
								className="modal-image-two md:w-full md:h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default GuidedSection
