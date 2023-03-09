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
  showClient!: boolean;

  constructor(public dialog: MatDialog) {}
}
