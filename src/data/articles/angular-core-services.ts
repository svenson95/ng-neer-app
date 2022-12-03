import { Article } from '.';

export const ANGULAR_CORE_SERVICES: Article = {
  url: 'angular-core-services',
  title: '@angular/core | Services',
  date: '2022-08-14',
  lastUpdate: '2022-08-27',
  elements: [
    {
      type: 'TITLE',
      content: 'Introduction',
    },
    {
      type: 'TEXT',
      content:
        'Services can include logic that is accessible either to the whole application (<code>root</code>) or to an specific part (module) - like a admin panel. Often services are used to provide API request methods.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Requirements',
    },
    {
      type: 'TEXT',
      content:
        "<code>Injectable</code> is part of the <code>@angular/core</code> package.",
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
      type: 'TEXT',
      content: "Service's can either be <code>providedIn</code> root.",
    },
    {
      type: 'CODE',
      content:
        "@Injectable({\n  providedIn: 'root'})\nexport class MyService {}",
    },
    {
      type: 'TEXT',
      content: "Or been provided in certain modules.",
    },
    {
      type: 'CODE',
      content:
        "@Injectable({\n  providedIn: AdminModule\n})\nexport class MyService {}",
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
