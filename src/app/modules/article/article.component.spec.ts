import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { TEST_ARTICLES } from "../../../data/articles";

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let testUrl = "get-started-with-angular";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({ url: testUrl })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return article if article found", () => {
    // given
    const article = component.getArticleBy(testUrl);

    // when
    const expectedArticle = TEST_ARTICLES.find(t => t.url === testUrl);
    fixture.detectChanges();

    // then
    expect(article).toBeDefined();
    expect(article).toBe(expectedArticle);
  })

  it("should return undefined if article not found", () => {
    // given
    const article = component.getArticleBy(testUrl + "123");

    // when
    fixture.detectChanges();

    // then
    expect(article).toBeUndefined();
  })
});
