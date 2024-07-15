import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface CustomFormWithTextInputProps {
  placeholder: string;
  minLength: number;
  maxLength: number;
  defaultValue?: string[];
}

interface ListItem {
  content: string;
  deleting?: boolean;
  isNew?: boolean; // Flag to indicate new items for animation
}

const CustomFormWithTextInput: React.FC<CustomFormWithTextInputProps> = ({
  placeholder,
  minLength,
  maxLength,
  defaultValue = [],
}) => {
  const [inputValue, setInputValue] = useState("");
  const [itemsList, setItemsList] = useState<ListItem[]>(
    defaultValue.map((content) => ({ content, isNew: false })),
  );
  const [isListVisible, setIsListVisible] = useState(true);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (!inputValue.trim()) return;
    setItemsList((prevItems) => [
      ...prevItems,
      { content: inputValue, isNew: true },
    ]);
    setInputValue("");
    setTimeout(() => {
      setItemsList((prevItems) =>
        prevItems.map((item) => ({ ...item, isNew: undefined })),
      );
    }, 350);
  };

  const handleDeleteAnimation = (index: number) => {
    const newList = [...itemsList];
    newList[index] = { ...newList[index], deleting: true };
    setItemsList(newList);
    setTimeout(() => {
      handleDeleteItem(index, true);
    }, 350);
  };

  const handleDeleteItem = (index: number, skipAnimation = false) => {
    if (!skipAnimation) {
      handleDeleteAnimation(index);
      return;
    }
    setItemsList((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDragEnd = () => {
    setHoveredIndex(null);
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLLIElement>,
    index: number,
  ) => {
    event.preventDefault();
    setHoveredIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddItem();
    }
  };

  const handleDrop = (index: number) => {
    if (draggedItemIndex === null) return;
    const newList = [...itemsList];
    const item = newList.splice(draggedItemIndex, 1)[0];
    newList.splice(index, 0, item);
    setItemsList(newList);
    setDraggedItemIndex(null);
    setHoveredIndex(null);
  };

  return (
    <div
      className={`flex flex-col ${isListVisible && itemsList.length > 0 ? "gap-2" : ""} justify-between w-full`}
    >
      <div className={"flex flex-row gap-2 justify-between w-full"}>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-full"
            maxLength={maxLength}
            minLength={minLength}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute bottom-0 right-0 mr-1 mb-1 text-sm opacity-50">
            {inputValue.length}/{maxLength}
          </div>
        </div>
        <button type={"button"} className={"btn"} onClick={handleAddItem}>
          Ajouter
        </button>
      </div>
      <div className="flex flex-col w-full">
        {isListVisible && (
          <ul
            className={`flex flex-col gap-1 w-full transition-all duration-500`}
          >
            {itemsList.map((item, index) => (
              <li
                className={`relative border-2 rounded p-2 break-words whitespace-normal max-w-full cursor-grab ${
                  hoveredIndex === index
                    ? "bg-gray-200 border-dashed border-4"
                    : ""
                } ${item.deleting ? "animate-suckIn" : ""} ${item.isNew ? "animate-fadeIn" : ""}`}
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={() => handleDrop(index)}
                onDragEnd={handleDragEnd}
              >
                {item.content}
                <button
                  type={"button"}
                  onClick={() => handleDeleteAnimation(index)}
                  className={
                    "absolute w-6 h-6 right-1 bottom-1 hover:scale-110"
                  }
                >
                  <Icon icon="gg:trash" width={"100%"} height={"100%"} />
                </button>
              </li>
            ))}
          </ul>
        )}
        {itemsList.length > 0 && (
          <button
            type={"button"}
            className={"ml-auto h-5 w-5 mt-2"}
            onClick={toggleListVisibility}
          >
            <Icon
              icon={isListVisible ? "bxs:down-arrow" : "bxs:up-arrow"}
              className={"h-full w-full items-center"}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomFormWithTextInput;
