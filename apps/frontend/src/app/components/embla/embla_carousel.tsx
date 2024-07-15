import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/app/components/embla/embla_carousel_arrow_buttons";
import { EmblaOptionsType } from "embla-carousel";
import RecipeCard from "@/app/components/recipe_card";

type PropType = {
  recipes: Omit<Recipe, "category" | "category_id">[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ recipes, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [canScroll, setCanScroll] = useState(false); // New state to track if carousel can scroll

  useEffect(() => {
    const updateState = () => {
      if (emblaApi) {
        const atStart = !emblaApi.canScrollPrev();
        const atEnd = !emblaApi.canScrollNext();
        const scrollable = emblaApi.scrollSnapList().length > 1; // Check if there are enough items to scroll
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
        setCanScroll(scrollable); // Update canScroll state
      }
    };

    if (emblaApi) {
      updateState(); // Initial call to set state correctly on load
      emblaApi.on("init", updateState);
      emblaApi.on("select", updateState);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off("init", updateState);
        emblaApi.off("select", updateState);
      }
    };
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div
        className={`embla__viewport ${!canScroll ? "" : isAtEnd && !isAtStart ? "embla__viewport--end" : isAtStart && !isAtEnd ? "embla__viewport--start" : ""}`}
        ref={emblaRef}
      >
        <div className="embla__container">
          {recipes.map((recipe, index) => (
            <div className="embla__slide" key={index}>
              <RecipeCard
                id={recipe.id}
                image={recipe.image}
                ingredients={recipe.ingredients}
                name={recipe.name}
                steps={recipe.steps}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons ml-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
