import React, { useState } from "react";

interface CheckboxProps {
	id: string;
	label: string;
	value: string;
	error: string;
	onChange: (value: string) => void;
}

const PrivacyCheckmark: React.FC<CheckboxProps> = ({
	id,
	label,
	onChange,
	value,
	error,
}) => {
	const [isChecked, setIsChecked] = useState(false);
	const [expanded, setExpanded] = useState(false); // State to track text expansion

	const handleChange = () => {
		setIsChecked(!isChecked);
		if (!isChecked) {
			onChange(value);
		} else {
			onChange("");
		}
	};

	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	const truncateText = (text: string, maxLength: number) => {
		if (text.length <= maxLength) return text;
		return text.slice(0, maxLength) + "...";
	};

	return (
		<div className="required-privacy-checkmark">
			<label
				htmlFor={id}
				className="checkmark-privacy-box flex items-start gap-3">
				<input
					type="checkbox"
					name="checkbox"
					className="hidden"
					id={id}
					onChange={handleChange}
				/>

				<div
					className={`check-mark-input-mark w-[16px] relative min-w-[16px] h-[16px] border border-light-gray bg-transparent block ${
						isChecked ? "border-light-gray" : "border-white"
					}`}></div>
				<p className="checkmark-text text-dark-gray">
					{expanded ? label : truncateText(label, 150)}

					{label.length > 150 && (
						<button
							className="read-more-button text-[#727CDD] underline capitalize text-[14px] font-tertery font-bold block mt-1"
							onClick={toggleExpansion}>
							{expanded ? "Read Less" : "Read More"}
						</button>
					)}
				</p>
			</label>
			{error && <p className="text-red-700">{error}</p>}
		</div>
	);
};

export default PrivacyCheckmark;
