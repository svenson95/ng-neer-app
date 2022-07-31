import { Component } from '@angular/core';
import { Theme, ThemeService } from '../../shared/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngnr-theme-toggle',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <button
      mat-icon-button
      type="button"
      (click)="theme.toggle()"
      [title]="toggleLabel"
      [attr.aria-label]="toggleLabel"
    >
      <mat-icon> {{ themeIcon }} </mat-icon>
    </button>
  `,
})
export class ThemeToggleComponent {
  public get toggleLabel(): string {
    return `Zum ${this.theme.isDark ? Theme.LIGHT : Theme.DARK} mode wechseln`;
  }

  public get themeIcon(): string {
    return `${this.theme.isDark ? Theme.LIGHT : Theme.DARK}_mode`;
  }

  public Theme = Theme;

  constructor(public theme: ThemeService) {}
}
