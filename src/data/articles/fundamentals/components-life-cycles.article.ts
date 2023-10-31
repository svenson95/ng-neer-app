import { Article } from '../index';

export const FUNDAMENTALS_COMPONENTS_LIFE_CYCLES: Article = {
  url: 'components-life-cylces',
  title: '@angular/core | Components - Life-Cycles',
  date: '2023-10-31',
  lastUpdate: '2023-10-31',
  elements: [
    {
      type: 'SUBTITLE',
      content: 'OnInit',
    },
    {
      type: 'TEXT',
      content:
        'The constructor is a default method of the typescript class that is executed when the class is instantiated and ensures proper initialization of class fields. <code>ngOnInit</code> on the other hand is a life cycle hook called by Angular to indicate that the initialization is done.',
    },
    {
      type: 'CODE',
      content:
        "import { Component, OnInit } from '@angular/core';\n\nexport class AppComponent implements OnInit {\n  constructor() {\n    // Called before ngOnInit()\n  }\n\n  ngOnInit() {\n    // Called when constructor is done & after first ngOnChanges runs\n  }\n}",
    },
    {
      type: 'SUBTITLE',
      content: 'OnChanges',
    },
    {
      type: 'TEXT',
      content:
        '',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "Theming Angular Material | 2022-07-30 | <a href='https://material.angular.io/guide/theming' target='_blank' rel='noopener noreferrer'>https://material.angular.io/guide/theming</a>",
        "Customizing Typography | 2022-07-30 | <a href='https://material.angular.io/guide/typography' target='_blank' rel='noopener noreferrer'>https://material.angular.io/guide/typography</a>",
      ],
    },
  ],
};
