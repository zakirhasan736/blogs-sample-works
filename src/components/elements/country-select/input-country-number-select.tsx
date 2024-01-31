import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface InputCountryNumberSelectProps {
	id: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	error: string;
	labelText?: string;
	labeltextItem?: boolean;
	onChange?: (field: string, value: string) => void;
}

const InputCountryNumberSelect: React.FC<InputCountryNumberSelectProps> = ({
	id,
	type,
	name,
	placeholder,
	value,
	error,
	labelText,
	labeltextItem,
	onChange,
}) => {
	const handleChange = (phoneNumber: string) => {
		if (onChange) {
			onChange(name, phoneNumber);
		}
	};

	return (
		<div className="input-country-select">
			{labeltextItem && labelText && (
				<label
					htmlFor={id}
					className="label-text text-[16px] text-left text-neu-white font-tertery font-bold leading-normal mb-[5px] block">
					{labelText}
				</label>
			)}
			<PhoneInput
				type={type}
				international
				countryCallingCodeEditable={false}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				defaultCountry="GB"
				autoComplete="tel"
				inputProps={{
					required: true,
				}}
			/>
			{error && <p className="text-red-700">{error}</p>}
		</div>
	);
};

export default InputCountryNumberSelect;
