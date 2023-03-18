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

  upgradeStatus(id: String){
    var pizzaItem : PizzaItem = {
      id: 1,
      pizzas:'',
      border:'',
      status:'',
      size:'',
      observation:'',
      table :''
    }
    this.getPizzaOrdersById(id).subscribe((data) => {pizzaItem = data})

    var status = {
      status: ''
    }
  

    if (pizzaItem.status == "requested") status.status = "cooking"
    else if (pizzaItem.status == "cooking") status.status = "done"
    else status.status = "delivered"
    
    this.http.put(this.pizzaOrderUrl + id, status)
  }
}
