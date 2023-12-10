"use client";
import { ArrowDownIcons } from "@/icons";
import { Image, Link } from "@packages/packages";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Button from "../elements/button/button";

interface NavItem {
	path: string;
	name: string;
	hasSubmenu: boolean; // Add a property to indicate if an item has a submenu
}

const navItems: NavItem[] = [
	{
		path: "/",
		name: "Home",
		hasSubmenu: false, // No submenu for Home
	},
	{
		path: "/case-studies",
		name: "Case Studies",
		hasSubmenu: true, // Example: Case Studies has a submenu
	},
	{
		path: "/services",
		name: "Services",
		hasSubmenu: true, // Example: Services has a submenu
	},
	{
		path: "/our-approach",
		name: "Our Approach",
		hasSubmenu: true, // Example: Our Approach has a submenu
	},
	{
		path: "/features",
		name: "Features",
		hasSubmenu: true, // Example: Features has a submenu
	},
];

const Navbar = () => {
	const pathname = usePathname() || "/";
	const getHeaderBgColor = () => {
		// Define your conditions for different path-based background colors
		// pathname === '/faq' || pathname === '/our-approach
		if (pathname === "/faq") {
			return "bg-[#D9D9D917]";
		} else if (pathname === "/services") {
			return "filter-drop-bg bg-[#D9D9D917]";
		} else if (pathname === "/our-approach" || pathname === "/articles") {
			return "bg-[#424245]";
		} else if (
			pathname.includes("/our-approach/") ||
			pathname.includes("/articles/")
		) {
			return "bg-[#424245]";
		} else if (pathname.includes("/services/")) {
			return "bg-[#232323]";
		} else if (pathname.includes("/case-study/")) {
			return "absolute w-full left-0 right-0 top-6 sm:top-0 bg-transparent z-[9999]";
		} else {
			return "bg-transparent relative";
		}
	};
	return (
		<header
			className={`header-section pt-4  pb-[19px]  ${getHeaderBgColor()}`}>
			<div className="custom-container">
				<div className="header-wrapper relative flex items-center justify-between sm:block">
					<div className="header-brand-box flex items-center justify-between sm:w-full">
						<Image
							width={102}
							height={65}
							src="/images/white-brand-logo.svg"
							alt="brand logo image"
							className="w-[102px] h-[65px]"
						/>
						<button className="mobo-trigger-menu-btn hidden sm:block">
							<Image
								src="/images/icons/trigger-menu.svg"
								width="28"
								height="9"
								alt="header trigger btn icon"
							/>
						</button>
					</div>
					<nav className="navigation-navbar ">
						<ul className="navbar-nav flex items-center relative sm:hidden">
							{navItems.map((item, index) => {
								const isActive = item.path === pathname;
								return (
									<li key={item.path} className="navbar-nav-items relative">
										<Link
											href={item.path}
											className={`relative text-primary flex items-center gap-2 text-center text-body-text-3 font-primary font-normal leading-none mb-0 capitalize px-5 py-2 ${
												isActive ? "active-asign" : ""
											}`}>
											<span>{item.name}</span>
											{item.hasSubmenu && <ArrowDownIcons />}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					<Button
						btnText="0208 068 2102"
						btnVariant="pca-secondary-button sm:hidden border-4 border-secondary"
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
