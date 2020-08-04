import { Controller, Get, Param } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './cocktail.entity';

@Controller('cocktail')
export class CocktailController {
  constructor(private cocktailService: CocktailService) { }

  @Get()
  async getRandom() : Promise<Cocktail> {
    return await this.cocktailService.getRandom();
  }


  @Get(":id")
  async getCocktail(@Param('id') id: number) : Promise<Cocktail> {
    return await this.cocktailService.getDrink(id);
  }
}
