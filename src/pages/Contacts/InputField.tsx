import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  error: string;
  htmlFor: string;
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
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray"
        />
        {error ?? <p className="text-red-700">{error}</p>}
      </label>
    </div>
  );
};

export default InputField;
