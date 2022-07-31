import { Component, OnInit } from '@angular/core';
import { testArticles } from 'src/data/articles';

@Component({
  selector: 'ngnr-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  public articles = testArticles;

  constructor() {}

  ngOnInit(): void {}

  public removeHrefs(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, '');
  }
}
