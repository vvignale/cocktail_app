import { Component, OnInit, Input } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  @Input() recipeComp: RecipesComponent;
  searchFlavors: string[] = [];   // list of flavors that we will search by 
  searchIngredients: string[] = [];   // list of ingredients that we will search by
  toggles: {[id:string] : boolean;} = {};               // map that will store flavor to toggle val (boolean)

  constructor() { }

  ngOnInit() { }

  update_flavor_terms(flavor: string){

    // if flavor is not in searchFlavors, add it and set button color to on 

    // if it is in there, remove it and set color to off 
    //console.log("updating this flavor");
    //console.log(flavor);

    // if key in map, toggle to opposite, else add with value of true 
    if (flavor in this.toggles){
      this.toggles[flavor] = !this.toggles[flavor];
      //console.log("value set to");
      //console.log(this.toggles[flavor]);
    }
    else{
      this.toggles[flavor] = true;
    }

    if (this.toggles[flavor]){
      // put it in the search terms
      this.searchFlavors.push(flavor);
    }
    else{
      // remove it 
      this.searchFlavors.splice(this.searchFlavors.indexOf(flavor), 1);
    }

  }

  remove_ingredient(toRemove: string){
    // Removes the given ingredient from the searchIngredients terms
    this.searchIngredients.splice(this.searchIngredients.indexOf(toRemove), 1);
    this.filter_recipes();
  }

  add_ingredient(newIng: string){
    // Add the given string as a new ingredient to search with 
    if (newIng != ""){
      this.searchIngredients.push(newIng);
    }
  }


  filter_recipes(){
    // do any necessary processing of the terms then pass to recipes comp

    // parse out comma separated into a list 

    // print the search terms 
    console.log("search terms:");
    for(let item of this.searchFlavors){
      console.log(item);
    }
    for(let item of this.searchIngredients){
      console.log(item);
    }

    // trim off spaces in any ingredient search search terms
    var i:number; 
    for (i=0; i<this.searchIngredients.length; i++){
      this.searchIngredients[i] = this.searchIngredients[i].trim();
    }
    this.recipeComp.updateRecipes(this.searchIngredients, this.searchFlavors);
    
  }

}
