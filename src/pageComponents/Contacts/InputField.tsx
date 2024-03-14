import React from "react";

interface InputFieldProps {
	name: string;
	type: string;
	id: string;
	placeholder: string;
	value: string;
	error: string;
	htmlFor: string;
	labelText?:string;
	labeltextItem?: boolean;
	onChange?: (field: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
	name,
	type,
	id,
	placeholder,
	value,
	error,
	htmlFor,
	labelText,
  labeltextItem,
	onChange,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(name, event.target.value);
		}
	};

	return (
		<div className="contact-form-input-fild-box w-full">
			<label htmlFor={htmlFor} className="contact-form-input-fild w-full">
				{labeltextItem && (
					<span className="label-text text-[16px] text-left text-neu-white font-tertery font-bold leading-normal mb-[5px] block">
						{labelText}
					</span>
				)}
				<input
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="input-fild-item w-full text-[#000000] h-[48px] border border-light-gray focus:border-light-gray focus:outline-0 b bg-neu-white rounded-[6px] text-left py-[10px] px-5 text-[14px] font-primary font-normal leading-none placeholder:text-[14px] placeholder:text-dark-gray"
				/>
				
				{error ? <span className="text-red-700">{error}</span> : ""}
			</label>
		</div>
	);
};

export default InputField;
