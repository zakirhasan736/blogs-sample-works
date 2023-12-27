import React from 'react'
interface ColorCraftEnterProps {
	onEnter: () => void;
}

const ColorCraftEnterModal: React.FC<ColorCraftEnterProps> = ({ onEnter }) => {
	return (
		<div className="featured-banner-section h-[950px] laptop-x:h-[550px] lg:h-[550px] bg-black">
			<div className="custom-container h-full">
				<div className="featured-banner-wrapper h-full flex justify-center lg:items-center pt-[270px] laptop-x:pt-[140px] lg:pt-0">
					<div className="featured-banner-text-cont text-center">
						<h1 className="featured-banner-title text-[80px]  mb-12 sm:mb-6">
							COLOUR CRAFT
						</h1>
						<button
							type="button"
							onClick={onEnter}
							className="featured-banner-btn">
							ENTER
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorCraftEnterModal;
