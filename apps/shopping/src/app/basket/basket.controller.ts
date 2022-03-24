import {Body, Controller, Get, Put, HttpCode, NotFoundException, HttpException, HttpStatus, Post} from '@nestjs/common';
import axios from 'axios';
import * as contracts from '@log/contracts';
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

    const basket = basketRepository.addProduct(basketDto, product.data);

    return basket
  }

  @Post("/checkout")
  @HttpCode(200)
  async checkoutBasket(): Promise<any> {
    const basket = await basketRepository.getBasket();
    if (!basket.products.length) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Basket is already empty',
      }, HttpStatus.FORBIDDEN);
    }
    // const response = await.post('url/api/order',{contrat: })
    const order = 1;
    if(!order) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Error creating order',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return basketRepository.emptyBasket();
  }
}
