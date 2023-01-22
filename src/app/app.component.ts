import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlingService } from './services/error-handling.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isLoading!: BehaviorSubject<boolean>
  title = 'em-eval-task';
  // ----------------------------------------------------------------------------------------------
  constructor(private loaderSvc: LoaderService,public errHandlingSvc: ErrorHandlingService ) {
  }
  // ----------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.isLoading = this.loaderSvc.getIsLoading()
  }
  // ----------------------------------------------------------------------------------------------

}
