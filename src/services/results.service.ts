import { Response } from './../models/response';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  constructor(private http: HttpClient) {}

  addResults(number1: number, number2: number): Observable<Response>{
    return this.http.post<Response>(environment.urlApi + '/api/ms-core/results/add-results', {"number1": number1, "number2": number2});
  }
}
