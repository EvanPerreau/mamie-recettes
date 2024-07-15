import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeCard: React.FC<Omit<Recipe, "category" | "category_id">> = ({
  id,
  name,
  description,
  ingredients,
  steps,
  image,
}) => {
  return (
    <Link
      className="card bg-base-100 image-full w-full h-64 shadow-xl border-2 cursor-pointer"
      href={`/recettes/${id}`}
    >
      <figure className={"relative"}>
        <Image
          src={image}
          alt="Shoes"
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
          sizes={"100%"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-24">{name}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </Link>
  );
};

export default RecipeCard;
