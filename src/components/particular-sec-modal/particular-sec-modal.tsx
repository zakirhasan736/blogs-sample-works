import {Image} from "@packages/packages"
const ParticularSecModal = () => {
  return (
		<section className="particular-modal-section pb-[31px] relative ">
			<div className="scrolling-text-box absolute bottom-0 left-0 sm:top-0">
				<div className="scrolling-text text-center text-primary-heading-4 whitespace-nowrap font-primary  font-bold leading-normal tracking-[5.28px] uppercase md:tracking-[3px] md:text-[94px] sm:text-[78px]  md:leading-[1.2] sm:leading-[1.4]">
					Anything in Particular?
				</div>
				<div className="scrolling-text text-center text-primary-heading-4 whitespace-nowrap font-primary font-bold leading-normal tracking-[5.28px] uppercase md:tracking-[3px] md:text-[94px] sm:text-[78px] md:leading-[1.2] sm:leading-[1.4]">
					Anything in Particular?
				</div>
				<div className="scrolling-text text-center text-primary-heading-4 whitespace-nowrap font-primary font-bold leading-normal tracking-[5.28px] uppercase md:tracking-[3px] md:text-[94px] sm:text-[78px] md:leading-[1.2] sm:leading-[1.4]">
					Anything in Particular?
				</div>
			</div>
			<div className="custom-container">
				<div className="particular-modal-main-wrapper flex items-center justify-between sm:block">
					<div className="particular-modal-left-cont sm:pt-20">
						<h2 className="particular-modal-title max-w-[691px] md:text-[38px] sm:text-[28px] text-[87px] text-left text-primary font-primary font-medium leading-none tracking-[3.76px]">
							Anything in{" "}
							<span className="color-text  text-secondary text-[115px] md:text-[67px] sm:text-[55px] tracking-[4.92px] font-bold">
								Particular?
							</span>
						</h2>
					</div>
					<div className="particular-modal-right-cont">
						<Image
							src="/images/gif/Section03.gif"
							width={600}
							height={500}
							alt="particular modal image"
							className="particular-modal-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ParticularSecModal
