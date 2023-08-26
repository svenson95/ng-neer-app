import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostElementComponent } from '@core/components';
import { ArticlesRoutingModule } from './article-routing.component';
import { ArticleComponent } from './components';

const COMPONENTS = [ArticleComponent];

const STANDALONE_COMPONENTS = [PostElementComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ArticlesRoutingModule, ...STANDALONE_COMPONENTS],
})
export class ArticleModule {}
