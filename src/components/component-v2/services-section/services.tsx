import ServiceCard from '@/components/common/service-cards/service-card';
import services from '@data/services-data.json'
import React from 'react'

const ServicesSection = () => {
  return (
		<section className="service-section-v2 pt-[122px] pb-[100px] md:pt-20 md:pb-[120px]">
			<div className="custom-container max-w-[1220px]">
				<div>
					<div className="comon-title mb-11">
						<h2>Our Services</h2>
						<span></span>
					</div>
					<div className="all-services grid grid-cols-12 gap-x-10 gap-y-[45px] lg:gap-x-[20px] lg:gap-y-[30px]">
						{services.map((service, index) => (
							<ServiceCard key={index} {...service} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesSection
