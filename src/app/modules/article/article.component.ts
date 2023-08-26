import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, TEST_ARTICLES } from 'src/data/articles';

@Component({
  selector: 'ngnr-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  public article: Article | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleUrl = this.route.snapshot.params['url'];
    this.article = this.getArticleBy(articleUrl);
  }

  getArticleBy(url: string): Article | undefined {
    return TEST_ARTICLES.find((el) => url === el.url);
  }
}
