import React from "react";
interface PlusIconsProps {
	// Define any props your component might receive here
}

const PlusIcons: React.FC<PlusIconsProps> = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="26"
			height="28"
			viewBox="0 0 26 28"
			fill="none">
			<line
				x1="0.840576"
				y1="12.4902"
				x2="25.6567"
				y2="12.4902"
				stroke="black"
				stroke-width="4"
			/>
			<line
				x1="12.1133"
				y1="27.3672"
				x2="12.1133"
				y2="0.362032"
				stroke="black"
				stroke-width="4"
			/>
		</svg>
	);
};

export default PlusIcons;
