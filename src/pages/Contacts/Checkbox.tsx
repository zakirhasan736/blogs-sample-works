interface CheckboxProps {
  value: string;
  label: string;
  id: string;
  htmlFor: string;
  selectedValue: string;
  onChange: (newValue: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  htmlFor,
  value,
  label,
  id,
  selectedValue,
  onChange,
}) => {
  const isChecked = selectedValue === value;

  const handleCheckboxChange = () => {
    if (!isChecked) {
      onChange(value);
    }
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
				<p className="checkbox-services-text  h-9 text-dark-gray text-[18px] text-center leading-none font-primary font-normal">
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
