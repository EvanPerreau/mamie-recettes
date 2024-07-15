import React, { useState } from "react";

interface CustomTextInputProps {
  placeholder: string;
  minLength: number;
  maxLength: number;
  required?: boolean;
  defaultValue?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  minLength,
  maxLength,
  required = false,
  defaultValue = "",
}) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full"
        maxLength={maxLength}
        minLength={minLength}
        value={text || defaultValue}
        onChange={handleChange}
        required={required}
      />
      <div className="absolute bottom-0 right-0 mr-1 mb-1 text-sm opacity-50">
        {text.length || defaultValue.length}/{maxLength}
      </div>
    </div>
  );
};

export default CustomTextInput;
