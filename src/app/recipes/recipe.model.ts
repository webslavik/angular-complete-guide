import { Ingredient } from '../_shared/ingredients.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, descr: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.description = descr;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }
}