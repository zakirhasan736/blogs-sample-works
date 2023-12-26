import SectionTitleBoxTwo from "../common/sec-common-title-box/section-title-box-two";
import OurApproachTabs from "./our-approach-tabs";
import React from "react";
const tabsData = [
	{
		id: "tab1",
		title: "Free Thought",
		content: {
			beforeList: [
				"We unravel the barriers in the mind to innovate better approaches in enhancing customer experiences. This Particular philosophy is foundationally rooted in:",
			],
			lists: [
				"Open-minded Investigation",
				"Humility",
				"A Strong-willed mindset",
			],
			afterList: [
				"What does Free-thought look like at Particular? ",
				"Free-thought at Particular involves pursuing new and often non-conventional ideas for the continued expansion of what’s possible for our team and clients.",
				"It translates into a daily commitment to innovative thinking and a fresh approach to enhancing customer experiences. In practical terms, this philosophy encourages team members to approach challenges with open-minded investigation, putting aside preconceived notions and embracing humility in the face of new ideas.",
				" A strong-willed mindset is the driving force, encouraging our team and clients to persevere in the pursuit of better solutions. This approach fosters an environment where creative thinking and unconventional ideas are welcomed, enabling Particular to consistently innovate and deliver unique customer experiences.",
			],
		},
	},
	{
		id: "tab2",
		title: "Attention To Detail",
		content: {
			beforeList: ["We encourage questioning, scrutiny and refinement to ensure the highest quality in planning, organising and delivering work. This Particular philosophy is foundationally rooted in:"],
			lists: [
        "Precision & Accuracy", 
        "Objectivity & Balance in perspective and", 
        "Attachment to Reality."],
			afterList: [
				"What does Attention-to-Detail look like at Particular?",
				"Attention-to-Detail at Particular is a daily commitment to precision and excellence. In practice, this philosophy means that every task, project, and decision is approached with a meticulous focus on accuracy, objectivity, and a strong connection to reality - this usually starts with the project brief and onboarding. ",
				"The Onboarding and Account Management processes are the most crucial part of what we do because it’s where we learn about the client, top to bottom. Team members are encouraged to question assumptions, scrutinize details, and continually refine their work, ensuring that nothing is taken for granted. ",
				"This rigorous attention to detail results in high-quality planning, organisation, and delivery of work, and it reflects the foundational values of Particular,",
			],
		},
	},
	{
		id: "tab3",
		title: "Pioneering",
		content: {
			beforeList: ["We step forward into new thinking territories and areas of operation with boldness, using what’s known already to inform our direction. This Particular philosophy is foundationally rooted in:"],
			lists: [
        "Competitiveness towards Excellence",
        "Decisiveness and",
        "Stroppiness for Innovation"
        ],
			afterList: [
				"What does Pioneering look like at Particular?",
				"Our team, all of our people included, are encouraged to spend their time at Particular in touch with what’s going on in the outside world. The focus should remain on how our market is developing and also how technology is developing in the world, so that we as a team can take steps to move forward in new, expansive ideas for our larger vision at all times. ",
				"The Particular brand was initially built on the back of a single music studio, and has since ballooned into our digital and creative marketing agency in January 2023. As a team, we’ve rebuilt our ambitions beyond music around serving a more diverse range of client objectives and building more sustainable income for them in the process.",
			],
		},
	},
];

const OurApproachParticulasSection: React.FC = () => {
  const titleData = {
		isColorText: true,
		title: "Our Approach at ",
		colorText: "Particular",
		subtitle: [
			"We encourage Scrutiny and questioning.",
			"Then redesign and polishing. And then more questioning. And more polishing.",
		],
		description:
			"This meticulous approach is in both why and how we innovate on the services offered at Particular. We turn the data we get from our better-delivery approach in data-based marketing solutions. London and beyond.",
		classNames: "mb-[240px] md:mb-16 sm:mb-14",
	};
  
  return (
    <section className="our-approach-particulas-section pt-[193px] md:pt-[65px] sm:pt-10">
    <div className="custom-container max-w-[1430px]">

       <SectionTitleBoxTwo {...titleData} />
      <div className="our-approach-content-main-wrapper-box md:px-0">
        <OurApproachTabs data={tabsData} />
      </div>
    </div>
  </section>
  );
};

export default OurApproachParticulasSection;
