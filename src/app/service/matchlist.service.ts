import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchlistService {

  
  baseURL = `http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1`

  constructor(private http: HttpClient) { }

  getmatchlist(){
    return this.http.get<any>(this.baseURL)
  }
  // getSingleMatch(matchId: string): Observable<any> {
  //   const apiUrl = `http://cms.bettorlogic.com/api/BetBuilder/GetFixtures/${matchId}`;
  //   return this.http.get<any>(apiUrl);
  // }
}
