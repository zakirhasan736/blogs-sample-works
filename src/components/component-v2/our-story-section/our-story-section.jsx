import GlowButton from '@/components/elements/button/glow-button';
import {Link,Image} from '@packages/packages'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const OurStorySection = () => {
	useEffect(() => {
		const section = document.querySelector(".our-story");

		gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top top+=50px",
				end: "bottom top",
				onEnterBack: () => {
					gsap.fromTo(
						section,
						{
							backgroundColor: "#f8f9f7",
							duration: 0.1,
							ease: "power2.inOut",
						},
						{
							backgroundColor: "#000000",
							duration: 0.1,
							ease: "power2.inOut",
							onComplete: () => {
								section.classList.add("dark-mode");
								section.classList.remove("light-mode");
							},
						},
					);
				},
				onEnter: () => {
					gsap.fromTo(
						section,
						{
							backgroundColor: "#f8f9f7",
							duration: 0.1,
							ease: "power2.inOut",
						},
						{
							backgroundColor: "#000000",
							duration: 0.1,
							ease: "power2.inOut",
							onComplete: () => {
								section.classList.add("dark-mode");
								section.classList.remove("light-mode");
							},
						},
					);
				},
				onLeave: () => {
					gsap.fromTo(
						section,
						{ backgroundColor: "#000000", duration: 0.1, ease: "power2.inOut" },
						{
							backgroundColor: "#f8f9f7",
							duration: 0.1,
							ease: "power2.inOut",
							onComplete: () => {
								gsap.fromTo(
									section,
									{
										backgroundColor: "#f8f9f7",
										duration: 0.1,
										ease: "power2.inOut",
									},
									{
										backgroundColor: "#f8f9f7", // Dark mode color
										duration: 0.1,
										ease: "power2.inOut",
										onComplete: () => {
											section.classList.remove("dark-mode");
											section.classList.add("light-mode");
										},
									},
								);
							},
						},
					);
				},
				onLeaveBack: () => {
					gsap.fromTo(
						section,
						{ backgroundColor: "#000000", duration: 0.1, ease: "power2.inOut" },
						{
							backgroundColor: "#f8f9f7",
							duration: 0.1,
							ease: "power2.inOut",
							onComplete: () => {
								gsap.fromTo(
									section,
									{
										backgroundColor: "#f8f9f7",
										duration: 0.1,
										ease: "power2.inOut",
									},
									{
										backgroundColor: "#f8f9f7", // Dark mode color
										duration: 0.1,
										ease: "power2.inOut",
										onComplete: () => {
											section.classList.remove("dark-mode");
											section.classList.add("light-mode");
										},
									},
								);
							},
						},
					);
				},
			},
		});
	}, []);
  return (
		<section className="our-story pt-[104px] light-mode">
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

						<div className="story-btn-box flex items-center gap-8">
							<Link href="/our-approach" className="inline-block">
								<GlowButton glowBtnText="Our Approach" />
							</Link>
							<Link href="/contacts" className="inline-block">
								<GlowButton glowBtnText="Speak with us" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurStorySection;
