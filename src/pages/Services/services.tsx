const Services = () => {
	return (
		<div className="services-wrapper-main-content">
			{/* service page banner section */}
			<section className="service-page-banne pt-[110px]r pb-[210px] bg-neu-gray-black-2 h-[926px]">
				<div className="custom-container h-full">
					<div className="services-banner-wrraper-main flex items-end justify-start pr-[57px] pl-20 h-full">
						<div className="services-banner-content-box">
							{/* =========== */}
							<div className="banner-services-slide-item">
								<h1 className="service-banner-title text-secondary-heading text-left text-neu-white font-primary font-bold leading-none tracking-[3.8px]">
									Our Services
								</h1>
								<h5 className="service-subtitle gap-6 flex items-center mt-[43px] text-text-medium text-left text-neu-white font-primary font-medium tracking-[5.65px] uppercase leading-none">
									<span className="divider-shape h-[1px] w-[97px] block bg-neu-white"></span>{" "}
									SEO
								</h5>
								<p className="service-desc mt-[43px] text-body-text text-left text-neu-white font-primary font-medium leading-normal max-w-[695px] w-full">
									Optimisation in your search engine efforts comes from
									understanding - what to assess, where to place your efforts
									and how to make an impact
								</p>
							</div>
							{/* =========== */}
						</div>
					</div>
				</div>
			</section>
			{/* service page banner section end*/}

			{/* services details istems info card slide */}
			<section className="services-item-card-wrapper pb-[257px] pt-[133px]">
				<div className="custom-container">
					<div className="services-main-title-box pl-[50px]">
						<h2 className="services-main-title text-text--large text-left text-neu-white font-primary font-normal uppercase leading-[190%] tracking-[.8px]">
							services
						</h2>
						<span className="divider-spacer w-[61px] h-[1px] block bg-neu-white"></span>
					</div>
					<div className="services-items-card-main-cont">
						<div className="services-card-item-first-part">
							{/* ============= */}
							<div className="services-slide-card-items"></div>
							{/* ============== */}
						</div>
						<div className="services-card-item-second-part">
							{/* ============= */}
							<div className="services-slide-card-items"></div>
							{/* ============== */}
						</div>
					</div>
				</div>
			</section>
			{/* services details istems info card slide end*/}
		</div>
	);
};

export default Services;
