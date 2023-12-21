import SectionTitleBoxTwo from "../common/sec-common-title-box/section-title-box-two";
import OurApproachTabs from "./our-approach-tabs";
import React from "react";
const tabsData = [
  {
    id: 'tab1',
    title: 'Free Thought',
    content: {
      beforeList: ['Paragraph before list for Attention To Detail...'],
      lists: ['List item 1', 'List item 2', 'List item 3'],
      afterList: ['Paragraph 1 for Attention To Detail...', 'Paragraph 2 for Attention To Detail...', 'Paragraph 3 for Attention To Detail...'],
    },
  },
  {
    id: 'tab2',
    title: 'Attention To Detail',
    content: {
      beforeList: ['Paragraph before list for Pioneering...'],
      lists: ['List item 1', 'List item 2', 'List item 3'],
      afterList: ['Paragraph 1 for Attention To Detail...', 'Paragraph 2 for Attention To Detail...', 'Paragraph 3 for Attention To Detail...'],
    },
  },
  {
    id: 'tab3',
    title: 'Pioneering',
    content: {
      beforeList: ['Paragraph before list for Free Thought...'],
      lists: ['List item 1', 'List item 2', 'List item 3'],
      afterList: ['Paragraph 1 for Attention To Detail...', 'Paragraph 2 for Attention To Detail...', 'Paragraph 3 for Attention To Detail...'],
    },
  },
];

const OurApproachParticulasSection: React.FC = () => {
  const titleData = {
    isColorText: true,
    title: 'Our Approach at ',
    colorText: "Particular",
    subtitle: ['We encourage Scrutiny and questioning.', 'Then redesign and polishing. And then more questioning. And more polishing.'],
    description:
      'This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.',
      classNames: 'mb-[258px] md:mb-16 sm:mb-14'
  };
  
  return (
    <section className="our-approach-particulas-section pt-[193px] md:pt-[65px] sm:pt-10">
    <div className="custom-container">

       <SectionTitleBoxTwo {...titleData} />
      <div className="our-approach-content-main-wrapper-box pl-[76px] pr-[63px] md:px-0">
        <OurApproachTabs data={tabsData} />
      </div>
    </div>
  </section>
  );
};

export default OurApproachParticulasSection;
