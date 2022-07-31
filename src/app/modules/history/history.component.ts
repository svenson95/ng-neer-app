import { Component, OnInit } from '@angular/core';
import { versions } from 'src/data/versions';

@Component({
  selector: 'ngnr-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  public versions = versions;
  public orderReversed = false;

  public get orderLabel(): string {
    return this.orderReversed ? 'descending' : 'ascending';
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
