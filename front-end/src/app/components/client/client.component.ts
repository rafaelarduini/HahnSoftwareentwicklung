import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
  private clients: Client[] = [];
  public dataSource = [...this.clients];
  public displayedColumns: string[] = [
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
    this.getClients();
  }

  private getClients(): void {
    this.clientService.get().subscribe((result) => {
      if (result.status == 200) {
        const response = result as HttpResponse<Client[]>;
        this.clients = response.body as Client[];
        this.fetchTableData();
      } else {
        const errorResponse = result as HttpErrorResponse;
        alert(`${errorResponse.message}`);
      }
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
          if (result.status == 200) {
            this.getClients();
          } else {
            const response = result as HttpErrorResponse;
            alert(`${response.message}`);
          }
        });
      }
    });
  }

  public openEditDialog(element: ClientElement): void {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '30%',
      data: element,
    });

    dialogRef.afterClosed().subscribe((client: Client) => {
      if (client) {
        this.clientService.update(client).subscribe((result) => {
          if (result.status == 200) {
            this.clients[element.position] = client;
            this.fetchTableData();
          } else {
            const response = result as HttpErrorResponse;
            alert(`${response.message}`);
          }
        });
      }
    });
  }

  public openDeleteDialog(element: ClientElement): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: element.name,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.clientService.delete(element.id).subscribe((result) => {
          if (result.status == 200) {
            this.clients.splice(element.position, 1);
            this.fetchTableData();
          } else {
            const response = result as HttpErrorResponse;
            alert(`${response.message}`);
          }
        });
      }
    });
  }
}
