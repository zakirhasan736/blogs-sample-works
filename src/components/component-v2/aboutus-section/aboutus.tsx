import Button from '@/components/elements/button/button';
import GlowButton from '@/components/elements/button/glow-button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AboutUsSection = () => {
  return (
		<section className="aboutus-section-v2 pb-[89px]  md:pb-[60px]">
			<div className="custom-container max-w-[1220px]">
				<div className="section-left-cont">
					<div className="section-title-box">
						<div className="comon-title mb-10 max-w-[670px] m-auto text-center">
							<h2>
								Improving Buyer experience will gain you the results you want.
							</h2>
						</div>

						<div className="grid grid-cols-12 gap-10">
							<div className="about-modal-box col-span-6 md:col-span-full">
								<Image
									width={584}
									height={376}
									className="res-img max-w-full rounded-[4px]"
									src="/images/about.jpg"
									alt="A man typing"
								/>
							</div>
							<div className=" col-span-6 md:col-span-full">
								<p>
									Businesses often face a disconnect between their expectations
									and customers' online experiences, resulting in mistrust and
									missed opportunities.{" "}
								</p>
								<br />
								<p className="mb-[60px]">
									At Particular Agency, we recognise the significance of
									customer retention, with even a 5% increase translating to a
									29-95% rise in profitability. Our unique approach emphasises
									high-quality production and strategic marketing, guided by our
									philosophy of Free-thought, Attention to Detail, and
									Pioneering.
								</p>
								<Link href="/contacts" className='inline-block'>
									<GlowButton glowBtnText="start a project" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="mid-services-section">
					<div className="section.1-left-cont">
						<div className="section-1-title-box">
							<h3 className="uppercase section-1-info-title text-[14px] text-neu-white font-tertery font-normal leading-none text-center">
								Industry stats{" "}
							</h3>
							<div className="mid-services-wrapper flex justify-center gap-x-[58px] gap-y-1 md:gap-x-[30px]">
								<div className="mid-services text-center w-[385px] md:w-full">
									<h4 className="text-[56px] lg:text-[40px] md:text-[36px]  text-neu-white font-tertery font-normal leading-[1.1]">
										140%
									</h4>
									<p className="text-[15px] text-neu-white font-tertery font-normal leading-normal">
										increase in spend following positive interactions compared
										to negative ones
									</p>
								</div>
								<div className="mid-services text-center w-[385px] md:w-full">
									<h4 className="text-[56px] lg:text-[40px] whitespace-nowrap md:text-[36px] text-neu-white font-tertery font-normal leading-[1.1]">
										61%
									</h4>
									<p className="text-[15px] text-neu-white font-tertery font-normal leading-normal">
										of customers say that they would leave for a competitor
										after just one bad experience
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUsSection
