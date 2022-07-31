import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.component';

@NgModule({
  declarations: [ArticlesComponent],
  exports: [ArticlesComponent],
  imports: [CommonModule, ArticlesRoutingModule],
})
export class ArticlesModule {}
