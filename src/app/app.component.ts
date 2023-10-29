import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  NavigationEnd,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'ngnr-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  public isLoading: boolean = false;

  public activeLinkIndex = -1;

  public navLinks = [
    {
      label: 'Roadmap',
      link: '',
      index: 0,
    },
    {
      label: 'History',
      link: 'history',
      index: 1,
    },
  ];

  private subscription: Subscription = new Subscription();

  constructor(private router: Router) {
    this.subscription.add(
      this.router.events.subscribe((event) => {
        if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading = false;
        }
      })
    );

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url.substring(1);
        if (url === "" || url.includes("articles/")) {
          this.activeLinkIndex = 0;
        } else if (url === "history") {
          this.activeLinkIndex = 1;
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
