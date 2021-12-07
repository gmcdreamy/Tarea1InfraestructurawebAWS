import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Results } from './results';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  apiUrl = 'https://swapi.dev/api/planets/'

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { 

  }
  getPlanets(): Observable<Results>{
    return this.http.get<Results>(this.apiUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error:any){
    return throwError(error);
  }
}
