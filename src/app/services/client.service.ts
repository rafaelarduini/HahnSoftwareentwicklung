import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  public getClients(): Client[] {
    let client = new Client();
    client.id = 1;
    client.name = 'Rafael';
    client.surname = 'Arduini';
    client.email = 'rafaelarduini@hotmail.com';

    return [client];
  }
}
