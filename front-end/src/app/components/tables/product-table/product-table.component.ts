import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Product, ProductElement } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  title = 'HahnSoftwareentwicklungFrontEnd';
  products: Product[] = [];
  product: Product = new Product();

  displayedColumns: string[] = ['position', 'name', 'price', 'delete'];
  dataSource = [...this.products];

  @ViewChild(MatTable)
  table!: MatTable<ProductElement>;

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

  removeData(data: ProductElement) {
    this.openDeleteDialog();
    // this.productService.delete(data.id).subscribe((result) => {
    //   this.dataSource.splice(data.position, 1);
    //   this.table.renderRows();
    // });
  }

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: { product: this.product },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.product = result;
    });
  }
  ngOnInit(): void {
    this.productService.get().subscribe((result) => {
      this.products = result;
      this.addData();
    });
  }
}
