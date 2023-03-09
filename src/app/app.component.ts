import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogComponent } from './components/dialog/dialog.component';
import { Client } from './model/client';
import { ClientService } from './services/client.service';

export interface ClientElement {
  name: string;
  surname: number;
  email: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HahnSoftwareentwicklungFrontEnd';
  clients: Client[] = [];
  client: Client = new Client();

  displayedColumns: string[] = [
    'position',
    'name',
    'surname',
    'email',
    'delete',
  ];
  dataSource = [...this.clients];

  @ViewChild(MatTable)
  table!: MatTable<ClientElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.clients.length);
    this.dataSource.push(this.clients[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
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
    this.addData();
  }
}
