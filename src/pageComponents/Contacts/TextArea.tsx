import React from "react";

interface InputFieldProps {
	name: string;
	id: string;
	placeholder: string;
	value: string;
	error: string;
	htmlFor: string;
	labelText?: string;
	labeltextItem?: boolean;
	onChange?: (field: string, value: string) => void;
}

const TextArea: React.FC<InputFieldProps> = ({
	name,
	id,
	placeholder,
	value,
	htmlFor,
	error,
	labelText,
	labeltextItem,
	onChange,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(name, event.target.value);
		}
	};

	return (
		<div className="contact-form-input-textarea-box w-full">
			<label htmlFor={htmlFor} className="contact-form-input-fild w-full">
				{labeltextItem && (
					<span className="label-text text-[16px] text-left text-neu-white font-tertery font-bold leading-normal mb-[5px] block">
						{labelText}
					</span>
				)}

				<textarea
					name={name}
					className="input-fild-item w-full h-[98px] bg-neu-white  rounded-[6px] text-[#000000] border border-light-gray focus:border-light-gray focus:outline-0  text-left py-[10px] px-5 text-[14px] font-primary font-normal leading-none placeholder:text-[14px] placeholder:text-dark-gray"
					id={id}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}></textarea>
				{error ?? <p className="text-red-700">{error}</p>}
			</label>
		</div>
	);
};

export default TextArea;
