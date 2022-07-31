import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

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

  private get themeString(): string {
    return this.isDark ? Theme.DARK : Theme.LIGHT;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LocalStorage) private storage: Storage
  ) {
    this.initFromLocalStorage();
  }

  public toggle(): void {
    this.isDark = !this.isDark;
    this.updateRenderedTheme();
  }

  public initFromLocalStorage(): void {
    const storedTheme = this.storage.getItem(THEME_STORAGE_KEY);

    if (storedTheme) {
      this.isDark = storedTheme === Theme.DARK;
    } else {
      this.isDark = matchMedia?.('(prefers-color-scheme: dark)').matches;
    }

    this.appendThemeHeadTags(THEME_STORAGE_KEY, this.themeString);
  }

  private updateRenderedTheme(): void {
    this.updateThemeLink(THEME_STORAGE_KEY, this.themeString);
    this.storage.setItem(THEME_STORAGE_KEY, this.themeString);
  }

  private appendThemeHeadTags(key: string, theme: string): void {
    this.createThemeLink(key, theme);
    this.createThemeMetaTag(this.isDark);
  }

  private createThemeLink(key: string, theme: string): void {
    const linkElement = this.document.createElement('link');
    linkElement.id = key;
    linkElement.rel = 'stylesheet';
    linkElement.href = `${theme}-theme.css`;
    this.document.head.appendChild(linkElement);
  }

  private updateThemeLink(key: string, theme: string): void {
    const linkElement = this.document.getElementById(key) as
      | HTMLLinkElement
      | undefined;
    if (!linkElement) return;
    linkElement.href = `${theme}-theme.css`;
    this.updateThemeMetaTag(this.isDark);
  }

  private createThemeMetaTag(isDark: boolean): void {
    const metaElement = this.document.createElement('meta');
    metaElement.name = 'theme-color';
    // TODO: read hex colors from material theme
    metaElement.content = isDark ? '#052a53' : '#91cbf9';
    this.document.head.appendChild(metaElement);
  }

  private updateThemeMetaTag(isDark: boolean): void {
    const metaElement = this.document.getElementsByName(
      'theme-color'
    )[0] as any;
    metaElement.name = 'theme-color';
    metaElement.content = isDark ? '#052a53' : '#91cbf9';
  }
}
