import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaAddon } from 'src/app/domain/interfaces/PizzaAddon';

@Injectable({
  providedIn: 'root'
})
export class PizzaAddonRenderService {
  private baseUrl = 'http://localhost:3000/'
  private bordersUrl = this.baseUrl + 'borders/'

  constructor(private http: HttpClient) { }

  getBorders(): Observable<PizzaAddon[]>{
    return this.http.get<PizzaAddon[]>(this.bordersUrl)
  }

  getBordersById(id : String): Observable<PizzaAddon>{
    const idUrl = this.bordersUrl + id
    return this.http.get<PizzaAddon>(idUrl)
  }
}
