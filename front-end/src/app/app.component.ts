import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from './components/dialog/client-dialog/client-dialog.component';
import { Client } from './model/client';

export interface ClientElement {
  position: number;
  id: number;
  name: string;
  surname: number;
  email: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HahnSoftwareentwicklungFrontEnd';
  client: Client = new Client();

  constructor(public dialog: MatDialog) {}

  openClientDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
