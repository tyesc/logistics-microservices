import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product, ProductDocument } from './entities/product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from './dtos';

@Controller('products')
export class ProductController {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  @Get()
  public async getAll(): Promise<ProductDto[]> {
    return await this.productModel.find().exec();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<ProductDto> {
    return await this.productModel.findById(id).exec();
  }

  @Post()
  public async add(@Body() productDto: ProductDto) {
    const product = new this.productModel(productDto);
    await product.save();
    return { id: product.id };
  }
}
