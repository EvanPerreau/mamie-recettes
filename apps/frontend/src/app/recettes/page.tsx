"use client";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/app/components/embla/embla_carousel";
import "@/app/components/css/embla.css";
import { categoriesWithRecipesMock } from "@/app/mocks/categories_with_recipes_mock";
import AddButton from "@/app/components/add_button";

function getCategories() {
  return categoriesWithRecipesMock;
}

export default function Page() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  const OPTIONS: EmblaOptionsType = { dragFree: true, slidesToScroll: "auto" };
  const SLIDE_COUNT = 20;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main>
      <div className={"mt-12"}>
        {getCategories().map((category) => (
          <div className={"m-2"} key={category.id}>
            <h1 className={"text-2xl m-4 font-bold"}>{category.name}</h1>
            <EmblaCarousel recipes={category.recipes} options={OPTIONS} />
          </div>
        ))}
      </div>
      <AddButton />
    </main>
  );
}
