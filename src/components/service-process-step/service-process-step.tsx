import {Image} from '@packages/packages'

const ServiceProcessStep = () => {
  return (
		<div className="services-process-steps-section pt-[120px] sm:pt-[70px]">
			<div className="services-process-steps-wrapper">
				<Image
					src="/images/service-process-image.png"
					alt="services process modal image"
					width={623}
					height={294}
					className="process-modal-image relative hidden w-full max-w-[450px] mx-auto sm:block mt-[70px] sm:h-[294px] sm:mb-[70px]"
				/>
				<div className="custom-container">
					<div className="service-section-title-box mb-20 sm:mb-[30px]">
						<h2 className="service-sec-title text-[65px] text-left text-primary font-bold font-primary leading-none capitalize sm:text-[34px] sm:tracking-[1.02px]">
							The Process
						</h2>
					</div>
				</div>
				<div className="custom-container-fluid pl-0 md:pl-8 sm:pl-4">
					<div className="services-process-steps-wrap-box grid grid-cols-16 gap-10">
						<div className="col-span-9 sm:col-span-full">
							<div className="services-process-left-cont">
								{/* ======== */}
								<div className="services-proces-steps-card pl-[112px] md:pl-0">
									<h3 className="service-process-step-title text-[53px] sm:text-[32px] text-left text-primary font-primary font-semibold leading-none mb-[40px] sm:mb-[22px]">
										Step <span className="color-text text-secondary">1</span>
									</h3>
									<h5 className="service-process-subtitle uppercase text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal mb-5">
										YOUR DISCOVERY CALL.
									</h5>
									<p className="service-process-desc max-w-[650px] w-full text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal">
										Outline your objectives in as much detail as possible -
										unrealistic desires and long-term goals included - so that
										we gain a complete idea of the field you’ll be competing in.
									</p>
								</div>
								{/* ====== */}
								<Image
									src="/images/service-process-image.png"
									alt="services process modal image"
									width={916}
									height={432}
									className="process-modal-image relative sm:hidden mt-[70px]"
								/>
							</div>
						</div>
						<div className="col-span-7 sm:col-span-full">
							<div className="services-process-right-cont">
								{/* ======== */}
								<div className="services-proces-steps-card mb-[50px] sm:mb-[30px]">
									<h3 className="service-process-step-title text-[53px] sm:text-[32px] text-left text-primary font-primary font-semibold leading-none mb-[40px] sm:mb-[22px]">
										Step <span className="color-text text-secondary">2</span>
									</h3>
									<h5 className="service-process-subtitle uppercase text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal mb-5">
										YOUR BRIEF AND PROPOSAL.
									</h5>
									<p className="service-process-desc max-w-[650px] w-full text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal">
										Where we confirm what your project needs and how we’ll
										collaborate with you. We’ll uncover and confirm how we can
										help you implement each detailed aspect of your Website
										plans.
										<br />
										<br />
										It’s important that you understand exactly why we follow the
										steps we do and how they’re likely to lead to you succeeding
										in line with or beyond your KPIs.
									</p>
								</div>
								{/* ====== */}
								{/* ======== */}
								<div className="services-proces-steps-card mb-[50px] sm:mb-[30px]">
									<h3 className="service-process-step-title text-[53px] sm:text-[32px] text-left text-primary font-primary font-semibold leading-none mb-[40px] sm:mb-[22px]">
										Step <span className="color-text text-secondary">3</span>
									</h3>
									<h5 className="service-process-subtitle uppercase text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal mb-5">
										WHERE WE OFFER A PLAN FOR YOUR SUCCESS
									</h5>
									<p className="service-process-desc max-w-[650px] w-full text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal">
										Based on your confirmed brief, our Product Team will offer
										you our proposed scope of works. This will include timelines
										and investment amounts.
										<br />
										<br />
										It’s important that you understand exactly why we follow the
										steps we do and how they’re likely to lead to you succeeding
										in line with or beyond your KPIs.
									</p>
								</div>
								{/* ====== */}
								{/* ======== */}
								<div className="services-proces-steps-card">
									<h3 className="service-process-step-title text-[53px] sm:text-[32px] text-left text-primary font-primary font-semibold leading-none mb-[40px] sm:mb-[22px]">
										Step <span className="color-text text-secondary">4</span>
									</h3>
									<h5 className="service-process-subtitle uppercase text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal mb-5">
										WHERE WE OFFER A PLAN FOR YOUR SUCCESS
									</h5>
									<p className="service-process-desc max-w-[650px] w-full text-[20px] sm:text-[13px] text-left text-primary font-primary font-medium leading-normal">
										Based on your confirmed brief, our Product Team will offer
										you our proposed scope of works. This will include timelines
										and investment amounts.
										<br />
										<br />
										It’s important that you understand exactly why we follow the
										steps we do and how they’re likely to lead to you succeeding
										in line with or beyond your KPIs.
									</p>
								</div>
								{/* ====== */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceProcessStep
