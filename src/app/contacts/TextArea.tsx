import React from "react";

interface InputFieldProps {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  error: string;
  htmlFor: string;
  onChange?: (field: string, value: string) => void;
}

const TextArea: React.FC<InputFieldProps> = ({
  name,
  id,
  placeholder,
  value,
  htmlFor,
  error,
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
        <textarea
          name={name}
          className="input-fild-item w-full h-[210px] text-neu-white border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray"
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        ></textarea>
        {error  ?? <p className="text-red-700">{error}</p>}
      </label>
    </div>
  );
};

export default TextArea;