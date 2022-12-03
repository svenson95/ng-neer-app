import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: ':url',
    loadChildren: () =>
      import('src/app/modules/article/article.module').then(
        (m) => m.ArticleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ArticlesRoutingModule {}
