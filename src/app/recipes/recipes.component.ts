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
    
    console.log("Before data");
    console.log(recipe.name);
    console.log(recipe.ingredients);
    console.log("After data");
    
  }

  updateRecipes(searchTerms: string[]) {

    // This will be called whenever we hit enter in the search box
    // It will prompt for us to search through all the recipes and update the current recipes

    // assume that we got a list of search terms (ingredients only)
    // filter through all_recipes data set 

    // test filtering current by a random string 

    this.curr_recipes = this.all_recipes.filter(function(recipe){

      for (let term of searchTerms){

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
