import GlowButton from '@/components/elements/button/glow-button';
import {Link,Image} from '@packages/packages'
import React from 'react'

const OurStorySection = () => {
  return (
		<section className="our-story pb-[104px]">
			<div className="custom-container max-w-[1220px]">
				<div className="comon-title mb-4">
					<h2 className="mb-2">Our Story</h2>
					<span></span>
				</div>
				<div className="our-story-main-cont">
					<Image
						width={1134}
						height={400}
						className="rounded-[6px] w-full object-cover mb-4 h-[440px]"
						src="/images/our-story-modal.png"
						alt="our story modal image"
					/>

					<div className="our-story-text-cont">
						<p className="description mb-2">
							Particular Agency's evolution spans over 15 years, a journey that
							began when a group of forward-thinking kids first identified the
							pervasive problem of underwhelming quality in the digital world.
							From those early days to now, our team has grown into a dedicated
							group of seasoned professionals, all committed to addressing this
							challenge head-on.
						</p>
						<p className="description mb-2">
							We've transformed from curious minds into experts who've honed our
							craft, and along the way, we've seen first-hand the impact of
							subpar online experiences.
						</p>
						<p className="description mb-4">
							This shared history fuels our relentless drive to attack the
							problem of underwhelming quality. With each project we undertake,
							we channel our years of experience, unwavering dedication, and our
							unique Particular philosophy to engineer exceptional digital
							solutions that leave a lasting impression. Join us on this
							remarkable journey, and together, we'll elevate your digital
							presence to new heights.
						</p>

						<Link href="/our-approach" className="inline-block">
							<GlowButton glowBtnText="Our Approach" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurStorySection;
