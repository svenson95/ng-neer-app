import { Component, OnInit } from '@angular/core';
import { versions } from 'src/data/versions';

@Component({
  selector: 'ngnr-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  public versions = versions;
  public orderReversed = true;

  constructor() {
    if (this.orderReversed) this.versions = versions.reverse();
  }

  public get orderLabel(): string {
    const order = this.orderReversed ? 'descending' : 'ascending';
    return `Sort ${order}`;
  }

  public isDateString(str: string): boolean {
    console.log(new Date(str));
    return true;
  }

  public reverseList(): void {
    this.versions = versions.reverse();
    this.orderReversed = !this.orderReversed;
  }
}
