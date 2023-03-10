import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends ApiService<Client> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'Clients', new ClientSerializer());
  }
}
export class ClientSerializer {
  fromJson(json: any): Client {
    const client = new Client();
    client.id = json.id;
    client.name = json.name;
    client.surname = json.surname;
    client.email = json.email;

    return client;
  }

  toJson(client: Client): any {
    return {
      id: client.id,
      name: client.name,
      surname: client.surname,
      email: client.email,
    };
  }
}
