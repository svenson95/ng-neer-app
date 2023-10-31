import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularVersion } from './models/angular-version';
import { versions } from 'src/data/versions';

@Component({
  selector: 'ngnr-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  private versions = new BehaviorSubject<Array<AngularVersion>>(versions);

  public readonly versions$ = this.versions.asObservable();

  public isOrderReversed: boolean = true;

  private get reversedVersions(): Array<AngularVersion> {
    return [...versions.reverse()];
  }

  constructor() {
    if (this.isOrderReversed) this.setVersions(this.reversedVersions);
  }

  public get orderLabel(): string {
    const order = this.isOrderReversed ? 'descending' : 'ascending';
    return `Sort ${order}`;
  }

  public reverseList(): void {
    this.setVersions(this.reversedVersions);
    this.isOrderReversed = !this.isOrderReversed;
  }

  private setVersions(array: Array<AngularVersion>): void {
    this.versions.next(array);
  }
}
