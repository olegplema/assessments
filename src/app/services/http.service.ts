import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {IAuth} from "../types/auth";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {IReport} from "../types/report";
import {IGraph} from "../types/graph";
import {IUser} from "../types/user";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private errorService: ErrorService) { }

  private readonly baseUrl = 'https://user-assessment-api.vercel.app'

  login(email: string, password: string): Observable<IAuth>{
    return this.http.post<IAuth>(this.baseUrl + '/api/login', {
      email, password
    }).pipe(
      catchError(this.handleError.bind(this))
    )
  }

  getReports(token: string): Observable<IReport[]>{
    return this.http.get<IReport[]>(this.baseUrl + '/api/userassessments', {
      headers: new HttpHeaders().append('X-Token', token)
    }).pipe(
      catchError(this.handleError.bind(this))
    )
  }

  getGraph(token: string, id: number): Observable<IGraph>{
    return this.http.get<IGraph>(this.baseUrl + '/api/userassessments/graph',{
      params: new HttpParams().append('id', id),
      headers:new HttpHeaders().append('X-Token', token)
    })
  }

  getUsers(token: string): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl + '/api/users',{
      headers:new HttpHeaders().append('X-Token', token)
    }).pipe(
      catchError(this.handleError.bind(this))
    )
  }

  private handleError(error: HttpErrorResponse){
    this.errorService.handle(error.error.error)
    return throwError(() => error.message)
  }
}
