"use client";
import AboutSection from "@/components/about-section/about-section";
import ArticlesSection from "@/components/article-section/articles-section";
import CaseStudySlider from "@/components/case-study-slider/case-study-slider";
import ClientSection from "@/components/client-section/ClientSection";
import HomeBanner from "@/components/common/banner/home-banner";
import GuidedSection from "@/components/guided-section/guided-section";
import ParticularSecModal from "@/components/particular-sec-modal/particular-sec-modal";
import TestimonialsSection from "@/components/testimonials-section/testimonials-section";
import clientsData from "@data/home-page-data/clients.json";
import SliderItemsData from "@data/home-page-data/home-case-study-slider.json";


const Home = () => {

	const testimonialsSliderData = [
		{
			title: "Anantara",
			description:
				"Anantara, the agency for global luxury travel experiences, hired Particular to rebrand into a seamless travel-booking experience for their worldwide pool of users.",
		},
		{
			title: "Knights Academy",
			description:
				"Knights Academy, the agency for global luxury travel experiences, hired Particular to rebrand into a seamless travel-booking experience for their worldwide pool of users.",
		},
		{
			title: "Heat Centre",
			description:
				"Heat Centre, the agency for global luxury travel experiences, hired Particular to rebrand into a seamless travel-booking experience for their worldwide pool of users.",
		},
		{
			title: "Anantara",
			description:
				"Anantara, the agency for global luxury travel experiences, hired Particular to rebrand into a seamless travel-booking experience for their worldwide pool of users.",
		},
		{
			title: "Knights Academy",
			description:
				"Knights Academy, the agency for global luxury travel experiences, hired Particular to rebrand into a seamless travel-booking experience for their worldwide pool of users.",
		},
		{
			title: "Heat Centre",
			description:
				"Heat Centre, the agency for global luxury travel experiences, hired Particular to rebrand into a seamless travel-booking experience for their worldwide pool of users.",
		},
	];
	return (
		<div className="home-page-main-wrapper overflow-hidden">
			{/* home banner section */}
			<HomeBanner />
			{/* home banner section end*/}
			{/* client section  */}
			<ClientSection clients={clientsData} />
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
