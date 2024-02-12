"use client";
import { ArrowDubbleIcons } from "@/icons";
import { Image, Link } from "@packages/packages";
import MobileMenuData from "@data/MobileNavbar.json";
import { usePathname } from "next/navigation";
import Button from "../elements/button/button";
import MobileMenu from "./mobileNabar";
import { useEffect, useState, useRef } from "react";
import { TweenMax, Power2 } from "gsap";
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
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		} else if (pathname === "/services") {
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		} else if (pathname === "/our-approach") {
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		} else if (
			pathname.includes("/our-approach/") ||
			
			pathname.includes("/colour-craft") 
		) {
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		} else if (pathname.includes("/services/")) {
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		} else if (
			pathname.includes("/articles/") ||
			pathname.includes("/case-studies/")
		) {
			return "absolute w-full left-0 right-0 top-0 sm:top-0 bg-[#000000] z-[9999]";
		}else if (pathname.includes("/aboutus")) {
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		} else {
			return "absolute w-full left-0 right-0 bg-[#000000] top-0 sm:top-0";
		}
	};

	 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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


	const [showStickyNavbar, setShowStickyNavbar] = useState(true);
	const headerRef = useRef(null);

	useEffect(() => {
		let prevScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > 150) {
				setShowStickyNavbar(
					currentScrollY < prevScrollY || currentScrollY < 200,
				);
			} else {
				setShowStickyNavbar(false);
			}

			prevScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const header = headerRef.current;

		if (showStickyNavbar) {
			// Use GSAP to animate the header to a fixed position
			TweenMax.to(header, 0.3, { y: 0, ease: Power2.easeInOut });
		} else {
			// Only hide the header if the user is scrolling down
			if (window.scrollY > 150) {
				TweenMax.to(header, 0.3, {
					y: -header.offsetHeight,
					borderBottomWidth: "0px",
					ease: Power2.easeInOut,
				});
			}
		}
	}, [showStickyNavbar]);


	return (
		<header
			ref={headerRef}
			className={`header-section pt-4  pb-[19px]  z-[9999999]  ${getHeaderBgColor()}  ${
				showStickyNavbar ? "show" : "hide"
			}`}>
			<div className="custom-container md:px-6 sm:px-4">
				<div className="header-wrapper flex items-center justify-between  sm:block">
					<div className="header-brand-box pr-4 border-r border-[#FFFfff10] flex items-center justify-between sm:w-full">
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
										className="relative text-primary flex items-center gap-2 text-center text-[16px] laptop-m:text-[18px] font-tertery font-normal leading-none mb-0 capitalize px-6 py-2 md:text-[16px] sm:px-3 lg:px-3">
										<span className=" font-tertery">Home</span>
									</Link>
								</div>
							</li>
							<li className="navbar-nav-items">
								<div className="navbar-inner-link-box flex items-center gap-2">
									<Link
										href="/case-studies"
										className="relative text-primary flex items-center gap-2 text-center text-[16px] font-tertery font-normal leading-none mb-0 capitalize px-6 py-2 md:text-[16px] sm:px-3">
										<span className=" font-tertery">Case Studies</span>
									</Link>
									<span>
										<ArrowDubbleIcons />
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
										className="relative lg:px-3 text-primary laptop-m:text-[18px] flex items-center gap-2 text-center text-[16px] font-tertery font-normal leading-none mb-0 capitalize px-6 py-2 md:text-[16px] sm:px-3">
										<span className=" font-tertery">Services</span>
									</Link>
									<span>
										<ArrowDubbleIcons />
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
										className="relative lg:px-3 text-primary laptop-m:text-[18px] flex items-center gap-2 text-center text-[16px] font-tertery font-normal leading-none mb-0 capitalize px-6 py-2 md:text-[16px] sm:px-3">
										<span className=" font-tertery">Our Approach</span>
									</Link>
									<span>
										<ArrowDubbleIcons />
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
									<div className="relative cursor-pointer lg:px-3 text-primary laptop-m:text-[18px] flex items-center gap-2 text-center text-[16px] font-tertery font-normal leading-none mb-0 capitalize px-6 py-2 md:text-[16px] sm:px-3">
										<span className=" font-tertery">Features</span>
									</div>
									<span>
										<ArrowDubbleIcons />
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
					<Link
						className="w-full max-w-[159px] md:hidden"
						href="/contacts">
						<Button
							btnText="Book a Call"
							btnVariant={`pca-secondary-button header-button-cta capitalize text-[16px] laptop-m:text-[16px] md:hidden border-1 border-[#ffffff] ${
								pathname.includes("/articles/") ? "bg-secondary-2" : ""
							}`}
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
