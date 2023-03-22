import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredentials } from '../model/ICredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl = `${environment.apiBaseURL}/auth`;

  public isLoggedIn: boolean = localStorage.getItem('token') !== null;

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.authApiUrl}/login`, credentials, { responseType: 'text' });
  }

  register(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.authApiUrl}/register`, credentials);
  }

  logout(): void {
    localStorage.removeItem("token");
    this.isLoggedIn = false;
  }

}
