import { Component, OnInit } from '@angular/core';
import { TEST_ARTICLES } from 'src/data/articles';

@Component({
  selector: 'ngnr-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  public articles = TEST_ARTICLES;

  constructor() {}

  ngOnInit(): void {}

  public removeHrefs(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, '');
  }
}
