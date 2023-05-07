import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addon } from 'src/app/domain/interfaces/Addon';

@Injectable({
  providedIn: 'root'
})
export class PizzaAddonRenderService {
  private baseUrl = 'http://localhost:8080/'
  private bordersUrl = this.baseUrl + 'addons'

  constructor(private http: HttpClient) { }

  getAddons(): Observable<Addon[]>{
    return this.http.get<Addon[]>(this.bordersUrl)
  }

  getAddonsById(id : String): Observable<Addon>{
    const idUrl = this.bordersUrl + id
    return this.http.get<Addon>(idUrl)
  }
}
