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

  ingredients: string; 
  procedure: string; 
  onename: string; 
  
  recipes: Recipe[];

  ngOnInit() {

    // try pulling in the json and reading it 

    // how to iterate over the items in data...
    // 1. iterate over them and then I can parse into a list of objects or something 

    console.log("Printing Data");
    console.log(data);
    let names: string[] = Object.keys(data.cocktails);
    for (let n of names){
      //this.onename = name;
      //this.procedure = data.cocktails[name].Procedure; 
      //this.ingredients = data.cocktails[name].Ingredients;

      //recipe: Recipe("test1", "test2"); 
      //recipe.name = n; 
      //recipe.ingredients = data.cocktails[n].Ingredients;
      //recipe.procedure = data.cocktails[n].Procedure;

      //this.recipes.push(recipe);

    }    



  }

}
