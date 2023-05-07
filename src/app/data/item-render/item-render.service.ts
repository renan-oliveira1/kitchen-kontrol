import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ItemCardapio } from 'src/app/domain/interfaces/ItemCardapio';

@Injectable({
  providedIn: 'root'
})
export class ItemRenderService {
  private baseUrl = 'http://localhost:8080/cardapio' 

  constructor(private http: HttpClient) { }

  getOffers(): Observable<ItemCardapio[]>{
    return this.http.get<ItemCardapio[]>(this.baseUrl)
  }

  getCardapio(): Observable<ItemCardapio[]>{
    return this.http.get<ItemCardapio[]>(this.baseUrl)    
  }

  getItemById(id : String): Observable<ItemCardapio>{
    const fullUrl = this.baseUrl + id
    return this.http.get<ItemCardapio>(fullUrl)
  }

}
