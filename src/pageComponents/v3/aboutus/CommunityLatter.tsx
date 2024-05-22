import Image from 'next/image'
import React from 'react'

const CommunityLatter = () => {
  return (
		<section className="community-latter-section bg-white">
			<Image
				src="/images/community-latter-modal-image.png"
				alt="community latter sec modal image"
				width={1440}
				className='w-full h-[387px] object-cover object-top'
				height={387}
			/>
			<div className="custom-container">
				<div className="community-latter-cont-box pt-[105px] pb-[120px] py-20">
					<h4 className="title  font-primary font-normal text-[24px] sm:text-[18px] md:text-[20px] text-center text-black leading-[160%] tracking-[1.2px] mb-8">
						A Letter to the Community at Particular
					</h4>
					<p className="desc body-regular-1 text-center mb-6 text-mono-100 mx-auto max-w-[766px] w-full !opacity-100">
						To our community at Particular and all of Humankind,
						<br />
						<br />
						This is a message, written and contributed directly by the
						Particular directors, and we extend our hand in wishing you the
						warmest welcome into the Particular community.
						<br />
						<br />
						Throughout a period of around 15 years, we saw that the social
						contract has been quite severely broken. This dates as far back as
						the 2008 financial crisis.
					</p>
					<p className="desc body-regular-1 text-center mb-6 text-mono-100 mx-auto max-w-[766px] w-full !opacity-70">
						There’s a disconnect between expectations and experiences. Your
						lived experience. Your product experiences. Your service
						experiences. Your community experiences, and so on.
					</p>
					<p className="desc body-regular-1 text-center text-mono-100 mx-auto max-w-[766px] w-full !opacity-50">
						So we exist to rid the world of the problem - the issue that is
						underwhelming human experience. In whatever forms it may take,
						starting with business and commerce.
					</p>
				</div>
			</div>
		</section>
	);
}

export default CommunityLatter
