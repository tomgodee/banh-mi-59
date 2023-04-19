import type { Ingredient } from "./ingredient";

interface Food {
  name: string;
  price: string;
  ingredients: Ingredient[];
  image: string;
}

export type { Food };
