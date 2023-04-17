import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Breast',
      'Chicken breasts are a great way to make your own chicken.',
      'https://www.onehappyhousewife.com/wp-content/uploads/2019/07/oven-baked-mexican-chicken-breast-9-900x1200.jpg'
    ),
  ];
}
