import ServicePageBanner from "@/components/common/banner/service-page-banner";
import ServiceGroupSlider from "./service-group-slider";


const Services = () => {

	const ServiceSwiperSlidesData = [
		{
			title: "SEO",
			subtitle: "Our Services",
			description:
				"Optimisation in your search engine efforts comes from understanding - what to assess, where to place your efforts and how to make an impact",
		},
		{
			title: "App Development",
			subtitle: "Our Services",
			description:
				"Particular Websites combine UX, Strategy and Interactivity to build high-speed, accessible sites that convert.",
		},
		{
			title: "PPC",
			subtitle: "Our Services",
			description:
				"Our Paid Search advertising is about having the flexibility to adapt. We can adjust your ad campaigns quickly and easily to ensure you’re always up to speed.",
		},
		{
			title: "Branding",
			subtitle: "Our Services",
			description:
				"Every brand possesses a distinctiveness akin to the individuality of a fingerprint. Demanding a personalized strategy as exceptional as the brand's own signature.",
		},
		{
			title: "Motion Design",
			subtitle: "Our Services",
			description:
				"Every brand possesses a distinctiveness akin to the individuality of a fingerprint. Demanding a personalized strategy as exceptional as the brand's own signature.",
		},
		{
			title: "Social media",
			subtitle: "Our Services",
			description:
				"At Particular, we understand that social media isn't just about posts and likes; it's about crafting a unique digital narrative.",
		},
	];

	const gallerSliderThumb = [
		{
			title: "SEO",
			modalTitle: "SEO",
			description:
				"Particular SEO: a foreign language made easy. Making Search Engine Optimisation friendly, so it works for you too.",
			btnText: "Discover more",
			servieItemLinks: "/services/seo",
		},
		{
			title: "App Development",
			modalTitle: "WEB DEV",
			description:
				"Feels like a web design agency, helps like a doctor.  We listen first, and then serve. Particular Websites combine SEO, Strategy and UX to build high-speed, accessible sites that convert even the most stern audiences.",
			btnText: "Discover more",
			servieItemLinks: "/services/app-development",
		},
		{
			title: "PPC",
			modalTitle: "PPC",
			description:
				"Social Networking. Reimagining your ideas around the concept of Social Media to engage your community of like-minded thinkers and fans.",
			btnText: "Discover more",
			servieItemLinks: "/services/ppc",
		},
		{
			title: "Branding",
			modalTitle: "Branding",
			description:
				"Particular Branding is where stories find their visual voice and sense of feeling. We listen, we create, and we define your brand's essence. Crafting distinctive identities that resonate and endure.",
			btnText: "Discover more",
			servieItemLinks: "/services/branding",
		},
		{
			title: "Motion Design",
			modalTitle: "Motion Design",
			description:
				"Humankind has spent millennia captivated by important stories told well. Create a pioneering story from your free-thought around your vision. We’ll handle the attention to detail.",
			btnText: "Discover more",
			servieItemLinks: "/services/motion-design",
		},
		{
			title: "Social Media",
			modalTitle: "Social Media",
			description:
				"Social Networking. Reimagining your ideas around the concept of Social Media to engage your community of like-minded thinkers and fans.",
			btnText: "Discover more",
			servieItemLinks: "/services/social-media",
		},
	];
	const GalleryPrevSlidesData = [
		{
			ModalTitle: "SEO",
			Title: "SEO",
			ModalImage: "/images/gif/Section01-1.gif",
		},
		{
			ModalTitle: "App Development",
			Title: "App Development",
			ModalImage: "/images/gif/Section03.gif",
		},
		{
			ModalTitle: "PPC",
			Title: "PPC",
			ModalImage: "/images/gif/section 3.gif",
		},
		{
			ModalTitle: "Branding",
			Title: "Branding",
			ModalImage: "/images/gif/Section02-1.gif",
		},
		{
			ModalTitle: "Motion Design",
			Title: "Motion Design",
			ModalImage: "/images/gif/section 3.gif",
		},
		{
			ModalTitle: "Social Media",
			Title: "Social Media",
			ModalImage: "/images/gif/section 3.gif",
		},
	];

	return (
		<div className="services-wrapper-main-content">
			{/* service page banner section */}
			<ServicePageBanner slides={ServiceSwiperSlidesData} />
			{/* service page banner section end*/}

			{/* services details istems info card slide */}
			<section className="services-item-card-wrapper pb-[160px] pt-[133px] md:pt-20 sm:pt-20 sm:pb-[120px]">
				<div className="custom-container">
					<div className="services-main-title-box pl-[50px] md:pl-0 max-w-[1430px] mx-auto">
						<h2 className="services-main-title text-[48px] sm:text-[32px] text-left text-neu-white font-primary font-normal uppercase leading-[190%] tracking-[.8px]">
							services
						</h2>
						<span className="divider-spacer w-[61px] h-[1px] block bg-neu-white"></span>
					</div>
				</div>
				<div className="services-items-card-main-cont pl-[124px] lg:pl-20 md:pl-5">
					<ServiceGroupSlider
						slides={gallerSliderThumb}
						GalleryPrevSlides={GalleryPrevSlidesData}
					/>
				</div>
			</section>
			{/* services details istems info card slide end*/}
		</div>
	);
};

export default Services;
