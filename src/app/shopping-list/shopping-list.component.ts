import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 20),
    new Ingredient('cucumber', 10),
    new Ingredient('pepper', 5),
    new Ingredient('onion', 8),
    new Ingredient('garlic', 4)
  ];
}
