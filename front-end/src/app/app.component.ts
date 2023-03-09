import { Component, ComponentFactoryResolver } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from './components/dialog/client-dialog/client-dialog.component';
import { ProductDialogComponent } from './components/dialog/product-dialog/product-dialog.component';
import { Client } from './model/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HahnSoftwareentwicklungFrontEnd';
  client: Client = new Client();
  showClient: boolean = false;

  constructor(public dialog: MatDialog) {}

  openAddDialog() {
    if (this.showClient) {
      this.openClientDialog();
    } else {
      this.openProductDialog();
    }
  }

  openClientDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openProductDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  handle(event: boolean) {
    console.log(event, 'event');
    // this.showClient = event;
  }

  showClient2() {
    return this.showClient;
  }
}
