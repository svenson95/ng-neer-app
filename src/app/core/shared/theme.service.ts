import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { LocalStorage } from './storage.service';

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

  private get themeName(): string {
    return this.isDark ? Theme.DARK : Theme.LIGHT;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LocalStorage) private storage: Storage
  ) {
    this.initializeThemeFromPreferences();
  }

  public toggle(): void {
    this.isDark = !this.isDark;
    this.changeAppTheme();
  }

  public initializeThemeFromPreferences(): void {
    const storedTheme = this.storage.getItem(THEME_STORAGE_KEY);

    if (storedTheme) {
      this.isDark = storedTheme === Theme.DARK;
    } else {
      this.isDark = matchMedia?.('(prefers-color-scheme: dark)').matches;
    }

    this.appendLinkElement(THEME_STORAGE_KEY, this.themeName);
    this.appendMetaElement(this.isDark);
  }

  private changeAppTheme(): void {
    this.updateLinkElement(THEME_STORAGE_KEY, this.themeName);
    this.updateMetaElement(this.isDark);
    this.storage.setItem(THEME_STORAGE_KEY, this.themeName);
  }

  private appendLinkElement(key: string, theme: string): void {
    const link = this.document.createElement('link');
    link.id = key;
    link.rel = 'stylesheet';
    link.href = `${theme}-theme.css`;
    this.document.head.appendChild(link);
  }

  private updateLinkElement(key: string, theme: string): void {
    const link = this.document.getElementById(key) as
      | HTMLLinkElement
      | undefined;
    if (!link) return;
    link.href = `${theme}-theme.css`;
  }

  private appendMetaElement(isDark: boolean): void {
    const meta = this.document.createElement('meta');
    meta.name = 'theme-color';
    // TODO: read hex colors from material theme
    meta.content = isDark ? '#052a53' : '#91cbf9';
    this.document.head.appendChild(meta);
  }

  private updateMetaElement(isDark: boolean): void {
    const meta = this.document.getElementsByName('theme-color')[0] as any;
    meta.name = 'theme-color';
    meta.content = isDark ? '#052a53' : '#91cbf9';
  }
}
