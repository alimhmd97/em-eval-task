import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isLoading!: BehaviorSubject<boolean>
  title = 'em-eval-task';
  // ----------------------------------------------------------------------------------------------
  constructor(private loaderSvc: LoaderService) {
  }
  // ----------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.isLoading = this.loaderSvc.getIsLoading()
  }


}
