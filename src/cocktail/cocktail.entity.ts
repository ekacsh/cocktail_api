export class Cocktail {
   

    static fromJson(json: Record<string, unknown>): Cocktail {
        const newCocktail = new Cocktail();
        newCocktail.id = json["idDrink"] as string;
        newCocktail.name = json["strDrink"] as string;

        newCocktail.instructions = json["strInstructions"] as string;

        newCocktail.ingredients = new Array<string>();
        for (let i = 1; i <= 15; i++) {
            const ingredient = json["strIngredient" + i]  as string;
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