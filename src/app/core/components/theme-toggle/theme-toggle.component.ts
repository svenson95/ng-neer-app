import { Component } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { Theme, ThemeService } from '@core/shared';

const MAT_MODULES = [MatButtonModule, MatIconModule];

@Component({
  selector: 'ngnr-theme-toggle',
  standalone: true,
  imports: [...MAT_MODULES],
  template: `
    <button
      mat-icon-button
      type="button"
      (click)="toggleTheme()"
      [title]="toggleLabel"
      [attr.aria-label]="toggleLabel"
    >
      <mat-icon> {{ themeIcon }} </mat-icon>
    </button>
  `,
})
export class ThemeToggleComponent {
  public get toggleLabel(): string {
    return `Zum ${this.theme} mode wechseln`;
  }

  public get themeIcon(): string {
    return `${this.theme}_mode`;
  }

  private readonly theme = this.themeService.isDark ? Theme.LIGHT : Theme.DARK;

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
