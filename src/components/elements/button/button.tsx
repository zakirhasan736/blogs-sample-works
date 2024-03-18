import React from "react";
interface ButtonProps {
  btnText: string;
  btnVariant?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  type = "button",
  btnVariant,
}) => {
  return (
    <button
      type={type}
      className={`rounded-[4px] py-3 w-full h-[47px] flex justify-center items-center z-5  max-w-[159px] ${
        btnVariant || ""
      }`}
    >
      <span className="btn-text">{btnText}</span>
    </button>
  );
};

export default Button;
