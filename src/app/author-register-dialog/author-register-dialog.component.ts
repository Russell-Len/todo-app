import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICredentials } from '../model/ICredentials';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-author-register-dialog',
  templateUrl: './author-register-dialog.component.html',
  styleUrls: ['./author-register-dialog.component.css']
})
export class AuthorRegisterDialogComponent {

  public isProcessing: boolean;

  public credentials: ICredentials = {
    username: '', password: ''
  }

  constructor(
    public dialogRef: MatDialogRef<AuthorRegisterDialogComponent>,
    public authService: AuthService,
    public snackbarService: SnackbarService,
  ) {
    this.isProcessing = false;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onRegisterClick(): void {
    this.isProcessing = true;

    this.authService.register(this.credentials)
      .subscribe({
        next: () => {
          this.snackbarService.openSnackBar("Registered successfully! You may proceed to login.");

          this.isProcessing = false;

          this.dialogRef.close();
        },
        error: (err) => {
          let message: string = '';

          switch (err.status) {
            case 422:
              message = 'Registration failed. Username already in use.';
              break;
            case 400:
              message = 'Registration failed. A bad request was made.';
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

          this.isProcessing = false;

          this.snackbarService.openSnackBar(message);
        }
      });
  }
}
