import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

interface LoadingScreenProps {
	loaded: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loaded }) => {
	return (
		<section className="bg-black h-screen w-full text-white fixed left-0 right-0 top-0 bottom-0">
			<div className="flex items-center justify-center">
				<div className="flex items-center justify-center fixed w-full h-full left-0 bottom-0 right-0 top-0">
					<div className="loader-item-box relative">
						<div className="loader-mode-img w-[155px] h-270px]">
							<Image
								src="/images/white-brand-logo.svg"
								alt="preloader"
								width={155}
								height={270}
							/>
						</div>
						<span className="absolute top-[70%] left-0 bottom-0 right-0 text-center text-fig-32 text-neon">
							<CountUp end={100} duration={loaded} />%
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoadingScreen;
