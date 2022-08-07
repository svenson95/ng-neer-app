import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { testArticles } from 'src/data/articles';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    const isArticle = snapshot.url.includes('/articles/');

    if (title && !isArticle) {
      document.title = 'ng-neer - ' + title;
    } else if (isArticle) {
      const article = testArticles.find((a) => snapshot.url.includes(a.url));
      document.title = article?.title + ' - ng-neer' ?? 'ng-neer | Article';
    } else {
      document.title = 'ng-neer';
    }
  }
}
