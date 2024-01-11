"use client";
import { ArrowDownIcons } from "@/icons";
import { Image, Link } from "@packages/packages";
import MobileMenuData from "@data/MobileNavbar.json";
import { usePathname } from "next/navigation";
import Button from "../elements/button/button";
import MobileMenu from "./mobileNabar";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import StudyMegaMenuData from "@data/megaMenu/StudyMegamenudata.json";
import ServiceMegaMenuData from "@data/megaMenu/ServicesMegamenudata.json";
import ApproachMegaMenuData from "@data/megaMenu/Approach.json";
import FeaturedMegaMenuData from "@data/megaMenu/FeatureMegamenudata.json";

const Navbar = () => {
	const pathname = usePathname() || "/";
	const getHeaderBgColor = () => {
		// Define your conditions for different path-based background colors
		// pathname === '/faq' || pathname === '/our-approach
		if (pathname === "/faq") {
			return "bg-[#000]";
		} else if (pathname === "/services") {
			return "bg-[#000]";
		} else if (pathname === "/our-approach" || pathname === "/articles") {
			return "bg-[#000]";
		} else if (
			pathname.includes("/our-approach/") ||
			pathname.includes("/articles/") ||
			pathname.includes("/colour-craft") 
		) {
			return "bg-[#000]";
		} else if (pathname.includes("/services/")) {
			return "bg-[#000]";
		} else if (pathname.includes("/case-studies/")) {
			return "absolute w-full left-0 right-0 top-6 sm:top-0 bg-transparent z-[9999]";
		} else {
			return "bg-transparent relative";
		}
	};
	 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

		const handleMobileMenuToggle = () => {
			setIsMobileMenuOpen(!isMobileMenuOpen);
		};
		const { StudyMenuItems, StudyFooterItems, StudyMegaMenuClass } =
			StudyMegaMenuData;
		const { ServiceMenuItems, ServiceFooterItems, ServiceMegaMenuClass } =
			ServiceMegaMenuData;
		const { ApproachMenuItems, ApproachFooterItems, ApproachMegaMenuClass } =
			ApproachMegaMenuData;
		const { FeatureMenuItems, FeatureFooterItems, FeatureMegaMenuClass } =
			FeaturedMegaMenuData;
	return (
		<header className={`header-section pt-4  pb-[19px]  ${getHeaderBgColor()}`}>
			<div className="custom-container md:px-6 sm:px-4">
				<div className="header-wrapper flex items-center justify-between sm:block">
					<div className="header-brand-box flex items-center justify-between sm:w-full">
						<Link href="/">
							<Image
								width={149}
								height={65}
								src="/images/white-brand-logo.svg"
								alt="brand logo image"
								className="w-[149px] h-[65px] lg:w-[102px]"
							/>
						</Link>
						<button
							className="mobo-trigger-menu-btn hidden sm:block"
							onClick={handleMobileMenuToggle}>
							<Image
								src="/images/icons/trigger-menu.svg"
								width="28"
								height="9"
								alt="header trigger btn icon"
							/>
						</button>
					</div>
					<nav className="navigation-navbar">
						<ul className="navbar-nav flex items-center sm:hidden">
							<li className="navbar-nav-items">
								<div className="navbar-inner-link-box flex items-center gap-2 lg:gap-0">
									<Link
										href="/"
										className="relative text-primary flex items-center gap-2 text-center text-[16px] laptop-m:text-[18px] font-primary font-normal leading-none mb-0 capitalize px-5 py-2 md:text-[16px] sm:px-3 lg:px-3">
										<span>HomeP</span>
									</Link>
								</div>
							</li>
							<li className="navbar-nav-items">
								<div className="navbar-inner-link-box flex items-center gap-2">
									<Link
										href="/case-studies"
										className="relative text-primary flex items-center gap-2 text-center text-[16px] font-primary font-normal leading-none mb-0 capitalize px-5 py-2 md:text-[16px] sm:px-3">
										<span>Case Studies</span>
									</Link>
									<span>
										<ArrowDownIcons />
									</span>
								</div>
								{/* =======megamenu */}
								<MegaMenu
									MegaMenuClass={StudyMegaMenuClass}
									items={StudyMenuItems}
									footerItems={StudyFooterItems}
								/>
							</li>
							<li className="navbar-nav-items">
								<div className="navbar-inner-link-box flex items-center gap-2 lg:gap-0">
									<Link
										href="/services"
										className="relative lg:px-3 text-primary laptop-m:text-[18px] flex items-center gap-2 text-center text-[16px] font-primary font-normal leading-none mb-0 capitalize px-5 py-2 md:text-[16px] sm:px-3">
										<span>Services</span>
									</Link>
									<span>
										<ArrowDownIcons />
									</span>
								</div>
								{/* =======megamenu */}
								<MegaMenu
									MegaMenuClass={ServiceMegaMenuClass}
									items={ServiceMenuItems}
									footerItems={ServiceFooterItems}
								/>
							</li>
							<li className="navbar-nav-items">
								<div className="navbar-inner-link-box flex items-center gap-2 lg:gap-0">
									<Link
										href="/our-approach"
										className="relative lg:px-3 text-primary laptop-m:text-[18px] flex items-center gap-2 text-center text-[16px] font-primary font-normal leading-none mb-0 capitalize px-5 py-2 md:text-[16px] sm:px-3">
										<span>Our Approach</span>
									</Link>
									<span>
										<ArrowDownIcons />
									</span>
								</div>
								{/* =======megamenu */}
								<MegaMenu
									MegaMenuClass={ApproachMegaMenuClass}
									items={ApproachMenuItems}
									footerItems={ApproachFooterItems}
								/>
							</li>
							<li className="navbar-nav-items">
								<div className="navbar-inner-link-box flex items-center gap-2 lg:gap-0">
									<div className="relative cursor-pointer lg:px-3 text-primary laptop-m:text-[18px] flex items-center gap-2 text-center text-[16px] font-primary font-normal leading-none mb-0 capitalize px-5 py-2 md:text-[16px] sm:px-3">
										<span>Features</span>
									</div>
									<span>
										<ArrowDownIcons />
									</span>
								</div>
								{/* =======megamenu */}
								<MegaMenu
									MegaMenuClass={FeatureMegaMenuClass}
									items={FeatureMenuItems}
									footerItems={FeatureFooterItems}
								/>
							</li>
						</ul>
					</nav>
					<Link className="w-full max-w-[159px] md:hidden" href="/contacts">
						<Button
							btnText="Contact Us"
							btnVariant="pca-secondary-button capitalize text-[16px] laptop-m:text-[16px] md:hidden border-4 border-secondary"
						/>
					</Link>
				</div>
				{/* mobile menu here to start */}
				<MobileMenu
					items={MobileMenuData}
					isOpen={isMobileMenuOpen}
					onMenuClose={() => setIsMobileMenuOpen(false)}
				/>
			</div>
		</header>
	);
};

export default Navbar;
