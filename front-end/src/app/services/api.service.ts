import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Resource, Serializer } from '../model/resource';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T extends Resource> {
  private url: string = 'http://localhost:80';

  constructor(
    private httpClient: HttpClient,
    @Inject('endpoint') private endpoint: string,
    @Inject('serializer') private serializer: Serializer
  ) {}

  public add(item: T): Observable<HttpErrorResponse | HttpResponse<T>> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item), {
        observe: 'response',
      })
      .pipe(catchError((error) => of(error)));
  }

  public update(item: T): Observable<HttpErrorResponse | HttpResponse<T>> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item), {
        observe: 'response',
      })
      .pipe(catchError((error) => of(error)));
  }

  public getById(id: number): Observable<HttpErrorResponse | HttpResponse<T>> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`, {
        observe: 'response',
      })
      .pipe(catchError((error) => of(error)));
  }

  public get(): Observable<HttpErrorResponse | HttpResponse<T[]>> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`, {
        observe: 'response',
      })
      .pipe(catchError((error) => of(error)));
  }

  public delete(id: number): Observable<HttpErrorResponse | HttpResponse<T>> {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/id?id=${id}`, {
        observe: 'response',
      })
      .pipe(catchError((error) => of(error)));
  }
}
