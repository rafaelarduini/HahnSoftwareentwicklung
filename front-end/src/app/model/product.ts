export class Product {
  id?: number;
  name = '';
  price: number = 0;
}
export interface ProductElement {
  position: number;
  id: number;
  name: string;
  price: string;
}
