
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, finalize, catchError, tap, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { ErrorHandlingService } from '../services/error-handling.service';
@Injectable()
export class ApiCallsInterceptor implements HttpInterceptor {
  constructor(private loadingSvc: LoaderService,private errHandlingSvc:ErrorHandlingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingSvc.setIsLoading(true);
    return next.handle(req).pipe(
      catchError(this.errHandlingSvc.errorHandler),
            finalize(() => {
      this.loadingSvc.setIsLoading(false)
    } )

    )
    ;
  }
 }