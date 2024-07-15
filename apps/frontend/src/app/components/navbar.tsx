"use client";

import React, { useState } from "react";
import Link from "next/link";
import { recipeNamesMock } from "@/app/mocks/recipe_names_mock";
import Image from "next/image";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  function filterRecipes(query: string) {
    return recipeNamesMock.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const filteredRecipes = filterRecipes(searchQuery);

  // Fonction pour réinitialiser la recherche
  const resetSearch = () => setSearchQuery("");

  return (
    <div className="navbar backdrop-blur-sm sticky top-0 z-50">
      <div className="navbar-start">
        <Link
          href={"/recettes"}
          className="text-3xl font-extrabold hover:cursor-pointer hover:text-secondary uppercase ml-3"
          onClick={resetSearch} // Réinitialiser la recherche lors du clic
        >
          Mes recettes
        </Link>
      </div>
      <div className="navbar-end relative">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {searchQuery && (
          <div className="absolute max-w-80 min-w-80 mt-2 bg-white shadow-lg max-h-60 overflow-y-auto top-full">
            {filteredRecipes.map((recipe) => (
              <Link
                href={`/recettes/${recipe.id}`}
                key={recipe.id}
                className="flex items-center space-x-3 p-4 hover:bg-gray-100"
                onClick={resetSearch} // Réinitialiser la recherche lors du clic sur un élément
              >
                <div className={"relative h-12 w-12"}>
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    priority={false}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes={"100%"}
                  />
                </div>

                <div>{recipe.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
