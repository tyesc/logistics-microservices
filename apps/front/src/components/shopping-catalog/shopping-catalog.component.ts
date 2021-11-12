import { Component } from '@angular/core';
import { BasketDto, ProductDto } from '@log/contracts';
import { Observable, of } from 'rxjs';
import { ShoppingCatalogService } from './shopping-catalog.service';

@Component({
  selector: 'log-shopping-catalog',
  templateUrl: './shopping-catalog.component.html',
  styleUrls: ['./shopping-catalog.component.scss'],
})
export class ShoppingCatalogComponent {
  products: Observable<ProductDto[]>;
  shoppingCart: Observable<BasketDto> = of({} as BasketDto);

  constructor(private service: ShoppingCatalogService) {
    this.products = this.service.getAllAvailableProducts();
    this.shoppingCart = this.service.getCart();
  }

  addToCart(_id?: string) {
    this.service.addToCart(_id);
  }
}
