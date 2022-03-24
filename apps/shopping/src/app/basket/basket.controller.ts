import { Body, Controller, Get, Put, HttpCode, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import * as contracts from '@log/contracts';*
import BasketRepository from '../repository/basket-repository';

const basketRepository = new BasketRepository();

@Controller('basket')
export class BasketController {
  @Get()
  async basket(): Promise<contracts.BasketDto> {
    const basket = await basketRepository.getBasket();

    return basket;
  }

  @Put()
  @HttpCode(204)
  async udpateBasket(@Body() addToBasketDto: contracts.AddToBasketDto): Promise<contracts.BasketDto> {
    const basketDto = addToBasketDto
    const product = await axios.get(`https://fhemery-logistics.herokuapp.com/api/products/${basketDto.id}`);

    if(!product) {
      throw new NotFoundException();
    }

    const basket = basketRepository.addProduct(product.data);

    return basket
  }
}
