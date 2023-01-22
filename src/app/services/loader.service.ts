import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading$ = new BehaviorSubject(true)

  constructor(private router: Router) {
    this.router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.setIsLoading(true)
    }
    if (event instanceof NavigationEnd) {
      this.setIsLoading(false)
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.setIsLoading(false)
    }
    if (event instanceof NavigationError) {
      this.setIsLoading(false)
    }
  }
  // -----------
  getIsLoading() {
    return this.loading$;
  }

  setIsLoading(newValue: boolean) {
    this.loading$.next(newValue)
  }
}






