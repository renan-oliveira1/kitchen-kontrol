import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/domain/interfaces/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {
  private baseUrl = 'http://localhost:3000/'
  private ordersUrl = this.baseUrl + 'orderItems/'

  constructor(private http: HttpClient) { }

  getOrderItems(): Observable<OrderItem[]>{
    return this.http.get<OrderItem[]>(this.ordersUrl)
  }

  getOrderItemById(id : String): Observable<OrderItem>{
    const idUrl = this.ordersUrl + id
    return this.http.get<OrderItem>(idUrl)
  }
}
