import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICredentials } from '../model/ICredentials';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

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
    public authService: AuthService,
    public snackbarService: SnackbarService,
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    this.authService.login(this.credentials)
      .subscribe({
        next: (token: string) => {
          this.authService.setSession(token);

          this.snackbarService.openSnackBar("Logged in successfully!");
          this.dialogRef.close();
        },
        error: (err) => {
          let message: string = '';

          switch (err.status) {
            case 401:
              message = 'Login failed. Please ensure your credentials are valid.';
              break;
            case 400:
              message = 'Login failed. A bad request was made.';
              break;
            case 500:
              message = 'An error occured on our end. Please try again later.';
              break;
            case 0:
              message = 'Error communicating with server. Please check your internet connection.';
              break;
            default:
              message = 'An unknown error occured';
          }

          this.snackbarService.openSnackBar(message);
        }
      });
  }

}
