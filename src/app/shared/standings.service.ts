// import { LeagueTable } from './standings.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  // baseUrl = "https://v3.football.api-sports.io/standings?league=39&season=2022"
    baseUrl = "https://api.football-data.org/v2/competitions/PL/standings/"
    matchesUrl = "https://api.football-data.org/v2/competitions/PL/matches"
  // baseUrl = "http://localhost:3000/standings"
  // baseUrl = "https://v3.football.api-sports.io/teams?league=39&season=2022"
  // baseUrl = "https://api.football-data-api.com/league-tables?key=test85g57&season_id=1625"



  constructor(
    private http: HttpClient) { }

  read(): Observable<any> {
     return this.http.get<any>(this.baseUrl, {
      headers: {
        'X-Auth-Token': '198aae5542e24ceaa7ad4bb54ad561a6'
      }
     });
  }

  readMatches(): Observable<any> {
    return this.http.get<any>(this.matchesUrl, {
     headers: {
       'X-Auth-Token': '198aae5542e24ceaa7ad4bb54ad561a6'
     }
    });
 }

  // read(): Observable<Standings[]> {
  //   return this.http.get<Standings[]>(this.baseUrl)
  // }

  // read(): Observable<any> {
  //   return this.http.get<any>(this.baseUrl, {
  //     headers: {
  //       'x-rapidapi-key': '8f1e80779c668a93f60a9a5c44754407',
  //       'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  //     }
  //   });
  // }
}
