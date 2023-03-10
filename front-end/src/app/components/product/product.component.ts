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
    this.getProducts();
  }

  private getProducts() {
    this.productService.get().subscribe((productsResponse) => {
      this.products = productsResponse;
      this.fetchTableData();
    });
  }

  private fetchTableData(): void {
    this.dataSource = [];
    this.products.forEach((product, index) => {
      const element = Object.assign({ position: index }, product);

      this.dataSource.push(element);
    });
    this.table.renderRows();
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        this.productService.add(product).subscribe((result: any) => {
          if (result.status) {
            alert(`${result.error.title}`);
          } else {
            this.getProducts();
          }
        });
      }
    });
  }

  public openEditDialog(element: ProductElement): void {
    const product: Product = Object.assign(element);

    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '30%',
      data: product,
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        this.productService.update(product).subscribe((result: any) => {
          if (result.status) {
            alert(`${result.error.title}`);
          } else {
            this.products[element.position] = product;
            this.fetchTableData();
          }
        });
      }
    });
  }

  public openDeleteDialog(element: ProductElement): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: element.name,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.productService.delete(element.id).subscribe((result) => {
          if (result.status) {
            alert(`${result.error.title}`);
          } else {
            this.products.splice(element.position, 1);
            this.fetchTableData();
          }
        });
      }
    });
  }
}
