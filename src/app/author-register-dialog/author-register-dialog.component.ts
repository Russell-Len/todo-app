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
  public credentials: ICredentials = {
    username: '', password: ''
  }

  constructor(
    public dialogRef: MatDialogRef<AuthorRegisterDialogComponent>,
    public authService: AuthService,
    public snackbarService: SnackbarService,
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onRegisterClick(): void {
    this.authService.register(this.credentials)
      .subscribe(() => {
        this.snackbarService.openSnackBar("Registered successfully!");
        this.dialogRef.close();
      });
  }
}
