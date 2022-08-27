import { Article } from './articles';

export const ANGULAR_CORE_MODULES: Article = {
  url: 'angular-core-ngmodules',
  title: '@angular/core | NgModules',
  date: '2022-08-14',
  lastUpdate: '2022-08-15',
  elements: [
    {
      type: 'TEXT',
      content:
        'Modules are a great way to organize an application and extend it with capabilities from external libraries. NgModules consolidate components, directives, and pipes into cohesive blocks of functionality, each focused on a feature area, application business domain, workflow, or common collection of utilities.',
    },
    {
      type: 'HINT',
      content:
        'NgModules configure the injector and the compiler and help organize related things together.',
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
        '@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [ /* add modules here so Angular knows to use them */\n    BrowserModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}',
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
        "NgModules | 2022-08-14 | <a href='https://angular.io/guide/ngmodules' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/ngmodules</a>",
        "NgModule | 2022-08-14 | <a href='https://angular.io/api/core/NgModule' target='_blank' rel='noopener noreferrer'>https://angular.io/api/core/NgModule</a>",
      ],
    },
  ],
};
