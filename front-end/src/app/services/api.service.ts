import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Resource, Serializer } from '../model/resource';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T extends Resource> {
  private url: string = 'https://localhost:7209';

  constructor(
    private httpClient: HttpClient,
    @Inject('endpoint') private endpoint: string,
    @Inject('serializer') private serializer: Serializer
  ) {}

  public add(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    console.log(item, 'item');
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  getById(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data) => this.serializer.fromJson(data) as T));
  }

  get(): Observable<T[]> {
    return this.httpClient.get(`${this.url}/${this.endpoint}`).pipe(
      map((data) => {
        return this.convertData(data);
      })
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/id?id=${id}`);
  }

  private convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }
}
