import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComTH';

  constructor(private router: Router, private spinner: NgxSpinnerService) {
		router.events.subscribe((event: RouterEvent) => {
			this.navigationInterceptor(event);
		});
	}

  navigationInterceptor(event: RouterEvent) {
		switch (true) {
			case event instanceof NavigationStart:
				this.spinner.show();
				break;

			case event instanceof NavigationEnd:
			case event instanceof NavigationCancel:
			case event instanceof NavigationError:
				this.spinner.hide();
				break;
		}
	}
}
