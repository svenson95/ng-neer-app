import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from './core/shared/storage.service';

const THEME_STORAGE_KEY = 'ng-neer-theme';
export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDark = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LocalStorage) private storage: Storage
  ) {
    this.initializeThemeFromPreferences();
  }

  public toggle(): void {
    this.isDark = !this.isDark;
    this.updateRenderedTheme();
  }

  public initializeThemeFromPreferences(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY);

    if (storedPreference) {
      this.isDark = storedPreference === Theme.DARK;
    } else {
      this.isDark =
        matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    }

    const themeEl = this.document.createElement('link');
    themeEl.id = 'ng-neer-theme';
    themeEl.rel = 'stylesheet';
    themeEl.href = `assets/${this.getThemeName()}-theme.scss`;
    themeEl.type = 'text/html';
    this.document.head.appendChild(themeEl);
  }

  private getThemeName(): string {
    return this.isDark ? Theme.DARK : Theme.LIGHT;
  }

  private updateRenderedTheme(): void {
    const themeEl = this.document.getElementById(
      'ng-neer-theme'
    ) as HTMLLinkElement | null;
    if (themeEl) {
      themeEl.href = `assets/${this.getThemeName()}-theme.scss`;
      themeEl.type = 'text/html';
    }

    this.storage.setItem(THEME_STORAGE_KEY, this.getThemeName());
  }
}
