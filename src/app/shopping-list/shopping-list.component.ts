import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../_shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Pear', 3),
    new Ingredients('Bananas', 7),
    new Ingredients('Patatos', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
