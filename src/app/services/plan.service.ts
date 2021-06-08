import { PnnResponse } from './../models/PnnResponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private baseUrl = 'MiBaseUrl';

  constructor(private http: HttpClient) { }

  getPnnByNumber(phone: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('number', phone.toString());
    return this.http.get('https://pnn-api.herokuapp.com/PNN/v1/api/getPnnByNumber', { params });
  }
}
