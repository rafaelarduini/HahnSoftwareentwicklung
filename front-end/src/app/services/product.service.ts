import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  fromJson(json: any): Product {
    const product = new Product();
    product.id = json.id;
    product.name = json.name;
    product.price = json.price;

    return product;
  }

  toJson(product: Product): any {
    return {
      id: product.id,
      name: product.name,
    };
  }
}
