import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article, TEST_ARTICLES } from 'src/data/articles';

@Component({
  selector: 'ngnr-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  public article: Article | undefined;

  constructor(private router: Router) {
    this.initializeArticle();
  }

  initializeArticle() {
    const url = this.router.url;
    const articleUrl = url.substring(url.indexOf('/', 2) + 1, url.length);
    const article = TEST_ARTICLES.find((el) => articleUrl === el.url);
    if (article) {
      this.article = article;
    }
  }
}
