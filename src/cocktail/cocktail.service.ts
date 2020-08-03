import { Injectable } from '@nestjs/common';
import { Cocktail } from './cocktail.entity';
import axios from "axios";

@Injectable()
export class CocktailService {

  async getRandom() {
    try { 
      let response =  await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      let cocktail =  Cocktail.fromJson(response.data["drinks"][0]);
      return cocktail;
    } catch (_) {
      return new Cocktail();
    }
  }

  async getDrink(id: number) {
    try { 
      let response =  await axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      let cocktail =  Cocktail.fromJson(response.data["drinks"][0]);
      return cocktail;
    } catch (_) {
      return new Cocktail();
    }
  }
}
