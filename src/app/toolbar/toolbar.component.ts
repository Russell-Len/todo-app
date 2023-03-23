import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorLoginDialogComponent } from '../author-login-dialog/author-login-dialog.component';
import { AuthorLogoutDialogComponent } from '../author-logout-dialog/author-logout-dialog.component';
import { AuthorRegisterDialogComponent } from '../author-register-dialog/author-register-dialog.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
  ) { }

  openLoginDialog(): void {
    this.dialog.open(AuthorLoginDialogComponent);
  }

  openRegisterDialog(): void {
    this.dialog.open(AuthorRegisterDialogComponent);
  }

  openLogoutDialog(): void {
    this.dialog.open(AuthorLogoutDialogComponent);
  }

}
