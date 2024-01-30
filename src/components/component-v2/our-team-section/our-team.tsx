import Image from 'next/image';
import React from 'react'

const OurTeamSection = () => {
  return (
		<section className="our-team-section">
			<div className="custom-container max-w-[1220px] pb-[94px]">
				<div className="our-team-sec-wrapper">
					<div className="comon-title mb-8">
						<h2 className="mb-2">Our Team</h2>
						<span></span>
					</div>
                    <div className='team-card-box grid grid-cols-12 gap-8 max-w-[1114px] mx-auto'>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-jas.png" alt="jasmani dyett"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Jasmani Dyett</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>CoFounder</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-ryan.png" alt="ryan clarke"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Ryan Clarke</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>CoFounder</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-jarvin.png" alt="jarvin Ofosu-yeboah"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Jarvin Ofosu-Yeboah</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>CoFounder</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-rodney.png" alt="rodney dennis"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Rodney Dennis</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>Business Developer</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-kwame.png" alt="kwame opoku"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Kwame Opoku</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>Business Developer</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-simi.png" alt="simi bello"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Simi Bello</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>UX Designer</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-varun.png" alt="varun soni"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Varun Soni</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>UX Designer</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-zakir.jpg"   alt="zakir hosen" />
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Zakir Hosen</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>Full Stack Developer</p>
                    </div>
                    <div className="team-card col-span-4 md:col-span-6 sm:col-span-full sm:mx-auto ">
                        <Image width={311} height={311} className='object-cover rounded-[6px] w-[310px] h-[310px]' src="/images/team-placeholder.png" alt="adwoa aduako sabeng akosa"/>
                        <h4 className='text-[22px] mt-3 text-left text-neu-white font-tertery font-bold leading-[32px]'>Adwoa Aduako Sabeng Akosa</h4>
                        <p className='text-[16px] text-left text-neu-white font-tertery font-normal leading-[28px]'>Trainee - Full Stack Developer</p>
                    </div>
                </div>
				</div>
			</div>
		</section>
	);
}

export default OurTeamSection
