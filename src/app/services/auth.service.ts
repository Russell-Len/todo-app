import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthor } from '../model/IAuthor';
import { ICredentials } from '../model/ICredentials';
import jwt_decode from 'jwt-decode';
import { IToken } from '../model/IToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl = `${environment.apiBaseURL}/auth`;

  public token = localStorage.getItem('token');

  public isLoggedIn: boolean = this.token !== null;

  public author: IAuthor = this.token != null ? this.getAuthorFromToken(this.token) : { username: '' };

  public headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`) }

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.authApiUrl}/login`, credentials, { responseType: 'text' });
  }

  setSession(token: string): void {
    localStorage.setItem('token', token);

    this.token = token;
    this.isLoggedIn = true;
    this.author = this.getAuthorFromToken(token);

    //Update headers for task.service usage
    this.headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) }
  }

  register(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.authApiUrl}/register`, credentials);
  }

  logout(): void {
    localStorage.removeItem("token");

    this.token = null;
    this.isLoggedIn = false;
    this.author = { username: '' };
  }

  private getAuthorFromToken(token: string): IAuthor {
    const decodedToken: IToken = jwt_decode(token);
    return {
      username: decodedToken.username
    };
  }
}
