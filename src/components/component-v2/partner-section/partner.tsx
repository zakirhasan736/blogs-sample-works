import Image from 'next/image';
import React from 'react'

const PartnerSection = () => {
  return (
		<section className="partner-section pb-[150px] sm:pb-[120px]">
			<div className="custom-container max-w-[1220px]">
				<div className="comon-title mb-[58px] max-w-[335px] sm:max-w-[247px] mx-auto">
					<h2 className="">In partnership with</h2>
					<span></span>
				</div>
				<div className="partner-wrapper">
					<div className="partner-list-box flex items-start justify-between max-w-[683px] md:max-w-[483px] relative left-10 md:left-0 mx-auto">
						<div className="partnar-list-items">
							<Image
								src="/images/DAN-member-badge-light-h 1.svg"
								width={142}
								height={126}
								className="sm:w-[120px]"
								alt="partner modal image"
							/>
						</div>
						<div className="partnar-list-items">
							<Image
								src="/images/designrush-logos-idqoe849MT 1.svg"
								width={272}
								className="md:w-[220px] sm:w-[190px]"
								height={61}
								alt="partner modal image"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PartnerSection
