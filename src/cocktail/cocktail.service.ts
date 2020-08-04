import { Injectable, HttpService } from '@nestjs/common';
import { Cocktail } from './cocktail.entity';

@Injectable()
export class CocktailService {
  constructor(private httpService: HttpService) { }

  async getRandom(): Promise<Cocktail> {

    return this.httpService.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .toPromise()
      .then(res => res.data["drinks"][0])
      .then(data => Cocktail.fromJson(data))
      .catch(() => new Cocktail())
  }

  async getDrink(id: number): Promise<Cocktail> {
    return this.httpService.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      .toPromise()
      .then(res => res.data["drinks"][0])
      .then(data => Cocktail.fromJson(data))
      .catch(() => new Cocktail())
  }
}
