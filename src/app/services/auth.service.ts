import { HttpClient } from '@angular/common/http';
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
  public author: IAuthor =
    this.token != null ? this.getAuthor(this.token) : { authorId: 0, username: '' };

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
    this.author = { authorId: 0, username: '' };
  }

  private getAuthor(token: string): IAuthor {
    const decodedToken: IToken = jwt_decode(token);
    return {
      authorId: decodedToken.authorId,
      username: decodedToken.username
    }
  }

  setAuthor(token: string): void {
    this.author = this.getAuthor(token)
  }

}
