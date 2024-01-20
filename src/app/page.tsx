"use client";
import ArticleSectionVersionTwo from "@/components/article-section/article-section-v2";
import HomeBanner from "@/components/common/banner/home-banner-2";
import AboutUsSection from "@/components/component-v2/aboutus-section/aboutus";
import CTASectionVersionTwo from "@/components/component-v2/cta-section/cta-section-v2";
import ServicesSection from "@/components/component-v2/services-section/services";
import TestimonialsVersionTwo from "@/components/testimonials-section/testimonials-v2";
import ThemeSectionMode from "@/components/theme-mode/theme-section-mode";

const Home = () => {
	const testimonialsSliderData = [
		{
			testisliderModalImag: "/images/testimonials-slides-modal-img-1.png",
			testimonialsAutherBio: "Founder (Tsagiris Clinic)",
			testimonialsAutherName: "- Dr. John Tsagiris",
			testimonialsText:
				"My partnership with Particular Agency for our web application development has been nothing short of remarkable.",
		},
		{
			testisliderModalImag: "/images/testimonials-v2-img-2.jpg",
			testimonialsAutherBio: "knights Rushmoore Academy, Marketing Manager",
			testimonialsAutherName: "- Marcia Johnson",
			testimonialsText:
				"We collaborated with Particular for the redesign of our website. The team at Particular was fantastic.",
		},
		{
			testisliderModalImag: "/images/testimonials-v2-img-3.jpg",
			testimonialsAutherBio: "Leaders Rising, Founder",
			testimonialsAutherName: "- Susie Rushden",
			testimonialsText:
				"Since our collaboration began, we've experienced consistent improvement in our marketing outcomes, social media engagement, and brand visibility.",
		},
	];
	return (
		<>
			<div className="home-page-main-wrapper overflow-hidden">
				{/* home banner section */}
				<HomeBanner />
				{/* home banner section end*/}
				<AboutUsSection />
				{/* home testimonials section */}
				<TestimonialsVersionTwo TestiSlides={testimonialsSliderData} />
				{/* home testimonials section end*/}
				{/* home services section  */}
				<ServicesSection />
				{/* home services section  end*/}
				<ThemeSectionMode />
				{/* home article section */}
				<div className="article-and-cta-section">
					<CTASectionVersionTwo />
					<ArticleSectionVersionTwo />
				</div>
				{/* home article section end*/}
			</div>
		</>
	);
};

export default Home;
