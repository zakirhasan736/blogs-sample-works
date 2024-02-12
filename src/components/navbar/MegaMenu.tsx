import React from "react";
import Link from "next/link";

interface SubMenuItem {
	title?: string;
	path: string;
}

interface MegaMenuItem {
	title?: string;
	path: string;
	subItems?: SubMenuItem[];
}
interface FooterItem {
	title?: string;
	path: string;
}

interface MegaMenuProps {
	items: MegaMenuItem[];
	footerItems: FooterItem[];
	MegaMenuClass: any;
}
const MegaMenu: React.FC<MegaMenuProps> = ({
	items,
	footerItems,
	MegaMenuClass,
}) => {
	return (

		<div className="megamenu-wrapper-content z-[9999] absolute top-[100px] left-0 right-0 mx-auto pt-14 bg-[#0A0A0A] border-t border-opcity-color-1">
			<div
				className={`mega-menu-main text-right px-8 max-w-[1687px] left-0 right-0 mx-auto w-full flex items-start justify-center gap-20 pb-12 laptop-m:gap-10 lg:gap-7 ${MegaMenuClass}`}>

				{items?.map((menuItem, index) => (
					<ul className="mega-menu-item-box text-left" key={index}>
						<li className="mega-menu-item-list mb-3">
							<Link href={menuItem?.path}>
								<span className="text-[16px] text-left text-neu-white font-tertery font-bold">
									{menuItem?.title}
								</span>
							</Link>
							<ul className="mega-menu-sub-item">
								{menuItem?.subItems?.map((subMenuItem, subIndex) => (
									<li className="mega-menu-sub-item-list mb-3" key={subIndex}>
										<Link href={subMenuItem?.path}>
											<span className="text-[16px] text-left text-neu-white font-tertery font-normal">
												{subMenuItem?.title}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</li>
					</ul>
				))}
			</div>
			{footerItems && footerItems?.length > 0 && (
				<div className="megamenu-foot py-[13px] border-t-2 border-t-opcity-color-1 px-8">
					<ul className="megamenu-foot-item flex items-center max-w-[1687px] left-0 right-0 mx-auto w-full">
						{footerItems &&
							footerItems?.map((footerItem, index) => (
								<li
									className="megamenu-foot-item-list w-full max-w-[150px] border-r border-r-[#fff] text-[16px] text-center text-neu-white font-tertery font-normal leading-none"
									key={index}>
									<Link href={footerItem?.path}>
										<span>{footerItem?.title}</span>
									</Link>
								</li>
							))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default MegaMenu;
