import * as contracts from '@log/contracts';

export default class BasketRepository {
  private basket = new Map<string, contracts.BasketDto>();
  private key = 'basket';

  constructor() {
    this.basket.set(this.key, { totalPrice: 0, products: [] });
  }

  public getBasket(): contracts.BasketDto {
    return this.basket.get(this.key);
  }

  public addProduct(productDTO: contracts.ProductsAddedToBasketDto): contracts.BasketDto {

    const basket = this.basket.get(this.key);
    basket.products.push(productDTO);

    return basket;
  }

  public emptyBasket(): string {
    this.basket.set(this.key, { totalPrice: 0, products: [] });
    return 'basket emptied';
  }



}
