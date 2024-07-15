"use client";

import CustomTextInput from "@/app/components/custom/custom_text_input";
import CustomTextAreaInput from "@/app/components/custom/custom_text_area_input";
import FormWithTextInput from "@/app/components/custom/custom_form_with_text_input";
import CustomImageInput from "@/app/components/custom/custom_image_input";
import { recipeMock } from "@/app/mocks/recipe_mock";

function getRecipe(): Recipe {
  return recipeMock;
}

export default function Page({ params }: { params: { id: number } }) {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  const recipe: Recipe = getRecipe();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <form className="p-6 flex flex-col gap-2 w-fit items-center">
        <div className={"flex flex-col items-center gap-2 w-80 lg:w-96"}>
          <CustomTextInput
            placeholder={"Nom de la recette"}
            minLength={1}
            maxLength={25}
            required={true}
            defaultValue={recipe.name}
          />
          <CustomTextAreaInput
            placeholder={"Description"}
            minLength={0}
            maxLength={255}
            height={"h-32"}
            defaultValue={recipe.description}
          />
          <select className="select select-bordered w-full" defaultValue={0}>
            <option>Autre catégorie</option>
            <option>Plat principal</option>
            <option>Dessert</option>
          </select>
          <FormWithTextInput
            placeholder={"Ingrédient"}
            minLength={1}
            maxLength={124}
            defaultValue={recipe.ingredients}
          />
          <FormWithTextInput
            placeholder={"Etape"}
            minLength={1}
            maxLength={124}
            defaultValue={recipe.steps}
          />
        </div>
        <CustomImageInput
          width={"w-80 lg:w-96"}
          height={"h-96"}
          defaultValue={recipe.image}
        />
        <button
          type={"submit"}
          className={"btn btn-primary text-white w-64 lg:w-80"}
        >
          Modifier la recette
        </button>
      </form>
    </main>
  );
}
