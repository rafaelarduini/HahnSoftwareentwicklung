import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ApiService } from './api.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Conten-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService extends ApiService<Product> {
  constructor(httpProduct: HttpClient) {
    super(httpProduct, 'Products', new ProductSerializer());
  }
}

export class ProductSerializer {
  public toJson(product: Product): any {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
