import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { Client } from './model/client';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HahnSoftwareentwicklungFrontEnd';
  clients: Client[] = [];
  client: Client = new Client();

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { client: this.client },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.client = result;
    });
  }
  ngOnInit(): void {
    this.clients = this.clientService.getClients();
    console.log(this.clients);
  }
}
