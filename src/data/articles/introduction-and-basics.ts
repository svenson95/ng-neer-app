import { Article } from '.';

export const INTRODUCTION_AND_BASICS: Article = {
  url: 'introduction-and-basics',
  title: 'Introduction & Basics',
  date: '2022-08-28',
  lastUpdate: '2022-08-29',
  elements: [
    {
      type: 'TITLE',
      content: 'Prerequisites',
    },
    {
      type: 'TEXT',
      content: 'You should be familiar with JavaScript and TypeScript.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TITLE',
      content: 'Life-cycle methods',
    },
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
        'The constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of class fields. <code>ngOnInit</code> on the other hand is a life cycle hook called by Angular to indicate that the initialization is done.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Life-cycle methods',
    },
    {
      type: 'TEXT',
      content: 'The constructor().',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Topics',
    },
    {
      type: 'TEXT',
      content: 'Rendering & Change Detection, Data-binding',
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
