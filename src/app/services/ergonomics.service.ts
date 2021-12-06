import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErgonomicsService {

  constructor(public router: Router,private httpClient: HttpClient) {}

  // API path
  base_path = 'http://localhost:3000/';

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  public getAllErgoContent(id:any,token:any):Observable<any>{
    return this.httpClient.post<any>(this.base_path+'ergo_content/getAllErgoContent',{id,token}).pipe(
      map((res) => {
          return res;
      }),
      catchError(this.handleError));
  }

  public getAllErgoSequence(id:any,token:any):Observable<any>{
    return this.httpClient.post<any>(this.base_path+'ergo_sequence/getAllErgoSequence',{id,token}).pipe(
      map((res) => {
          return res;
      }),
      catchError(this.handleError));
  }

  public changeErgoSequence(id:any,token:any,values:any):Observable<any>{
    return this.httpClient.post<any>(this.base_path+'ergo_sequence/changeErgoSequence',{id,token,values}).pipe(
      map((res) => {
          return res;
      }),
      catchError(this.handleError));
  }

  public createErgoContent(id:any,token:any,values:any):Observable<any>{
    return this.httpClient.post<any>(this.base_path+'ergo_content/createErgoContent',{id,token,values}).pipe(
      map((res) => {
          return res;
      }),
      catchError(this.handleError));
  }
}
