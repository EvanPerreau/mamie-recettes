import React, { useState } from "react";

interface CustomTextAreaInputProps {
  placeholder: string;
  minLength: number;
  maxLength: number;
  required?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
  height?: string;
  defaultValue?: string;
}

const CustomTextAreaInput: React.FC<CustomTextAreaInputProps> = ({
  placeholder,
  minLength,
  maxLength,
  required = false,
  resize = "none",
  height = "h-32",
  defaultValue = "",
}) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={`relative w-full ${height}`}>
      <textarea
        placeholder={placeholder}
        className={`textarea textarea-bordered w-full h-full`}
        maxLength={maxLength}
        minLength={minLength}
        value={text || defaultValue}
        onChange={handleChange}
        required={required}
        style={{ resize: resize }}
      />
      <div className="absolute bottom-0 right-0 mr-1 mb-1 text-sm opacity-50">
        {text.length || defaultValue.length}/{maxLength}
      </div>
    </div>
  );
};

export default CustomTextAreaInput;
