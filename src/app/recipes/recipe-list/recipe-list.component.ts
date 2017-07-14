import { Component, OnInit } from '@angular/core';

import { Recepi } from '../recepi.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipesList: Recepi[] = [
    new Recepi('Checken with corn', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', 'http://del.h-cdn.co/assets/15/35/980x980/gallery-1440437599-country-crock-grilled-barbecue-chicken-delish.jpg'),
    new Recepi('Awesome pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quae enim consectetur mollitia eum voluptatem, temporibus veritatis, obcaecati dolores excepturi!', 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ'),
    new Recepi('Chocolate cake', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quae enim consectetur mollitia eum voluptatem, temporibus veritatis, obcaecati dolores excepturi! Else some text', 'https://www.bettys.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/a/happy-birthday-chocolate-cake-2000130_6.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
