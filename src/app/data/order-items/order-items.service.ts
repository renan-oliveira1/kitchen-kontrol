import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from 'src/app/domain/interfaces/Table';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {
  private baseUrl = 'http://localhost:8080/'
  private ordersUrl = this.baseUrl + 'tables'

  constructor(private http: HttpClient) { }

  getOrderItems(): Observable<Table[]>{
    return this.http.get<Table[]>(this.ordersUrl)
  }

  getTableById(id : String): Observable<Table>{
    const idUrl = this.ordersUrl + id
    return this.http.get<Table>(idUrl)
  }
}
