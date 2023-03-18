import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/domain/interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemRenderService {
  private baseUrl = 'http://localhost:3000/' 
  private pizzaUrl =  this.baseUrl + 'pizzas/' 
  private drinksUrl = this.baseUrl + 'drinks/' 

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Item[]>{
    const fullUrl = this.baseUrl + 'pizzas'
    return this.http.get<Item[]>(fullUrl)
  }

  getPizzas(): Observable<Item[]>{
    const fullUrl = this.baseUrl + 'pizzas'
    return this.http.get<Item[]>(fullUrl)
  }
  
  getDrinks(): Observable<Item[]>{
    const fullUrl = this.baseUrl + 'drinks'
    return this.http.get<Item[]>(fullUrl)
  }

  getPizzaById(id : String): Observable<Item>{
    const fullUrl = this.pizzaUrl + id
    return this.http.get<Item>(fullUrl)
  }

  getDrinksById(id : String): Observable<Item>{
    const fullUrl = this.drinksUrl + id
    return this.http.get<Item>(fullUrl)
  }
}
