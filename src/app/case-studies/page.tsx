import { Image, Link } from "@packages/packages";
import React from "react";

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
		link: "/case-study/hult-ib-school",
	},
	{
		path: "/images/case-study-card-2.png",
		title: "AI & Environment",
		subtitle: "web design and Brand Assets",
		link: "/case-study/ai-and-humanity",
	},
	{
		path: "/images/case-study-card-3.png",
		title: "AI & Health",
		subtitle: "web design and Brand Assets",
		link: "/case-study/ai-and-humanity",
	},
	{
		path: "/images/case-study-card-4.png",
		title: "AI & Humanity",
		subtitle: "web design and Brand Assets",
		link: "/case-study/ai-and-humanity",
	},
	{
		path: "/images/case-study-card-5.png",
		title: "ZENBASE",
		subtitle: "web design and Brand Assets",
		link: "/case-study/zanbase",
	},
	{
		path: "/images/case-study-card-6.png",
		title: "village of general",
		subtitle: "web design and Brand Assets",
		link: "/case-study/village-of-genal",
	},
	{
		path: "/images/case-study-card-7.png",
		title: "NAEO",
		subtitle: "web design and Brand Assets",
		link: "/case-study/naeo",
	},
	{
		path: "/images/case-study-card-8.png",
		title: "KNIGHT’S ACADEMY",
		subtitle: "web design and Brand Assets",
		link: "/case-study/knights-academy",
	},
	{
		path: "/images/case-study-card-9.png",
		title: "AI & Future",
		subtitle: "web design and Brand Assets",
		link: "/case-study/ai-and-humanity",
	},
];

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