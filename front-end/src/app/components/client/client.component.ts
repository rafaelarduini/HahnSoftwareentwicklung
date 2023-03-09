import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Client, ClientElement } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { ClientDialogComponent } from '../dialog/client-dialog/client-dialog.component';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  client!: Client;
  dataSource = [...this.clients];
  displayedColumns: string[] = [
    'position',
    'name',
    'surname',
    'email',
    'edit',
    'delete',
  ];
  @ViewChild(MatTable)
  table!: MatTable<ClientElement>;

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.clientService.get().subscribe((result) => {
      this.clients = result;
      this.addData();
    });
  }

  private addData(): void {
    this.clients.forEach((client, index) => {
      const data = {
        position: index,
        id: client.id,
        name: client.name,
        surname: client.surname,
        email: client.email,
      };
      this.dataSource.push(data);
    });
    this.table.renderRows();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openEditDialog(element: ClientElement): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { client: element },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDeleteDialog(element: ClientElement): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: { client: element },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
