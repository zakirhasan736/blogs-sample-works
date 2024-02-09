import { Image, Link } from "@packages/packages";
import React from "react";
import type { Metadata } from "next";
import ArticleSectionVersionTwo from "@/components/article-section/article-section-v2";
import LatestBlogs from "@data/blogs/short-blog-data.json";
import GlowButton from "@/components/elements/button/glow-button";
interface NavItem {
	path: string;
	title: string;
	subtitle: string;
	link: string;
}

// const navItems: NavItem[] = [
// 	{
// 		path: "/images/case-study-card-1.png",
// 		title: "Hult Ib School",
// 		subtitle: "web design and Brand Assets",
// 		link: "/case-studies/hult-ib-school",
// 	},
// 	{
// 		path: "/images/case-study-card-2.png",
// 		title: "AI & Humanity",
// 		subtitle: "web design and Brand Assets",
// 		link: "/case-studies/ai-and-humanity",
// 	},
	
// 	{
// 		path: "/images/case-study-card-5.png",
// 		title: "ZENBASE",
// 		subtitle: "web design and Brand Assets",
// 		link: "/case-studies/zenbase",
// 	},
// 	{
// 		path: "/images/case-study-card-6.png",
// 		title: "village of general",
// 		subtitle: "web design and Brand Assets",
// 		link: "/case-studies/village-of-genal",
// 	}
// ];
export const metadata: Metadata = {
	title: "Case Study",
	description:
		"Explore our latest case study showcasing our digital marketing expertise. See how we've driven success for brands with innovative strategies in SEO, Website Design and Development, and PPC. Learn from real-life examples of our transformative digital solutions.",
};
const CaseStudypage: React.FC = () => {
	// Sort the latest blogs by date in descending order
	const sortedLatestBlogs = LatestBlogs.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// Select the latest three blogs
	const latestThreeBlogs = sortedLatestBlogs.slice(0, 3);
	const testimonialsSliderData = [
		{
			testisliderModalImag: "/images/testimonials-slides-modal-img-1.png",
			testimonialsAutherBio: "Dr. John Tsagiris, Founder",
			testimonialsAutherName: "- Dr. John Tsagiris",
			testimonialsText:
				"My partnership with Particular Agency for our web application development has been nothing short of remarkable.",
		},
		{
			testisliderModalImag: "/images/testimonials-v2-img-2.jpg",
			testimonialsAutherBio: "Rushmoor Knights Academy, Founder",
			testimonialsAutherName: "- Stephen Diaper",
			testimonialsText:
				"We collaborated with Particular for the Design and Launch of our web Platform. The team at Particular was fantastic.",
		},
		{
			testisliderModalImag: "/images/testimonials-v2-img-3.jpg",
			testimonialsAutherBio: "Leaders Rising, Founder",
			testimonialsAutherName: "- Susie Rushden",
			testimonialsText:
				"Since our collaboration began, we've experienced consistent improvement in our marketing outcomes, social media engagement, and brand visibility.",
		},
	];
	return (
		<div className="case-study-page-wrapper pt-[190px]">
			<div className="case-study-section pb-[140px] md:pb-20 sm:pb-16">
				<div className="container max-w-[1199px]">
					<div className="case-study-wrapper">
						<div className="case-study-content-box mb-[62px]">
							<h1 className="text-center">
								Unlocking Success Stories: Dive into Our Case Studies for
								Inspiring Solutions and Proven Results.
							</h1>
							<p className="banner-desc mt-[25px] text-[16px] text-center text-neu-white font-tertery font-semibold italic leading-[24px]">
								‘’To Be The Biggest Catalyst To{" "}
								<span className="underline">Web</span> and{" "}
								<span className="underline">App</span> Experiences To Everyone,
								Everywhere.’’
							</p>
						</div>

						<div className="cs-thumbs text-center grid grid-cols-12 gap-x-5 gap-y-10">
							<div className="cs-card col-span-6 sm:col-span-full">
								<a href="/case-studies/hult-ib-school">
									<Image
										width={549}
										height={377}
										className="h-[377px] md:h-[275px]  object-cover"
										src="/images/case-study-card-1.png"
										alt="case study modal image"
									/>
								</a>
								<div>
									<a href="/case-studies/hult-ib-school">
										<h5>Hult IB School</h5>
									</a>
									<span></span>
								</div>
								<p>
									Crafting a web design and Paid Ads solution to help deliver on
									Hult Business School’s ongoing desire for increased student
									enrolment.
								</p>
							</div>
							<div className="cs-card col-span-6 sm:col-span-full">
								<a href="/case-studies/ai-and-humanity">
									<Image
										width={549}
										height={377}
										className="h-[377px] md:h-[275px]  object-cover"
										src="/images/case-study-card-4.png"
										alt="case study modal image"
									/>
								</a>
								<div>
									<a href="/case-studies/ai-and-humanity">
										<h5>AI and Humanity</h5>
									</a>
									<span></span>
								</div>
								<p>
									Design goal: to symbolize the peaceful coexistence of AI and
									humans, making the campaign's message accessible to a modern,
									quickly changing audience.
								</p>
							</div>
							<div className="cs-card col-span-6 sm:col-span-full">
								<a href="/case-studies/zenbase">
									<Image
										width={549}
										height={377}
										className="h-[377px] md:h-[275px]  object-cover"
										src="/images/case-study-card-5.png"
										alt="case study modal image"
									/>
								</a>
								<div>
									<a href="/case-studies/zenbase">
										<h5>Zenbase</h5>
									</a>
									<span></span>
								</div>
								<p>
									Building an intentionally inclusive UX/UI solution to bolster
									Zenbase’s delivery of a financial health solutions to renters
									and property managers.
								</p>
							</div>
							<div className="cs-card col-span-6 sm:col-span-full">
								<a href="/case-studies/village-of-genal">
									<Image
										width={549}
										height={377}
										className="h-[377px] md:h-[275px]  object-cover"
										src="/images/case-study-card-8.png"
										alt="case study modal image"
									/>
								</a>
								<div>
									<a href="/case-studies/village-of-genal">
										<h5>Village of Genal</h5>
									</a>
									<span></span>
								</div>
								<p>
									The Village of Genalguacil's transformation serves as a
									testament to the power of strategic branding and visual
									identity.
								</p>
							</div>
						</div>
						<Link
							href="/articles"
							className="block  mt-[65px] mx-auto max-w-[130px]">
							<GlowButton glowBtnText="Load More..." />
						</Link>
					</div>
				</div>
			</div>
			<ArticleSectionVersionTwo
				latestBlogs={latestThreeBlogs}
				ShortBlogs={true}
			/>
		</div>
	);
};

export default CaseStudypage;
