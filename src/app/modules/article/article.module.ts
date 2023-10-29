import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostElementComponent } from '@core/components';
import { ArticlesRoutingModule } from './article-routing.component';
import { ArticleComponent } from "./article.component";


const STANDALONE_COMPONENTS = [PostElementComponent];

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ArticlesRoutingModule, ...STANDALONE_COMPONENTS],
})
export class ArticleModule {}
