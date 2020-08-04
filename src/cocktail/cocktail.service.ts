import { Injectable } from '@nestjs/common';
import { Cocktail } from './cocktail.entity';
import axios from "axios";

@Injectable()
export class CocktailService {

  async getRandom(): Promise<Cocktail> {
    try { 
      const response =  await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      const data = response.data["drinks"][0];
      const cocktail =  Cocktail.fromJson(data);
      return cocktail;
    } catch (_) {
      return new Cocktail();
    }
  }

  async getDrink(id: number): Promise<Cocktail> {
    try { 
      const response =  await axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      const cocktail =  Cocktail.fromJson(response.data["drinks"][0]);
      return cocktail;
    } catch (_) {
      return new Cocktail();
    }
  }
}
