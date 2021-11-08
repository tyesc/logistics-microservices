import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  _id?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ean: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categories: string[];

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
