"use-client";
import { useEffect, useState } from "react";
import { ArrowDownIcons } from "@/icons";
import { Image, Link } from "@packages/packages";

interface MenuItem {
	path: string;
	name: string;
	dropdownItems?: {
		path: string;
		name: string;
	}[];
}

interface MobileMenuProps {
	items: MenuItem[];
	isOpen: boolean;
	onMenuClose: () => void;
}

// Define the MobileMenu component
const MobileMenu: React.FC<MobileMenuProps> = ({
	isOpen,
	onMenuClose,
	items,
}) => {
	const [activeMenu, setActiveMenu] = useState<number | null>(null);

	useEffect(() => {
		// Close the menu when the isOpen state changes
		if (!isOpen) {
			setActiveMenu(null);
		}
	}, [isOpen]);

	// Function to handle menu item click
	const handleMenuClick = (index: number, path: string) => {
		setActiveMenu(activeMenu === index ? null : index);
		onMenuClose(); // Close the menu when a navigation item is clicked
	};

	return (
		<div
			className={`header-mobile-menu-wrapper hidden sm:flex flex-col pb-10 pt-[22px] fixed top-0 left-0 bg-[#161617] z-[99999999] px-6 h-[100vh] w-full ${
				isOpen ? "MobileMenuopen" : "MobileMenuclosed"
			}`}>
			<div className="mobile-menu-header">
				<div className="header-brand-box flex items-center justify-between sm:w-full">
					<Image
						width={102}
						height={65}
						src="/images/white-brand-logo.svg"
						alt="brand logo image"
						className="w-[102px] h-[65px]"
					/>
					<button
						className="mobo-trigger-close-btn hidden sm:block"
						onClick={onMenuClose}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none">
							<path
								d="M1 1L20 20M1 20L20 1"
								stroke="white"
								strokeWidth="2" // Use 'strokeWidth' instead of 'stroke-width'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="mobile-menu-main mt-14">
				<ul className="mobile-navbar-nav">
					{items.map((item, index) => (
						<li
							className={`navbar-nav-items relative ${
								activeMenu === index ? "active-menu" : ""
							}`}
							key={index}>
							<div className="navbar-inner-link-box flex items-center gap-6">
								{/* Use Next.js Link for navigation */}
								<Link
									href={item.path}
									className={`relative font-tertery font-medium text-[23px] text-left text-neu-white leading-none trancking-[2.28px] mb-5`}>
									<span onClick={() => handleMenuClick(index, item.path)}>
										{item.name}
									</span>
								</Link>
								<span onClick={() => setActiveMenu(index)}>
									{item.dropdownItems && <ArrowDownIcons />}
								</span>
							</div>

							{item.dropdownItems && activeMenu === index && (
								<ul className="mobile-drop-down-menu pl-3">
									{item.dropdownItems.map((subItem, subIndex) => (
										<li
											className="mobile-drop-menu-item text-[18px] mb-5 text-left text-[#8e8e8e] font-tertery font-bold leading-none"
											key={subIndex}>
											{/* Use Next.js Link for navigation */}
											<Link href={subItem.path}>
												<span onClick={onMenuClose}>{subItem.name}</span>
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
			<div className="mobile-menu-footer mt-auto">
				<h2 className="mobile-menu-title font-primary font-medium text-[26px] text-left text-neu-white leading-normal trancking-[2.28px] max-w-[320px]">
					Anything in{" "}
					<span className="color-text text-secondary-2 text-left text-[42px] font-primary font-bold capitalize">
						Particular?
					</span>
				</h2>
			</div>
		</div>
	);
};

export default MobileMenu;
