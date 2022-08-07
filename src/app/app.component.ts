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
      label: 'Start',
      link: '',
      index: 0,
    },
    {
      label: 'Articles',
      link: 'articles',
      index: 1,
    },
    {
      label: 'History',
      link: 'history',
      index: 2,
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
        const tab = this.navLinks.find(
          (tab) =>
            url === tab.link || (tab.link !== '' && url.includes(tab.link))
        );
        if (!tab) return console.log('tab not found');

        this.activeLinkIndex = this.navLinks.indexOf(tab);
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
