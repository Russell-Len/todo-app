import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-author-logout-dialog',
  templateUrl: './author-logout-dialog.component.html',
  styleUrls: ['./author-logout-dialog.component.css']
})
export class AuthorLogoutDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AuthorLogoutDialogComponent>,
    public authService: AuthService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onProceedClick(): void {
    this.authService.logout();
    this.dialogRef.close();
  }
}
