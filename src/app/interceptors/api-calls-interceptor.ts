
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';
@Injectable()
export class ApiCallsInterceptor implements HttpInterceptor {
  constructor(private loadingSvc: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingSvc.setIsLoading(true);
    return next.handle(req).pipe(finalize(() => {
      this.loadingSvc.setIsLoading(false)
    }
    )
    );
  }
}