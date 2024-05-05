import React from "react";
interface PlusIconsProps {
	// Define any props your component might receive here
}

const PlusIcons: React.FC<PlusIconsProps> = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.6665 8C1.6665 7.44773 2.11422 7 2.6665 7H13.3332C13.8854 7 14.3332 7.44773 14.3332 8C14.3332 8.55227 13.8854 9 13.3332 9H2.6665C2.11422 9 1.6665 8.55227 1.6665 8Z"
				fill="#0A0A0A"
			/>
		</svg>
	);
};

export default PlusIcons;
