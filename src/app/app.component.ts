import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ClientDialogComponent } from './components/dialog/client-dialog/client-dialog.component';
import { Client } from './model/client';
import { ClientService } from './services/client.service';

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
        position: index,
        id: c.id,
        name: c.name,
        surname: c.surname,
        email: c.email,
      };
      this.dataSource.push(data);
    });
    this.table.renderRows();
  }

  removeData(data: ClientElement) {
    this.clientService.deleteClient(data.id).subscribe((result) => {
      this.dataSource.splice(data.position, 1);
      this.table.renderRows();
    });
  }

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
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
      this.clients = result;
      this.addData();
    });
  }
}
