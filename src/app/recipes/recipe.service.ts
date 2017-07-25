import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
 
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Checken with corn', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', 'http://del.h-cdn.co/assets/15/35/980x980/gallery-1440437599-country-crock-grilled-barbecue-chicken-delish.jpg'),
    new Recipe('Awesome pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quae enim consectetur mollitia eum voluptatem, temporibus veritatis, obcaecati dolores excepturi!', 'https://sopka-restaurant.com/upload/iblock/5e7/5e769f8ffb624846b6b02e85691ad2c7.jpg'),
    new Recipe('Chocolate cake', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quae enim consectetur mollitia eum voluptatem, temporibus veritatis, obcaecati dolores excepturi! Else some text', 'https://www.bettys.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/a/happy-birthday-chocolate-cake-2000130_6.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}