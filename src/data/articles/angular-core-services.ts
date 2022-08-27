import { Article } from './articles';

export const ANGULAR_CORE_SERVICES: Article = {
  url: 'angular-core-services',
  title: '@angular/core | Services',
  date: '2022-08-14',
  lastUpdate: '2022-08-27',
  elements: [
    {
      type: 'TEXT',
      content:
        'Services in Angular let you define states & methods that are accessible to either your whole application (<code>root</code>) or to an specific part / module - like a admin panel - of your application.',
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
        "@Injectable({\n  providedIn: 'root'\n  // providedIn: AdminModule\n})\nexport class ThemeService {}",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TEXT',
      content:
        'Notes: Dependency Injection & Providing Services. HTTP Requests. Class with a well-defined purpose, Angular distinguishes components from services to increase modularity and reusability.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "title | 2022-08-30 | <a href='https://angular.io/guide/file-structure' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/file-structure</a>",
      ],
    },
  ],
};
