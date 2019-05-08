import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PanelModel } from './Models/panel-model';
import { Observable, pipe, throwError } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {
  baseUrl = 'http://localhost:3000/panelConfigs';
  queryUrl = '?search=';
  product: any;
  constructor(private httpClient: HttpClient) {}

  get_panels(): Observable<PanelModel[]> {
    return this.httpClient
      .get(this.baseUrl)
      .pipe(
        map((e: PanelModel[]) => e)
      );
  }
  getPanelByName(category: string): Observable<PanelModel[]> {
    return this.httpClient.get<PanelModel[]>(
      this.baseUrl + '?name=' + category
    );
  }

  fetchAll() {
    return this.httpClient.get<PanelModel[]>(this.baseUrl);



  }
  public updateCustomer(id) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
