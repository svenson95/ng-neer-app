import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './components';

const COMPONENTS = [ArticlesComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, ArticlesRoutingModule],
})
export class ArticlesModule {}
