import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'articles',
    title: 'Articles',
    data: { animation: 'ArticlesPage' },
    loadChildren: () =>
      import('./modules/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
  {
    path: 'history',
    title: 'History',
    data: { animation: 'HistoryPage' },
    loadChildren: () =>
      import('./modules/history/history.module').then((m) => m.HistoryModule),
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
