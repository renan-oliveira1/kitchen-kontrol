import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ItemCardapio } from 'src/app/domain/interfaces/ItemCardapio';
import { ItemCardapioImp } from 'src/app/domain/items/itemCardapioImp';

@Injectable({
  providedIn: 'root'
})
export class ItemRenderService {
  private baseUrl = 'http://localhost:8080/cardapio' 

  constructor(private http: HttpClient) {}

  getOffers(): Observable<ItemCardapio[]>{
    return this.http.get<ItemCardapio[]>(this.baseUrl+"/on-sale")
  }

  getCardapio(): Observable<ItemCardapio[]>{
    return this.http.get<ItemCardapio[]>(this.baseUrl)    
  }

  getItemById(id : String): Observable<ItemCardapio>{
    const fullUrl = this.baseUrl + id
    return this.http.get<ItemCardapio>(fullUrl)
  }

  postItem(itemCardapio : ItemCardapioImp): Observable<ItemCardapioImp>{
    return this.http.post<ItemCardapioImp>(this.baseUrl, itemCardapio)
  }

  deleteItem(ItemCardapio : ItemCardapio){
    return this.http.delete<ItemCardapio>(this.baseUrl + '/' + ItemCardapio.id)
  }

  disableItem(itemCardapio: ItemCardapio){
    return this.http.put<ItemCardapioImp>(this.baseUrl + '/' + itemCardapio.id, itemCardapio)
  }

}
