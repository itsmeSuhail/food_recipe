import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { authProps, baseUrl } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  constructor(private http: HttpClient) { }
  authSubject = new BehaviorSubject<any>({
    user: null
  });
  loginFetch(logData: authProps): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Assuming the content type is JSON
    });

    // Include withCredentials:true in the options object
    const options = { headers, withCredentials: true };
    return this.http.post(`${baseUrl}/auth/login`, logData, options);
  }
  registerFetch(RegData: authProps): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Assuming the content type is JSON
    });

    // Include withCredentials:true in the options object
    const options = { headers, withCredentials: true };
    return this.http.post(`${baseUrl}/auth/register`, RegData, options);
  }
  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer token`,
      'Content-Type': "application/json",
    })
    return this.http.get(`${baseUrl}/auth/65fe5abb3ab4052613efcb65`, { headers }).pipe(
      tap((user: any) => {
        const currentState = this.authSubject.value
        this.authSubject.next({ ...currentState, user })
      })
    )
  }
  logoutUser() {
    console.log("logout");
    //state would be empty
    this.authSubject.next({});
  }
}
