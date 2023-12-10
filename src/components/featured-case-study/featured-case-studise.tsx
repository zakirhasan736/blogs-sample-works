import {Image} from '@packages/packages'

const FeaturedCaseStudise = () => {
  return (
		<div className="featured-case-study-section pb-[200px] sm:pb-[143px] overflow-hidden">
			<div className="custom-container">
				<div className="featured-case-study-sec-title-box text-center">
					<h2 className="section-title text-[56px] text-center mb-[70px] sm:mb-[45px] text-neu-white font-primary font-sembold tracking-[2px] leading-none capitalize sm:text-[36px]">
						Case Studies
					</h2>
				</div>
				<div className="featured-case-study-wrap max-w-[1115px] w-full mx-auto grid grid-cols-12 gap-5 sm:flex sm:items-start sm:w-[700px] sm:left-[-170px] relative">
					{/* ========= */}
					<div className="featured-case-study-card-item col-span-4 sm:h-[369px] sm:w-[229px]">
						<Image
							src="/images/featured-case-study-img-1.png"
							alt="featured case study modal image"
							width={356}
							height={571}
							className="featured-case-study-modal-img sm:h-[369px] sm:w-[229px]"
						/>
					</div>
					{/* ====== */}
					<div className="featured-case-study-card-item col-span-4 sm:h-[369px] sm:w-[229px]">
						<Image
							src="/images/featured-case-study-img-2.png"
							alt="featured case study modal image"
							width={356}
							height={571}
							className="featured-case-study-modal-img sm:h-[369px] sm:w-[229px]"
						/>
					</div>
					{/* ====== */}
					<div className="featured-case-study-card-item col-span-4 sm:h-[369px] sm:w-[229px]">
						<Image
							src="/images/featured-case-study-img-3.png"
							alt="featured case study modal image"
							width={356}
							height={571}
							className="featured-case-study-modal-img sm:h-[369px] sm:w-[229px]"
						/>
					</div>
					{/* ====== */}
				</div>
			</div>
		</div>
	);
}

export default FeaturedCaseStudise
