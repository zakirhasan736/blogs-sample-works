"use client";
import AboutSection from "@/components/about-section/about-section";
import ArticlesSection from "@/components/article-section/articles-section";
import CaseStudySlider from "@/components/case-study-slider/case-study-slider";
import HomeBanner from "@/components/common/banner/home-banner";
import GuidedSection from "@/components/guided-section/guided-section";
import ParticularSecModal from "@/components/particular-sec-modal/particular-sec-modal";
import TestimonialsSection from "@/components/testimonials-section/testimonials-section";


const Home = () => {
	const SliderItemsData = [
		{
			sliderModalImage: "/images/case-study-slider-item-img-1.jpg",
			sliderSubTitle: "Client Case Studies",
			sliderTitle: "Village of Genal",
			sliderTagsCategory: "Website Design",
		},
		{
			sliderModalImage: "/images/case-study-slider-item-img-2.jpg",
			sliderSubTitle: "Client Case Studies",
			sliderTitle: "Zenbase ",
			sliderTagsCategory: "Website Design",
		},
		{
			sliderModalImage: "/images/case-study-slider-item-img-3.jpg",
			sliderSubTitle: "Client Case Studies",
			sliderTitle: "AI & Humanity",
			sliderTagsCategory: "Website Design",
		},
		{
			sliderModalImage: "/images/case-study-slider-item-img-4.png",
			sliderSubTitle: "Client Case Studies",
			sliderTitle: "Hult IB School",
			sliderTagsCategory: "Website Design",
		},
	];

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
