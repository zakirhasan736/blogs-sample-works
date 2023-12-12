import ServicePageBanner from "@/components/common/banner/service-page-banner";
import ServiceGroupSlider from "./service-group-slider";

const Services = () => {
	const ServiceSwiperSlidesData = [
		{
			title: "Our Services",
			subtitle: "SEO",
			description:
				"Optimisation in your search engine efforts comes from understanding - what to assess, where to place your efforts and how to make an impact",
		},
		{
			title: "Our Services",
			subtitle: "WEB Design & development",
			description: "Particular Websites combine UX, Strategy and Interactivity to build high-speed, accessible sites that convert.", 
		},
		{
			title: "Our Services",
			subtitle: "PPC",
			description: "Our Paid Search advertising is about having the flexibility to adapt. We can adjust your ad campaigns quickly and easily to ensure you’re always up to speed.", 
		},
		{
			title: "Our Services",
			subtitle: "BRANDing",
			description: "Every brand possesses a distinctiveness akin to the individuality of a fingerprint. Demanding a personalized strategy as exceptional as the brand's own signature.", 
		},

		{
			title: "Our Services",
			subtitle: "vISUAL MEDIA",
			description: "Every brand possesses a distinctiveness akin to the individuality of a fingerprint. Demanding a personalized strategy as exceptional as the brand's own signature.",
		},{
			title: "Our Services",
			subtitle: "Social media",
			description: "At Particular, we understand that social media isn't just about posts and likes; it's about crafting a unique digital narrative.",
		},

	];
	return (
		<div className="services-wrapper-main-content">
			{/* service page banner section */}
			<ServicePageBanner slides={ServiceSwiperSlidesData} />
			{/* service page banner section end*/}

			{/* services details istems info card slide */}
			<section className="services-item-card-wrapper pb-[257px] pt-[133px]">
				<div className="custom-container">
					<div className="services-main-title-box pl-[50px] mb-20">
						<h2 className="services-main-title text-text--large text-left text-neu-white font-primary font-normal uppercase leading-[190%] tracking-[.8px]">
							services
						</h2>
						<span className="divider-spacer w-[61px] h-[1px] block bg-neu-white"></span>
					</div>
				</div>
				<div className="services-items-card-main-cont pl-[124px]">
					<ServiceGroupSlider />
				</div>
			</section>
			{/* services details istems info card slide end*/}
		</div>
	);
};

export default Services;
