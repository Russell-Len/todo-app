import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    let snackBarRef = this._snackBar.open(
      message,
      'OK',
      { duration: 3000 }
    );

    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }
}
