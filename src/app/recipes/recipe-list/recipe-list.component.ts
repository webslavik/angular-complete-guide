import { Component, OnInit } from '@angular/core';

import { Recepi } from '../recepi.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recepisList: Recepi[] = [
    new Recepi('Recepi Name 1', 'Some descriptions', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
