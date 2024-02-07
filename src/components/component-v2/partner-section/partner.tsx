import Image from 'next/image';
import React from 'react'

const PartnerSection = () => {
  return (
		<section className="partner-section pb-[150px] sm:pb-[120px]">
			<div className="custom-container max-w-[1220px]">
				<div className="comon-title mb-11">
					<h2>In partnership with</h2>
					<span></span>
				</div>
				<div className="partner-wrapper">
					<h3 className="partner-sec-main-title text-center flex items-center justify-center">
						<Image
							src="/images/partnar-brand-logo.svg"
							width={180}
							height={42}
                            className='sm:w-[160px]'
							alt="modal title image"
						/>
					</h3>
					<div className="shape-indicator mx-auto max-w-[703px] lg:px-15 md:px-20  sm:px-[40px] block">
						<Image
							src="/images/shape-indicator-dvitder.svg"
							width={703}
							height={120}
							alt="shape indicator image"
						/>
					</div>
					<div className="partner-list-box flex items-start justify-between max-w-[898px] mx-auto pt-2">
						<div className="partnar-list-items">
							<Image
								src="/images/DAN-member-badge-light-h 1.svg"
								width={139}
								height={68}
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
