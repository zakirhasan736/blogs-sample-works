// Checkbox.tsx
import React from "react";

interface CheckboxProps {
	value: string;
	label: string;
	id: string;
	htmlFor: string;
	selectedValues: string[]; // Change to an array of strings
	onChange: (newValue: string[]) => void; // Update the onChange handler
}

const Checkbox: React.FC<CheckboxProps> = ({
	htmlFor,
	value,
	label,
	id,
	selectedValues,
	onChange,
}) => {
	const isChecked = selectedValues.includes(value);

	const handleCheckboxChange = () => {
		const isSelected = selectedValues.includes(value);
		let newSelectedValues: string[];

		if (isSelected) {
			newSelectedValues = selectedValues.filter(val => val !== value);
		} else {
			newSelectedValues = [...selectedValues, value];
		}

		onChange(newSelectedValues); // Send the array of selected values
	};

	return (
		<div className="contact-form-check-list-item min-w-[75px] lg:min-w-[55px]">
			<label
				htmlFor={htmlFor}
				className={`checkmark-services flex flex-col items-center justify-center gap-3`}>
				<input
					type="checkbox"
					name="checkbox"
					className="hidden"
					id={id}
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				<p className="checkbox-services-text h-9 text-dark-gray text-[18px] text-center leading-none font-primary font-normal">
					{label}
				</p>
				<div
					className={`check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block ${
						isChecked ? "border-blue-600" : ""
					}`}></div>
			</label>
		</div>
	);
};

export default Checkbox;
