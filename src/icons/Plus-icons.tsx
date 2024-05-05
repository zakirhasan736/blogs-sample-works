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
				d="M6.99984 13.3333C6.99984 13.8856 7.44757 14.3333 7.99984 14.3333C8.5521 14.3333 8.99984 13.8856 8.99984 13.3333V9H13.3332C13.8854 9 14.3332 8.55227 14.3332 8C14.3332 7.44773 13.8854 7 13.3332 7H8.99984V2.66667C8.99984 2.11438 8.5521 1.66667 7.99984 1.66667C7.44757 1.66667 6.99984 2.11438 6.99984 2.66667V7H2.6665C2.11422 7 1.6665 7.44773 1.6665 8C1.6665 8.55227 2.11422 9 2.6665 9H6.99984V13.3333Z"
				fill="#0A0A0A"
			/>
		</svg>
	);
};

export default PlusIcons;
