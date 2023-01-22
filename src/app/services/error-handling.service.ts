import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(private _snackBar: MatSnackBar) {

  }
  // ----------------------------------------------------------------------------------------------
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  // ----------------------------------------------------------------------------------------------
  public errorHandler(error: HttpErrorResponse) {
     this?.openSnackBar(`An error occurred:${error?.error?.message}`, 'close');
    return throwError(
      'Something went wrong; please try again later.');
  }


}
