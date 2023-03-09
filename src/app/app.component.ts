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
    this.clients.forEach((c, index) => {
      const data = {
        position: index + 1,
        id: c.id,
        name: c.name,
        surname: c.surname,
        email: c.email,
      };
      this.dataSource.push(data);
    });
    this.table.renderRows();
  }

  removeData(client: Client) {
    console.log(client);
    this.dataSource.splice(1, 0);
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
    this.clientService.getAll().subscribe((result) => {
      alert('suesso');
      this.clients = result;
      console.log(this.clients);
      this.addData();
    });

    //this.clients = this.clientService();
  }
}
