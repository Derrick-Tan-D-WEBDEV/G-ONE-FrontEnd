import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of,throwError } from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public router: Router,private httpClient: HttpClient) {}

  // API path
  base_path = 'http://localhost/API_GONE/';

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

    public loginAdmin(username:any,password:any):Observable<any>{
        return this.httpClient.post<any>(this.base_path+'Admin/login.php',{username,password}).pipe(
          map((res) => {
              return res;
          }),
          catchError(this.handleError));
    }

    public loginSAdmin(username:any,password:any):Observable<any>{
      return this.httpClient.post<any>(this.base_path+'SAdmin/login.php',{username,password}).pipe(
        map((res) => {
            return res;
        }),
        catchError(this.handleError));
    }

    public login(username:any,password:any):Observable<any>{
      return this.httpClient.post<any>(this.base_path+'User/login.php',{username,password}).pipe(
        map((res) => {
            return res;
        }),
        catchError(this.handleError));
    }

    public logout(){
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('Role');
        localStorage.removeItem('Username');
        localStorage.removeItem('ID');
        localStorage.removeItem('Permission');
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }

    public verifyToken(token:any){
        if(token == false){
            alert("Invalid Token! ⚠Someone might be accessing your account!");
            this.logout();
            this.router.navigate(['login']);
        }
        else if(token === true){
            return;
        }
        else{
            this.setAccessToken(token);
        }
    }

    setAccessToken(token:any){
        localStorage.setItem('ACCESS_TOKEN',token);
    }
    
    setUsername(username:any){
        localStorage.setItem('Username',username);
    }
    
    setRole(role:any){
        localStorage.setItem('Role',role)
    }

    setID(id:any){
        localStorage.setItem('ID',id)
    }

    setCredits(credits:any){
        localStorage.setItem('Credits',credits)
    }

    setProfilePic(profile_pic:any){
        return localStorage.setItem('ProfilePic',profile_pic);
    }

    getRole(){
        return localStorage.getItem('Role');
    }

    getProfilePic(){
        return localStorage.getItem('ProfilePic');
    }

    getUsername(){
        return localStorage.getItem('Username');
    }

    getAccessToken(){
        return localStorage.getItem('ACCESS_TOKEN');
    }

    getCredits(){
        return localStorage.getItem('Credits');
    }

    getUserID(){
        return localStorage.getItem('ID');
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRole = route.data.expectedRole;
        const currentRole = this.getRole();
        if (!this.isAuthenticated() || expectedRole != currentRole) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
