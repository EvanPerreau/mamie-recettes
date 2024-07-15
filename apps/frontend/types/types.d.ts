declare type Recipe = {
  id: number;
  name: string;
  description?: string;
  category: string;
  category_id: number;
  ingredients: string[];
  steps: string[];
  image: string;
};

declare type CategoryWithRecipes = {
  id: number;
  name: string;
  recipes: Omit<Recipe, "category" | "category_id">[];
};
