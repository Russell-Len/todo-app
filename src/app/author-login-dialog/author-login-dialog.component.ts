import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICredentials } from '../model/ICredentials';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-author-login-dialog',
  templateUrl: './author-login-dialog.component.html',
  styleUrls: ['./author-login-dialog.component.css']
})
export class AuthorLoginDialogComponent {

  public credentials: ICredentials = {
    username: '', password: ''
  }

  constructor(
    public dialogRef: MatDialogRef<AuthorLoginDialogComponent>,
    public authService: AuthService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    this.authService.login(this.credentials)
      .subscribe((token: string) => {
        localStorage.setItem('token', token);
        this.authService.isLoggedIn = true;
        this.authService.setAuthor(token);

        this.dialogRef.close();
      });
  }

}
