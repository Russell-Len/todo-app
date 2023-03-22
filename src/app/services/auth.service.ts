import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredentials } from '../model/ICredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl = `${environment.apiBaseURL}/auth`;

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.authApiUrl}/login`, credentials, { responseType: 'text' });
  }

  //register

  //logout

}