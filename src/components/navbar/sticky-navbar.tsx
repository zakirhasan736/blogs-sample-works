"use client";
import React, { useEffect, useState } from "react";
import { Link } from "@packages/packages";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItem {
	path: string;
	name: string;
}

const navItems: NavItem[] = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/case-studies",
		name: "Case Studies",
	},
	{
		path: "/services",
		name: "Services",
	},
	{
		path: "/our-approach",
		name: "Our Approach",
	},
	{
		path: "/contacts",
		name: "Contact Us",
	},
];

const StickyNavbar: React.FC = () => {
	const [showStickyNavbar, setShowStickyNavbar] = useState(false);
	const pathname = usePathname() || "/";

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.scrollY > 270 &&
				pathname !== "/features/colour-craft" &&
				pathname !== "/privacy-policy" &&
				pathname !== "/terms-and-condition"
			) {
				setShowStickyNavbar(true);
			} else {
				setShowStickyNavbar(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [pathname]);

	const [hoveredPath, setHoveredPath] = useState<string | null>(null);
	let animationTimeout: NodeJS.Timeout;

	const handleMouseEnter = (itemPath: string) => {
		clearTimeout(animationTimeout);
		setHoveredPath(itemPath);
	};

	const handleMouseLeave = () => {
		animationTimeout = setTimeout(() => {
			setHoveredPath(null);
		}, 150);
	};

	const isPathIncluded = (path: string, includedPath: string) =>
		path.startsWith(includedPath);

	 const isActiveServices =
			pathname === "/services" || isPathIncluded(pathname, "/services/");

const isActiveApproach =
	pathname === "/our-approach" || isPathIncluded(pathname, "/our-approach/");

		const isActiveCaseStudies =
			pathname === "/case-study" || isPathIncluded(pathname, "/case-studies/");


	return (
		<div
			className={`sticky-navbar-wrapper px-6 sm:px-4 ${
				showStickyNavbar ? "show" : "hide"
			}`}>
			<ul className="sticky-nav-item fixed w-full bottom-10 left-0 right-0 z-[9999] bg-neu-white mx-auto px-2 py-[5px] rounded-full max-w-[550px] h-[51px] flex items-center justify-between">
				{navItems.map(item => {
					const isActive =
						item.path === pathname ||
						(item.path === "/case-studies" && isActiveCaseStudies) ||
						(item.path === "/our-approach" && isActiveApproach) ||
						(item.path === "/services" && isActiveServices);

					return (
						<li key={item.path} className="sticky-navbar-nav-items relative">
							<Link
								href={item.path}
								className={`relative text-black hover:text-neu-white py-[10px] px-[11px] sm:px-2 sm:text-[11px] whitespace-nowrap rounded-full text-[15px] text-center font-medium font-secondary capitalize leading-none ${
									isActive ? "active-asign" : ""
								}`}
								onMouseEnter={() => handleMouseEnter(item.path)}
								onMouseLeave={handleMouseLeave}>
								<span>{item.name}</span>
								{item.path === hoveredPath && (
									<motion.div
										className="absolute bottom-0 left-0 h-full rounded-full border border-[rgba(226,232,255,.1)] bg-[#dfdff50d] -z-10"
										layoutId="navbar"
										aria-hidden="true"
										style={{
											width: "100%",
										}}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 1 }}
										transition={{
											type: "tween",
											ease: "easeOut",
											duration: 0.15,
											bounce: 0.25,
											stiffness: 130,
											damping: 9,
										}}
									/>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default StickyNavbar;
