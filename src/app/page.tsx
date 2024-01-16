"use client";
import AboutSection from "@/components/about-section/about-section";
import ArticlesSection from "@/components/article-section/articles-section";
import CaseStudySlider from "@/components/case-study-slider/case-study-slider";
import ClientSection from "@/components/client-section/ClientSection";
import HomeBanner from "@/components/common/banner/home-banner-2";
import GuidedSection from "@/components/guided-section/guided-section";
import ParticularSecModal from "@/components/particular-sec-modal/particular-sec-modal";
import TestimonialsSection from "@/components/testimonials-section/testimonials-section";
import clientsData from "@data/home-page-data/clients.json";
import SliderItemsData from "@data/home-page-data/home-case-study-slider.json";

const Home = () => {
	const testimonialsSliderData = [
		{
			title: "Heat Centre",
			description:
				"We collaborated with Particular for the redesign of our website. The team at Particular was fantastic, efficiently handling last-minute demands and employing a comprehensive design process. I strongly endorse Particular for anyone in need of website services.",
		},
		{
			title: "Anantara",
			description:
				"Since our collaboration began, we've experienced consistent improvement in our marketing outcomes, social media engagement, and brand visibility. I highly recommend Particular to any expanding business in search of a dependable marketing ally.",
		},
		{
			title: "Knight's Academy",
			description:
				"Our partnership with Particular Agency for our web application development has been nothing short of remarkable. Their team's expertise in crafting intuitive and engaging web apps has significantly elevated our online presence. The team's attention to detail, innovative approach, and responsiveness to our needs have been exceptional.",
		},
		{
			title: "Heat Centre",
			description:
				"We collaborated with Particular for the redesign of our website. The team at Particular was fantastic, efficiently handling last-minute demands and employing a comprehensive design process. I strongly endorse Particular for anyone in need of website services.",
		},
		{
			title: "Anantara",
			description:
				"Since our collaboration began, we've experienced consistent improvement in our marketing outcomes, social media engagement, and brand visibility. I highly recommend Particular to any expanding business in search of a dependable marketing ally.",
		},
	];
	return (
		<div className="home-page-main-wrapper overflow-hidden">
			{/* home banner section */}
			<HomeBanner />
			{/* home banner section end*/}
			{/* client section  */}
			{/* <ClientSection clients={clientsData} /> */}
			{/* client section  end*/}
			{/* home about section  */}
			<AboutSection />
			{/* home about section  end*/}

			{/* home guided section */}
			<GuidedSection />
			{/* home guided section end*/}
			{/* home particular modal section */}
			<ParticularSecModal />
			{/* home particular modal section end*/}

			{/* case study slider section */}
			<CaseStudySlider slides={SliderItemsData} />
			{/* case study slider section end*/}

			{/* home article section */}
			<ArticlesSection />
			{/* home article section end*/}

			{/* home testimonials section */}
			<TestimonialsSection slides={testimonialsSliderData} />
			{/* home testimonials section end*/}
		</div>
	);
};

export default Home;
