import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorLoginDialogComponent } from '../author-login-dialog/author-login-dialog.component';
import { AuthorRegisterDialogComponent } from '../author-register-dialog/author-register-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog) { }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(AuthorLoginDialogComponent);

    dialogRef.afterClosed().subscribe();
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(AuthorRegisterDialogComponent);

    dialogRef.afterClosed().subscribe();
  }

}
