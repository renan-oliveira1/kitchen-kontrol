import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from 'src/app/domain/interfaces/Table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrl = 'http://localhost:8080/'
  private pizzaOrderUrl = this.baseUrl + 'tables'
  private patchUrl = ''

  constructor(private http: HttpClient) { }

  getTableById(): Observable<Table>{
    return this.http.get<Table>(this.pizzaOrderUrl + '/1')
  }

  getTables(): Observable<Table[]>{
    return this.http.get<Table[]>(this.pizzaOrderUrl)
  }

  upgradeStatus(id: string, statusItem: string, itemType: string){
    const status = {
      status: ''
    }

    if(itemType === "PIZZA"){
      this.patchUrl = this.baseUrl + 'pizzas/'
    } else {
      this.patchUrl = this.baseUrl + 'drinks/'
    }

    console.log(id)

    if (statusItem === "REQUESTED") status.status = "PREPARING"
    else if (statusItem === "PREPARING") status.status = "DONE"
    else if (statusItem === "DONE") status.status = "DELIVERED"

    return this.http.patch(this.patchUrl + id, status)
    
  }
}
