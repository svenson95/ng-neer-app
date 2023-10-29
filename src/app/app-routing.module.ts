import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/roadmap/roadmap.module').then((m) => m.RoadmapModule),
  },
  {
    path: 'article/:url',
    title: 'Article',
    loadChildren: () => import('./modules/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'history',
    title: 'History',
    loadChildren: () => import('./modules/history/history.module').then((m) => m.HistoryModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
