import React from "react";
interface ButtonProps {
	btnText: string;
	btnVariant?: string; // Optional dynamic Tailwind CSS class
}

const Button: React.FC<ButtonProps> = ({ btnText, btnVariant }) => {
	return (
		<button
			type="button"
			className={`rounded-[4px] py-3 w-full h-[47px] flex justify-center items-center z-5  max-w-[159px] ${
				btnVariant || ""
			}`}>
			<span className="btn-text">{btnText}</span>
		</button>
	);
};

export default Button;
