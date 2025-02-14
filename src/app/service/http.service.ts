import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, body, { headers });
  }

  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, { headers });
  }

  // Adicione outros métodos HTTP conforme necessário (PUT, DELETE, etc.)
}
