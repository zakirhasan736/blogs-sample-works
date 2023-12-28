"use client";
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/elements/button/button';

interface TabData {
  id: string;
  title: string;
  content: {
    beforeList: string[];
    lists: string[];
    afterList: string[];
  };
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
		<div className="our-approach-tabs-sceens-page bg-[#D9D9D9] pt-8 pr-[57px] pb-[51px] sm:px-4 pl-5 rounded-[12px] flex items-start gap-0 overflow-hidden tabs-container sm:flex-col">
			<div className="our-approach-tabs-screen-left-cont pr-8 sm:pr-0 flex flex-col gap-3 w-full max-w-[360px] tabs pb-5 sm:mb-5 sm:border-b sm:border-b-black">
				{data.map(tab => (
					<a
						key={tab.id}
						id={tab.id}
						title={tab.title}
						className={`our-approad-tabs-items text-text-medium-4 sm:text-[22px]  text-left text-[#191919] font-primary font-semibold leading-none px-5 py-[43px] bg-tranparent sm:px-2 sm:py-6 ${
							tab.id === activeTab ? "active" : ""
						} rounded-[16px] max-w-[336px] h-[117px] w-full sm:h-auto sm:text-[23px] sm:max-w-[450px]`}>
						{tab.title}
					</a>
				))}
			</div>
			<div className="our-approach-tabs-screen-right-cont overflow-hidden pl-5 border-l border-l-neu-black w-full sm:border-none sm:pl-0">
				{data.map(tab => (
					<div
						key={tab.id}
						className={`our-approach-tabs-deails-info-box tab-content ${
							tab.id === activeTab ? "active-tab-content" : ""
						}`}
						id={`${tab.id}-content`}>
						<div className="our-approach-tabs-info-text-cont  pt-8 ">
							<h5 className="tabs-details-info-title mb-[18px] font-primary font-semibold leading-none text-left text-neu-black text-text-accend-3 sm:text-[26px]">
								{tab.title}
							</h5>
							{tab.content.beforeList.map((paragraph, index) => (
								<p
									key={index}
									className="text-text-medium-4 sm:text-[16px] text-left text-neu-black font-primary font-normal leading-normal mb-4">
									{paragraph}
								</p>
							))}
							<ul className="tabs-details-info-item ml-5">
								{tab.content.lists.map((listItem, index) => (
									<li
										key={index}
										className="tabs-details-info-list sm:text-[16px] list-disc text-text-medium-4 text-left text-neu-black font-primary font-normal leading-normal">
										{listItem}
									</li>
								))}
							</ul>
							{tab.content.afterList.map((paragraph, index) => (
								<p
									key={index}
									className="text-text-medium-4 text-left sm:text-[16px] text-neu-black font-primary font-normal leading-normal mb-4">
									{paragraph}
								</p>
							))}
							<Button
								btnText="Learn More"
								btnVariant="primary-button max-w-[172px] text-[24px] shadow-box-shadow-primary whitespace-nowrap mt-[30px] ml-auto sm:text-[18px] sm:ml-0"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurApproachTabs;
