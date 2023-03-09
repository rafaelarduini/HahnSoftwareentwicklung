import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ClientElement } from 'src/app/app.component';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
})
export class ClientTableComponent {
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
    this.openDeleteDialog();
    // this.clientService.delete(data.id).subscribe((result) => {
    //   this.dataSource.splice(data.position, 1);
    //   this.table.renderRows();
    // });
  }

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: { client: this.client },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.client = result;
    });
  }
  ngOnInit(): void {
    this.clientService.get().subscribe((result) => {
      this.clients = result;
      this.addData();
    });
  }
}
