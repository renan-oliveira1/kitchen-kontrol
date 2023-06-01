import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from 'src/app/domain/interfaces/Table';
import { Pizza } from 'src/app/domain/interfaces/Pizza';
import { Drink } from 'src/app/domain/interfaces/Drink';
import { PizzaInput } from 'src/app/domain/items/Pizza';
import { DrinkInput } from 'src/app/domain/items/Drink';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {
  private baseUrl = 'http://localhost:8080/'
  private ordersUrl = this.baseUrl + 'tables'
  private pizzasUrl = this.baseUrl + 'pizzas'
  private drinksUrl = this.baseUrl + 'drinks'

  constructor(private http: HttpClient) { }

  getOrderItems(): Observable<Table[]>{
    return this.http.get<Table[]>(this.ordersUrl)
  }

  getTableById(id : String): Observable<Table>{
    const idUrl = this.ordersUrl + id
    return this.http.get<Table>(idUrl)
  }

  postPizzaOrder(pizza : PizzaInput): Observable<Pizza>{
    return this.http.post<Pizza>(this.pizzasUrl, pizza)
  }

  postDrinkOrder(drink : DrinkInput): Observable<Drink>{
    return this.http.post<Drink>(this.drinksUrl, drink)
  }
}
