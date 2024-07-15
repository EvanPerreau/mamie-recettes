"use client";

import { recipeMock } from "@/app/mocks/recipe_mock";
import Image from "next/image";
import EditButton from "@/app/components/edit_button";

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
      <div className={"mt-12 flex w-full items-center flex-col gap-8"}>
        <div className={"flex flex-col gap-2 items-center"}>
          <h1 className={"text-5xl font-bold max-w-xs sm:max-w-md text-center"}>
            {recipe.name}
          </h1>
          <h2
            className={"text-xl font-semibold max-w-xs sm:max-w-md text-center"}
          >
            {recipe.category}
          </h2>
        </div>

        <div className={"relative h-96 w-96"}>
          <Image
            src={recipe.image}
            alt={recipe.name}
            priority={true}
            fill={true}
            style={{ objectFit: "cover" }}
            sizes={"100%"}
          />
        </div>

        <p className={"italic text-gray-900 max-w-xs sm:max-w-md text-center"}>
          {recipe.description}
        </p>

        <div className={"flex flex-col gap-2 items-center"}>
          <h3 className={"text-lg"}>Ingrédients</h3>
          <ul className={"list-disc"}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className={"max-w-xs sm:max-w-md"}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex flex-col gap-2 items-center"}>
          <h3 className={"text-lg"}>Étapes</h3>
          <ol className={"list-decimal"}>
            {recipe.steps.map((step, index) => (
              <li key={index} className={"max-w-xs sm:max-w-md"}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <EditButton id={params.id} />
    </main>
  );
}
