import { Injectable } from '@angular/core';
import { AddToBasketDto, BasketDto, ProductDto } from '@log/contracts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCatalogService {
  constructor(private httpClient: HttpClient) {}

  getAllAvailableProducts(): Observable<ProductDto[]> {
    return this.httpClient.get<ProductDto[]>('/api/referential/products');
  }

  addToCart(_id?: string) {
    this.httpClient.put('/api/shopping/basket', {
      id: _id,
      quantity: 1,
    } as AddToBasketDto);
  }

  getCart(): Observable<BasketDto> {
    return this.httpClient.get<BasketDto>('/api/shopping/basket');
  }
}
