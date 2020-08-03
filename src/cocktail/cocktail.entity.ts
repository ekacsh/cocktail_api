export class Cocktail {
   

    static fromJson(json: object): Cocktail {
        var newCocktail = new Cocktail();
        newCocktail.id = json["idDrink"];
        newCocktail.name = json["strDrink"];

        newCocktail.instructions = json["strInstructions"];

        newCocktail.ingredients = new Array<string>();
        for (let i = 1; i <= 15; i++) {
            let ingredient = json["strIngredient" + i];
            if (ingredient != null) {
                newCocktail.ingredients.push(ingredient);
            }
        }

        return newCocktail;
    }

    id: string;

    name: string;

    instructions: string;

    ingredients: Array<string>;
}