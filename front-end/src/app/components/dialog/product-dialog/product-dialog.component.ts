import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent {
  clientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addClient() {
    const values = this.clientForm.value;

    const client = new Product();
    client.name = values.name;
    client.price = values.price;

    this.productService.add(client).subscribe((result) => {
      alert('suesso');
    });
  }
}
