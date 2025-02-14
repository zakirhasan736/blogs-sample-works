"use client";
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/elements/button/button';
import Link from 'next/link';
import GlowButton from '../elements/button/glow-button';

interface TabData {
	id: string;
	title: string;
	content: {
		beforeList: string[];
		lists: string[];
		afterList: string[];
	};
	ItemsLinks:string;
}

const OurApproachTabs: React.FC<{ data: TabData[] }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const allLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);
  const allTabsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const activeTabRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const allLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.tabs a');
    const allTabs: NodeListOf<HTMLElement> = document.querySelectorAll('.tab-content');

    allLinksRef.current = allLinks;
    allTabsRef.current = allTabs;

    const shiftTabs = (linkId: string) => {
      allTabs.forEach((tab, i) => {
        const isActiveTab = tab.id.includes(linkId);
        let translateXValue = 0;

        if (isActiveTab) {
          translateXValue = 0; // Current tab
        } else if (i < allTabs.length - 1 && allTabs[i + 1].id.includes(linkId)) {
          translateXValue = 100; // Next tab
        } else {
          translateXValue = -100; // Previous tab
        }

        tab.style.transform = `translateX(${translateXValue}%)`;
      });
    };

    const handleTabClick = (elem: HTMLAnchorElement) => {
      const linkId = elem.id;

      allLinks.forEach((link) => {
        const isCurrentTab = link === elem;
        link.classList.toggle('active', isCurrentTab);

        const container = link.closest('.our-approad-tabs-items');
        if (container) {
          container.classList.toggle('active', isCurrentTab);
        }
      });

      if (activeTabRef.current) {
        activeTabRef.current.classList.remove('active-tab-content');
      }

      shiftTabs(linkId);

      const newActiveTab = document.getElementById(`${linkId}-content`);
      if (newActiveTab) {
        newActiveTab.classList.add('active-tab-content');
        activeTabRef.current = newActiveTab;
        setActiveTab(linkId);
      }
    };

    const defaultTab = allLinks[0];
    if (defaultTab) {
      defaultTab.classList.add('active');
      shiftTabs(defaultTab.id);
      activeTabRef.current = document.getElementById(`${defaultTab.id}-content`);
      if (activeTabRef.current) {
        activeTabRef.current.classList.add('active-tab-content');
        setActiveTab(defaultTab.id);
      }
    }

    // Add transition property to tab-content elements for smooth transitions
    allTabs.forEach((tab) => {
      tab.style.transition = 'transform 0.3s ease-in-out'; // Adjust the duration and timing function as needed
    });

    allLinks.forEach((elem) => {
      elem.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of anchor links
        handleTabClick(elem);
      });
    });
  }, []);

  return (
		<div className="our-approach-tabs-sceens-page rounded-[12px] flex items-start gap-0 overflow-hidden tabs-container sm:flex-col">
			<div className="our-approach-tabs-screen-left-cont pr-7 sm:pr-0 flex flex-col gap-3 w-full max-w-[330px] tabs pb-5 sm:mb-5 ">
				{data.map(tab => (
					<>
						<a
							key={tab.id}
							id={tab.id}
							title={tab.title}
							className={`our-approad-tabs-items text-[22px] sm:text-[18px]  text-left text-[#fff] font-tertery font-bold capitalize leading-none px-8 py-[39px] bg-tranparent sm:px-4 sm:py-6 ${
								tab.id === activeTab ? "active" : ""
							} rounded-[16px] max-w-[336px] h-[108px] w-full sm:h-auto sm:text-[23px] sm:max-w-[450px]`}>
							{tab.title}
							<span
								className={`h-[3px] w-[34px] bg-[#000] mt-1 ${tab.id === activeTab ? "block" : "hidden"}`}></span>
						</a>
					</>
				))}
			</div>
			<div className="our-approach-tabs-screen-right-cont overflow-hidden rounded-[10px] border border-[#ffffff] pl-9 pb-9 pt-8 pr-8 w-full sm:px-6 sm:py-8">
				{data.map(tab => (
					<div
						key={tab.id}
						className={`our-approach-tabs-deails-info-box tab-content ${
							tab.id === activeTab ? "active-tab-content" : ""
						}`}
						id={`${tab.id}-content`}>
						<div className="our-approach-tabs-info-text-cont">
							<h5 className="tabs-details-info-title mb-[14px] font-tertery font-extrabold uppercase leading-none text-left text-neu-white opacity-50 text-[14px] sm:text-[14px]">
								{tab.title}
							</h5>
							{tab.content.beforeList.map((paragraph, index) => (
								<p
									key={index}
									className="text-[16px] sm:text-[16px] text-left text-[#fff] font-tertery font-normal leading-normal mb-4">
									{paragraph}
								</p>
							))}
							<ul className="tabs-details-info-item ml-5">
								{tab.content.lists.map((listItem, index) => (
									<li
										key={index}
										className="tabs-details-info-list sm:text-[16px] list-disc text-[16px] text-left text-[#fff] font-tertery font-normal leading-normal">
										{listItem}
									</li>
								))}
							</ul>
							{tab.content.afterList.map((paragraph, index) => (
								<p
									key={index}
									className="text-[16px] text-left sm:text-[16px] text-[#fff] font-tertery font-normal leading-normal mb-4">
									{paragraph}
								</p>
							))}
							<Link href={tab.ItemsLinks} className='flex justify-end'>
								<GlowButton glowBtnText="Explore" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurApproachTabs;
