import { Standings } from './standings.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  baseUrl = "http://localhost:3000/standings"

  constructor(
    private http: HttpClient) { }

  read(): Observable<Standings[]> {
    return this.http.get<Standings[]>(this.baseUrl)
  }
}
