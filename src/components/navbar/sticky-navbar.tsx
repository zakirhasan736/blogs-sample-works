"use client";
import { Link } from "@packages/packages";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
		path: "/features",
		name: "Features",
	},
];
const StickyNavbar = () => {
	const [showStickyNavbar, setShowStickyNavbar] = useState(false);
	const pathname = usePathname() || "/";

	useEffect(() => {
		const handleScroll = () => { 
			if (window.scrollY > window.innerHeight) {
				setShowStickyNavbar(true);
			} else {
				setShowStickyNavbar(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`sticky-navbar-wrapper px-6 sm:px-4 ${showStickyNavbar ? "show" : "hide"}`}>
			<ul className="sticky-nav-item fixed w-full bottom-10 left-0 right-0 z-[9999] bg-neu-white mx-auto px-2 py-[5px] rounded-full max-w-[550px] h-[51px] flex items-center justify-between">
				{navItems.map((item, index) => {
					const isActive = item.path === pathname;
					return (
						<li key={item.path} className="sticky-navbar-nav-items relative">
							<Link
								href={item.path}
								className={`relative text-black hover:text-neu-white hover:bg-black py-[10px] px-[11px] whitespace-nowrap rounded-full text-[15px] text-center font-medium font-secondary capitalize leading-none  ${
									isActive ? "active-asign" : ""
								}`}>
								<span>{item.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default StickyNavbar;
