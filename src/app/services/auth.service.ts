import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthor } from '../model/IAuthor';
import { ICredentials } from '../model/ICredentials';
import jwt_decode from 'jwt-decode';
import { IToken } from '../model/IToken';
import { SnackbarService } from './snackbar.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl = `${environment.apiBaseURL}/auth`;

  public token = localStorage.getItem('token');

  public isLoggedIn: boolean = this.token !== null;

  public author: IAuthor = this.token != null ? this.getAuthorFromToken(this.token) : { username: '' };

  public headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`) }

  private tokenSubscription: Subscription = new Subscription();

  private timeout!: number;

  constructor(private http: HttpClient, private snackbarService: SnackbarService, private dialogRef: MatDialog) {
    if (this.token !== null) {
      this.setSession(this.token);
    }
  }

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

    //Set token timeout
    this.timeout = this.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    this.tokenExpirationCounter(this.timeout);
  }

  tokenExpirationCounter(timeout: any): void {
    this.tokenSubscription.unsubscribe();

    this.tokenSubscription = of(null)
      .pipe(delay(timeout))
      .subscribe(() => {
        this.logout();
        this.snackbarService.openSnackBar("Your session has expired. You have been automatically logged out.", 0);
      });
  }

  register(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.authApiUrl}/register`, credentials);
  }

  logout(): void {
    this.tokenSubscription.unsubscribe();

    localStorage.removeItem("token");

    this.token = null;
    this.isLoggedIn = false;
    this.author = { username: '' };

    this.dialogRef.closeAll();
  }

  private getAuthorFromToken(token: string): IAuthor {
    const decodedToken: IToken = jwt_decode(token);
    return {
      username: decodedToken.username
    };
  }

  private getTokenExpirationDate(token: string): Date {
    const decodedToken: IToken = jwt_decode(token);

    const dateToReturn = new Date(0);
    dateToReturn.setUTCSeconds(decodedToken.exp)

    return dateToReturn;
  }
}
