import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemRenderService } from '../item-render/item-render.service';
import { PizzaAddonRenderService } from '../pizza-addon/pizza-addon-render.service';
import { PizzaModifierRenderService } from '../pizza-modifier/pizza-modifier-render.service';
import { Observable } from 'rxjs';
import { PizzaItem } from 'src/app/domain/interfaces/PizzaItem';


@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {
  private baseUrl = 'http://localhost:3000/'
  private pizzaOrderUrl = this.baseUrl + 'pizzaOrders/'

  constructor(private http: HttpClient) { }

  getPizzaOrders(): Observable<PizzaItem[]>{
    return this.http.get<PizzaItem[]>(this.pizzaOrderUrl)
  }

  getPizzaOrdersById(id : String): Observable<PizzaItem>{
    return this.http.get<PizzaItem>(this.pizzaOrderUrl + id)
  }

  upgradeStatus(id: string, statusItem: string){

    const status = {
      status: ''
    }

    if (statusItem == "requested") status.status = "cooking"
    else if (statusItem == "cooking") status.status = "done"
    else if (statusItem = "done") status.status = "delivered"

    return this.http.patch(this.pizzaOrderUrl + id, status)
    
  }
}
