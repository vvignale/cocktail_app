
/*
export class Recipe {

    name: string; 
    ingredients: string; 
    procedure: string;

}
*/

export class Recipe {
    public name: string;
    public ingredients: string;   
    constructor(n: string, i: string) {
        this.name = n;
        this.ingredients = i;
    }
}