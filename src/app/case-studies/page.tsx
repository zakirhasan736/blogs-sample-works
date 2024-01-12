import { Image, Link } from "@packages/packages";
import React from "react";
import type { Metadata } from "next";
interface NavItem {
	path: string;
	title: string;
	subtitle: string;
	link: string;
}

const navItems: NavItem[] = [
	{
		path: "/images/case-study-card-1.png",
		title: "Hult Ib School",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/hult-ib-school",
	},
	{
		path: "/images/case-study-card-2.png",
		title: "AI & Humanity",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/ai-and-humanity",
	},
	{
		path: "/images/case-study-card-3.png",
		title: "AI & Humanity",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/ai-and-humanity",
	},
	{
		path: "/images/case-study-card-4.png",
		title: "AI & Humanity",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/ai-and-humanity",
	},
	{
		path: "/images/case-study-card-5.png",
		title: "ZENBASE",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/zenbase",
	},
	{
		path: "/images/case-study-card-6.png",
		title: "village of general",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/village-of-genal",
	},
	{
		path: "/images/case-study-card-7.png",
		title: "NAEO",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/naeo",
	},
	{
		path: "/images/case-study-card-8.png",
		title: "KNIGHT’S ACADEMY",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/knights-academy",
	},
	{
		path: "/images/case-study-card-9.png",
		title: "AI & Humanity",
		subtitle: "web design and Brand Assets",
		link: "/case-studies/ai-and-humanity",
	},
];
export const metadata: Metadata = {
	title: "Case Study",
	description:
		"Explore our latest case study showcasing our digital marketing expertise. See how we've driven success for brands with innovative strategies in SEO, Website Design and Development, and PPC. Learn from real-life examples of our transformative digital solutions.",
};
const CaseStudypage: React.FC = () => {
	return (
		<div className="case-study-section">
			<div className="case-study-wrapper grid grid-cols-12 gap-0">
				{navItems.map((item, index) => (
					<div
						key={index}
						className="case-study-card-item relative col-span-4 sm:col-span-6">
						<Image
							className="card-item-image w-full h-full"
							src={item.path}
							alt={`Case study card ${index + 1}`}
							width={769}
							height={769}
						/>
						<div className="case-study-cont-text absolute">
							<Link href={item.link}>
								<h3 className="case-study-card-title text-[25px] text-left text-[#ffffff] font-primary font-extrabold tracking-[3px] uppercase sm:text-[9px]">
									{item.title}
								</h3>
								<h5 className="case-study-card-subtitle text-[18px] text-left text-[#ffffff] font-primary font-extrabold tracking-[3px] uppercase sm:text-[9px]">
									{item.subtitle}
								</h5>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CaseStudypage;
