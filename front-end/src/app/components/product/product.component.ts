import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Product, ProductElement } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';
import { ProductDialogComponent } from '../dialog/product-dialog/product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] = [];
  product!: Product;
  dataSource = [...this.products];
  displayedColumns: string[] = ['position', 'name', 'price', 'edit', 'delete'];
  @ViewChild(MatTable)
  table!: MatTable<ProductElement>;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.get().subscribe((result) => {
      this.products = result;
      this.addData();
    });
  }
  addData() {
    this.products.forEach((c, index) => {
      const data = {
        position: index,
        id: c.id,
        name: c.name,
        price: c.price,
      };
      this.dataSource.push(data);
    });
    this.table.renderRows();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openEditDialog(element: ProductElement): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: { product: element },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDeleteDialog(element: ProductElement): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: { product: element },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
