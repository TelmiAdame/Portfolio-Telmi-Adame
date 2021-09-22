import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { textTrajectory } from './trajectory.model';
import { Observable } from 'rxjs';

import { PORTFOLIO_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class TrajectoryService {

  constructor(private http: HttpClient) 
  { }

  openText(): Observable<textTrajectory[]>{

    return this.http.get<textTrajectory[]>(`${PORTFOLIO_API}/textsTrajectory`)
  }

}
