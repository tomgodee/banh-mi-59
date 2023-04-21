import beef_baguette from "@/public/beef_baguette.jpg";
import black_coffee from "@/public/black_coffee.jpg";
import bunbo from "@/public/bunbo.jpg";
import carrot_juice from "@/public/carrot_juice.jpg";
import chicken from "@/public/chicken.png";
import chicken_baguette from "@/public/chicken_baguette.jpg";
import egg_baguette from "@/public/egg_baguette.jpg";
import egg_coffee from "@/public/egg_coffee.jpg";
import lime_juice from "@/public/lime_juice.jpg";
import milk_coffee from "@/public/milk_coffee.jpg";
import orange_juice from "@/public/orange_juice.jpg";
import passion_fruit from "@/public/passion_fruit.jpg";
import pineapple_juice from "@/public/pineapple_juice.jpg";
import ham_baguette from "@/public/ham_baguette.jpg";
import soy_milk from "@/public/soy_milk.jpg";
import tofu_baguette from "@/public/tofu_baguette.jpg";
import traditional_baguette from "@/public/traditional_baguette.jpg";

export const getImage = (src: string) => {
  switch (src) {
    case "beef_baguette":
      return beef_baguette;
    case "bunbo":
      return bunbo;
    case "chicken_baguette":
      return chicken_baguette;
    case "egg_baguette":
      return egg_baguette;
    case "ham_baguette":
      return ham_baguette;
    case "tofu_baguette":
      return tofu_baguette;
    case "traditional_baguette":
      return traditional_baguette;
    case "egg_coffee":
      return egg_coffee;
    case "milk_coffee":
      return milk_coffee;
    case "black_coffee":
      return black_coffee;
    case "orange_juice":
      return orange_juice;
    case "pineapple_juice":
      return pineapple_juice;
    case "carrot_juice":
      return carrot_juice;
    case "passion_fruit":
      return passion_fruit;
    case "lime_juice":
      return lime_juice;
    case "soy_milk":
      return soy_milk;
    default:
      return chicken;
  }
};
