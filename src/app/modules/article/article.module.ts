import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './article-routing.component';
import { ArticleComponent } from './article.component';
import { PostElementComponent } from 'src/app/core/components/post-element/post-element.component';

@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [CommonModule, ArticlesRoutingModule, PostElementComponent],
})
export class ArticleModule {}
