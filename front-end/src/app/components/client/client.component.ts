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
    this.clientService.get().subscribe((clientsResponse) => {
      this.clients = clientsResponse;
      this.fetchTableData();
    });
  }

  private fetchTableData(): void {
    this.dataSource = [];
    this.clients.forEach((client, index) => {
      const element = Object.assign({ position: index }, client);

      this.dataSource.push(element);
    });
    this.table.renderRows();
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((client: Client) => {
      if (client) {
        this.clientService.add(client).subscribe((result) => {
          if (result) {
            this.clients.push(client);
            this.fetchTableData();
          }
        });
      }
    });
  }

  public openEditDialog(element: ClientElement): void {
    const client: Client = Object.assign(element);

    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '30%',
      data: client,
    });

    dialogRef.afterClosed().subscribe((client: Client) => {
      if (client) {
        this.clientService.update(client).subscribe((result) => {
          if (result) {
            this.clients[element.position] = client;
            this.fetchTableData();
          }
        });
      }
    });
  }

  public openDeleteDialog(element: ClientElement): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: element.name,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.clientService.delete(element.id).subscribe((result) => {
          if (result) {
            this.clients.splice(element.position, 1);
            this.fetchTableData();
          }
        });
      }
    });
  }
}
