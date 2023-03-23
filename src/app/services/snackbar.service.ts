import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string): void {
    let snackBarRef = this._snackBar.open(
      message,
      'OK',
      { duration: 5000 }
    );

    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }

}
