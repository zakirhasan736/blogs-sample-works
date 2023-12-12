import React, { useState } from "react";

interface CheckboxProps {
  id: string;
  label: string;
  value: string;
  error:string;
  onChange: (value: string) => void;
}

const PivacyCheckmark: React.FC<CheckboxProps> = ({
  id,
  label,
  onChange,
  value,
  error
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      onChange(value);
    }
    else{
      onChange("")
    }
  };

  return (
    <div className="required-privacy-checkmark">
      <label
        htmlFor={id}
        className="checkmark-privacy-box flex items-start gap-3"
      >
        <input
          type="checkbox"
          name="checkbox"
          className="hidden"
          id={id}
          onChange={handleChange}
        />

        <div
          className={`check-mark-input-mark w-[33px] min-w-[33px] h-[33px] border border-light-gray bg-transparent block ${
            isChecked ? "border-blue-600" : ""
          }`}
        ></div>
        <p className="checkmark-text text-dark-gray">{label}</p>
      </label>
      {error  ?? <p className="text-red-700">{error}</p>}
    </div>
  );
};

export default PivacyCheckmark;
