import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { Ingredient } from '../../_shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  ingredient: Ingredient;

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output('addIngredient') addIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(event) {
    event.preventDefault();
    
    this.addIngredient.emit({ 
      name: this.nameRef.nativeElement.value, 
      amount: this.amountRef.nativeElement.value
    });

    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }

}
