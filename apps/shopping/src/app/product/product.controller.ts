import { Body, Controller, Get, Put, HttpCode, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import * as contracts from '@log/contracts';

@Controller('products')
export class ProductController {
  @Get()
  async getAvailableProducts(): Promise<contracts.AvailableProductDto[]> {
    const products = await axios.get('https://fhemery-logistics.herokuapp.com/api/products');
    const stock = await axios.get('https://archi-logicielle.herokuapp.com/api/stock');

    const availableProducts = [] as contracts.AvailableProductDto[]

    products.data.forEach(product => {
      const productStock = stock.data.find(el => el.productId === product._id)

      if(productStock?.quantity > 0) {

        availableProducts.push({
          id: product._id,
          name: product.name,
          description: product.description,
          unitPrice: product.price
        })
      }
    });

    return availableProducts;
  }
}
