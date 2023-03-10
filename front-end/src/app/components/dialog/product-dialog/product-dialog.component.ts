import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent {
  productForm!: FormGroup;
  product = new Product();
  isEdit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public productData: Product
  ) {
    if (productData) {
      this.product = productData;
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.min(0.01)],
    });
  }

  onConfirm(): void {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
