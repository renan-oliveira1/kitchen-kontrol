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

  constructor(private http: HttpClient) { }

  getTableById(): Observable<Table>{
    return this.http.get<Table>(this.pizzaOrderUrl + '/1')
  }

  getTables(): Observable<Table[]>{
    return this.http.get<Table[]>(this.pizzaOrderUrl)
  }

  upgradeStatus(id: string, statusItem: string){
    const status = {
      status: ''
    }

    if (statusItem == "REQUESTED") status.status = "PREPARING"
    else if (statusItem == "PREPARING") status.status = "DONE"
    else if (statusItem = "DONE") status.status = "DELIVERED"

    return this.http.patch(this.pizzaOrderUrl + id, status)
    
  }
}
