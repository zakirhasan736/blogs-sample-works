import {Image} from "@packages/packages"

const CaseStudySlider = () => {
  return (
		<section className="case-study-slide-section   overflow-hidden">
			<div className="custom-container-fluid px-0">
				<div className="case-study-slide-wrapper">
					{/* =======case study slide item======= */}
					<div className="case-study-slide-item py-[210px] relative z-50 pl-20">
						<Image
							src="/images/case-study-slider-item-img-1.jpg"
							width={1676}
							height={927}
							alt="case study slider modal image"
							className="slider-modal-image w-full h-full absolute top-0 left-0 z-[-2]"
						/>
						<h6 className="slides-subtitle mb-[91px] text-primary text-left font-primary font-medium leading-[200%] tracking-[.92px] text-[23px]">
							Client Case Studies <span className="shape"></span>
						</h6>
						<h2 className="slides-title max-w-[642px] text-primary text-left text-secondary-heading-2 font-primary font-bold leading-none tracking-[3.8px]">
							Village of Genal
						</h2>
						<p className="slides-desc font-primary font-medium leading-[165%] tracking-[1.16px] text-left text-primary text-text-medium mt-[91px]">
							Website Design
						</p>
					</div>
					{/* =====end======= */}
				</div>
			</div>
		</section>
	);
}

export default CaseStudySlider
