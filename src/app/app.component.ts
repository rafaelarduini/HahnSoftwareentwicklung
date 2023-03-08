import { Component } from '@angular/core';
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

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
    console.log(this.clients);
  }
}
