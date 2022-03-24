import { Controller, Get } from '@nestjs/common';

@Controller('basket')
export class BasketController {
  @Get()
  public basket(): string {
    return 'Basket';
  }
}
