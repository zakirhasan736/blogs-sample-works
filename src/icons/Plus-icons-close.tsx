import React from "react";
interface PlusIconsProps {
	// Define any props your component might receive here
}

const PlusIcons: React.FC<PlusIconsProps> = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none">
			<g opacity="0.8">
				<path
					d="M19 12.9766L12 19.9766L5 12.9766"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
		</svg>
	);
};

export default PlusIcons;
