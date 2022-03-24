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

  public addProduct(basketDto: any, productDTO: any): contracts.BasketDto {

    const basket = this.basket.get(this.key);

    let price = basket.totalPrice;

    for (let i = 0 ; basketDto.quantity > i; i++) {
      basket.products.push(productDTO);

      price += productDTO.price;
    }

    basket.totalPrice = price;

    return basket;
  }

  public emptyBasket(): string {
    this.basket.set(this.key, { totalPrice: 0, products: [] });
    return 'basket emptied';
  }



}
