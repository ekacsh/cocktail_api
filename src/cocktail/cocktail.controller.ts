import { Controller, Get, Query, Param, HttpCode, Req } from '@nestjs/common';
import { CocktailService } from './cocktail.service';

@Controller('cocktail')
export class CocktailController {
  constructor(private cocktailService: CocktailService) { }

  @Get()
  getRandom() {
    return this.cocktailService.getRandom();
  }


  @Get(":id")
  getCocktail(@Param() params) {

    return this.cocktailService.getDrink(params.id);
  }
}
