import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Size } from 'src/app/domain/interfaces/PizzaModifier';


@Injectable({
  providedIn: 'root'
})
export class PizzaModifierRenderService {
  private baseUrl = 'http://localhost:8080/'
  private pizzaSizeUrl = this.baseUrl + 'sizes'

  constructor(private http: HttpClient) { }

  getSizes(): Observable<Size[]>{
    return this.http.get<Size[]>(this.pizzaSizeUrl)
  }

  getSizesById(id : String): Observable<Size>{
    const idUrl = this.pizzaSizeUrl + id
    return this.http.get<Size>(idUrl)
  }
}
