import { Article } from '../index';

export const FUNDAMENTALS_MODULES: Article = {
  url: 'modules',
  title: '@angular/core | Modules',
  date: '2022-08-14',
  lastUpdate: '2022-08-15',
  elements: [
    {
      type: 'TITLE',
      content:
        'Introduction',
    },
    {
      type: 'TEXT',
      content:
        'Modules are a great way to organize an application by consolidate components, directives, and pipes into cohesive blocks of functionality.',
    },
    {
      type: 'HINT',
      content:
        "NgModule's configure the injector and the compiler and help organize related things together.",
    },
    {
      type: 'TEXT',
      content:
        "Angular libraries are NgModule's, such as <code>FormsModule</code>, <code>HttpClientModule</code>, and <code>RouterModule</code>. Many third-party libraries are available as NgModule's too such as Angular Material.",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TITLE',
      content:
        'Requirements',
    },
    {
      type: 'TEXT',
      content:
        '<code>NgModule</code> is part of the <code>@angular/core</code> package.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Syntax',
    },
    {
      type: 'CODE',
      content:
        '@NgModule({\n  declarations: [AppComponent],\n  imports: [],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TEXT',
      content: 'Notes: Preloading Strategy.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "NgModules | 2022-11-03 | <a href='https://angular.io/guide/ngmodules' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/ngmodules</a>",
        "NgModule | 2022-08-14 | <a href='https://angular.io/api/core/NgModule' target='_blank' rel='noopener noreferrer'>https://angular.io/api/core/NgModule</a>",
      ],
    },
  ],
};
