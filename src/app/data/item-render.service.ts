import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../domain/interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemRenderService {
  private baseUrl = 'http://localhost:3000/' 

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
}
