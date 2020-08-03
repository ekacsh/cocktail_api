import { Module, HttpModule } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CocktailController } from './cocktail.controller';

@Module({
  imports: [HttpModule],
  providers: [CocktailService],
  controllers: [CocktailController]
})
export class CocktailModule {
}
