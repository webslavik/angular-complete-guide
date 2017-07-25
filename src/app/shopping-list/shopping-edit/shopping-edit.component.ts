import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../_shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  ingredient: Ingredient;

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    event.preventDefault();
    
    this.shoppingService.addIngredient({
      name: this.nameRef.nativeElement.value,
      amount: this.amountRef.nativeElement.value
    })

    // console.log(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);

    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }

}
