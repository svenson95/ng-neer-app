import { Component } from '@angular/core';
import { TEST_ARTICLES } from '@data/articles';

@Component({
  selector: 'ngnr-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent {
  public articles = TEST_ARTICLES;

  public removeHrefs(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, '');
  }
}
