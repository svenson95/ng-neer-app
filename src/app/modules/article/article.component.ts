import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, TEST_ARTICLES } from '@data/articles';

@Component({
  selector: 'ngnr-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  public article: Article | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleUrl = this.route.snapshot.params['article'];
    this.article = this.getArticleBy(articleUrl);
  }

  getArticleBy(url: string): Article | undefined {
    return TEST_ARTICLES.find((el) => url === el.url);
  }
}
