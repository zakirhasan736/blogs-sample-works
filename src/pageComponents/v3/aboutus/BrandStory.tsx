import React from 'react'

const BrandStory = () => {
  return (
		<section className="brand-story-section bg-white">
			<div className="brand-story-video-modal relative h-[465px]">
				<video
					src="/images/brand-story-modal-image.mp4"
					autoPlay={true}
					muted={true}
					playsInline={true}
					controls={false}
					loop={true}
					className="absolute inset-0 z-0 w-full  h-full object-cover"
				/>
			</div>
			<div className="custom-container">
				<div className="brand-story-cont-box pt-[71px] pb-[140px] md:pb-[80px] sm:pb-[60px]">
					<p className="eybrow-large mb-10 sm:mb-8 text-mono-100">
						brand story
					</p>
					
					<p className="body-large text-center text-mono-100 max-w-[766px] mx-auto">
						The Particular community has a desire for positive-sums in the human
						experience.
						<br />
						<br />
						Our ‘Happily Ever After’ is a world of people that uphold and
						respect their role in producing a more optimal human experience -
						and for that world to support such progress for everyone.
						<br />
						<br />
						Particular’s ‘Moral of the Story’ is that trust builds confidence
						and hope, and hope and confidence build bright futures. High quality
						relationships that have mutually productive outcomes begin that
						cycle - they build the foundations for trust, confidence and hope.
					</p>
				</div>
			</div>
		</section>
	);
}

export default BrandStory
