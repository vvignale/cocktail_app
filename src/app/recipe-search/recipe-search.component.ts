import { Component, OnInit, Input } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  @Input() recipeComp: RecipesComponent;

  constructor() { }

  ngOnInit() {
  }

  filter_recipes(searchTerms: string){
    // do any necessary processing of the terms then pass to recipes comp

    console.log("before passing");
    // parse out comma separated into a list 
    let splitSearchTerms: string[] = []; 
    splitSearchTerms = searchTerms.split(',');

    // trim off space 
    var i:number; 
    for (i=0; i<splitSearchTerms.length; i++){
      splitSearchTerms[i] = splitSearchTerms[i].trim();
    }
    this.recipeComp.updateRecipes(splitSearchTerms);
  }

}
