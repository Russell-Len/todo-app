import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, snackbarDuration: number = 5): void {
    let snackBarRef = this._snackBar.open(
      message,
      'OK',
      { duration: snackbarDuration * 1000 }
    );

    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }

}
