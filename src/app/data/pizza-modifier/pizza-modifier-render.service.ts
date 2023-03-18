import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaModifier } from 'src/app/domain/interfaces/PizzaModifier';

@Injectable({
  providedIn: 'root'
})
export class PizzaModifierRenderService {
  private baseUrl = 'http://localhost:3000/'
  private pizzaSizeUrl = this.baseUrl + 'sizes/'

  constructor(private http: HttpClient) { }

  getBorders(): Observable<PizzaModifier[]>{
    return this.http.get<PizzaModifier[]>(this.pizzaSizeUrl)
  }

  getBordersById(id : String): Observable<PizzaModifier>{
    const idUrl = this.pizzaSizeUrl + id
    return this.http.get<PizzaModifier>(idUrl)
  }
}
