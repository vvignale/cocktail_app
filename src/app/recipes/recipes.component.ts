import { Component, OnInit } from '@angular/core';

import { Recipe } from '../Recipe';
import * as data from '../cocktail_recipes.json';
import { stringify } from 'querystring';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  constructor() { }

  //ingredients: string; 
  //procedure: string; 
  //onename: string; 
  
  all_recipes: Recipe[] = [];
  curr_recipes: Recipe[] = [];

  ngOnInit() {

    let names: string[] = Object.keys(data.cocktails);

    for (let n of names){

      var recipe = new Recipe();
      recipe.name = n; 
      recipe.ingredients = data.cocktails[n].Ingredients;
      recipe.procedure = data.cocktails[n].Procedure;

      this.all_recipes.push(recipe);
      this.curr_recipes.push(recipe);
    }
    
  }

  updateRecipes(ingSearchTerms: string[], flavorSearchTerms: string[]) {

    this.curr_recipes = this.all_recipes.filter(function(recipe){

      for (let term of ingSearchTerms){

        // assume "and" search. if ingredient doesn't match, throw it out
        if (!recipe.ingredients.toLowerCase().includes(term.toLowerCase())){
          return false;
        }
      }
      return true;
    }
    
    );

  }

}
