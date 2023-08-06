import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
  }
}
