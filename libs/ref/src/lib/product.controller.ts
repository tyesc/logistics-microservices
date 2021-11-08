import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product, ProductDocument } from './entities/product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from '@log/ref';

@Controller('products')
export class ProductController {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  @Get()
  public async getAll() : Promise<ProductDto[]> {
    return await this.productModel.find().exec()
  }

  @Post()
  public async add(@Body() productDto: ProductDto) {
    await new this.productModel(productDto);
  }
}
