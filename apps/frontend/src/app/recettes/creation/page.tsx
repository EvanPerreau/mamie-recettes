"use client";

import React, { useState } from "react";
import CustomTextInput from "@/app/components/custom/custom_text_input";
import CustomTextAreaInput from "@/app/components/custom/custom_text_area_input";
import FormWithTextInput from "@/app/components/custom/custom_form_with_text_input";
import CustomImageInput from "@/app/components/custom/custom_image_input";

export default function Page() {
  const [newCategory, setNewCategory] = useState("");
  const [isSelectDisabled, setIsSelectDisabled] = useState(false);

  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  const handleNewCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setNewCategory(value);
    setIsSelectDisabled(value.length > 0);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <form className="p-6 flex flex-col gap-2 w-fit items-center">
        <div className={"flex flex-col items-center gap-2 w-80 lg:w-96"}>
          <CustomTextInput
            placeholder={"Nom de la recette"}
            minLength={1}
            maxLength={25}
            required={true}
          />
          <CustomTextAreaInput
            placeholder={"Description"}
            minLength={0}
            maxLength={255}
            height={"h-32"}
          />
          <select
            className="select select-bordered w-full"
            defaultValue={0}
            disabled={isSelectDisabled}
          >
            <option>Autre catégorie</option>
            <option>Plat principal</option>
            <option>Dessert</option>
          </select>
          <div className="relative w-full">
            <input
              type="text"
              placeholder={"Nouvelle catégorie"}
              className="input input-bordered w-full"
              maxLength={24}
              minLength={1}
              value={newCategory}
              onChange={handleNewCategoryChange}
              required={false}
            />
            <div className="absolute bottom-0 right-0 mr-1 mb-1 text-sm opacity-50">
              {newCategory.length}/{24}
            </div>
          </div>
          <FormWithTextInput
            placeholder={"Ingrédient"}
            minLength={1}
            maxLength={124}
          />
          <FormWithTextInput
            placeholder={"Etape"}
            minLength={1}
            maxLength={124}
          />
        </div>
        <CustomImageInput
          width={"w-80 lg:w-96"}
          height={"h-96"}
          defaultValue={"/default.png"}
        />
        <button
          type={"submit"}
          className={"btn btn-primary text-white w-64 lg:w-80"}
        >
          Créer la recette
        </button>
      </form>
    </main>
  );
}
