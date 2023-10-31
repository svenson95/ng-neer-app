import { Article } from '../index';

export const START_INIT_PROJECT: Article = {
  url: 'init-project',
  title: 'Initialize new project',
  date: '2022-08-28',
  lastUpdate: '2022-11-03',
  elements: [
    {
      type: 'TEXT',
      content: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.'
    },
    {
      type: 'TEXT',
      content: 'Install the CLI using the npm package manager.'
    },
    {
      type: 'CODE',
      content:
        "npm install -g @angular/cli",
    },
    {
      type: 'TEXT',
      content: 'Online help is available on the command line.'
    },
    {
      type: 'CODE',
      content:
        "ng --help",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "CLI Overview and Command Reference | 2023-10-31 | <a href='https://angular.io/cli' target='_blank' rel='noopener noreferrer'>https://angular.io/cli</a>"
      ],
    },
  ],
};
