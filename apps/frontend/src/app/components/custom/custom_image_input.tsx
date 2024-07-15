import React, { useState } from "react";
import Image from "next/image";

interface CustomImageInputProps {
  width: string;
  height: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}

const CustomImageInput: React.FC<CustomImageInputProps> = ({
  width,
  height,
  placeholder = "Choisir une image",
  required = false,
  defaultValue = "",
}) => {
  const [fileName, setFileName] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    defaultValue || "/default.png",
  );

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("");
      setImagePreviewUrl(defaultValue || "/default.png");
    }
  };

  const triggerFileInput = () => {
    document.getElementById("hiddenFileInput")?.click();
  };

  return (
    <div className="relative w-fit flex flex-col gap-2">
      <div className={`${width} ${height} relative`}>
        <Image
          src={fileName ? imagePreviewUrl : defaultValue}
          alt="Preview"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <div className="relative w-full">
        <input
          type="file"
          id="hiddenFileInput"
          onChange={onFileChange}
          style={{ display: "none" }}
          required={required}
        />
        <button
          type="button"
          className={`btn ${width}`}
          onClick={triggerFileInput}
        >
          {fileName || placeholder}
        </button>
      </div>
    </div>
  );
};

export default CustomImageInput;
