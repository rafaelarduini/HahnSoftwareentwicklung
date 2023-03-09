import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

const httpOptions = {
  headers: new HttpHeaders({
    'Conten-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  url = 'https://localhost:7209/Clients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    const teste = this.http.get<Client[]>(this.url);
    return teste;
  }

  getById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/id?id=${clientId}`);
  }

  addClient(client: Client): Observable<any> {
    return this.http.post<Client>(this.url, client, httpOptions);
  }

  updateClient(client: Client): Observable<any> {
    return this.http.put<Client>(this.url, client, httpOptions);
  }

  deleteClient(client: Client): Observable<any> {
    return this.http.delete<Client>(this.url, httpOptions);
  }
}
