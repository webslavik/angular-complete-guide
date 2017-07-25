import { EventEmitter } from '@angular/core';

import { Ingredient } from '../_shared/ingredients.model';

export class ShoppingService {
  
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Pear', 3),
    new Ingredient('Bananas', 7),
    new Ingredient('Patatos', 4)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}