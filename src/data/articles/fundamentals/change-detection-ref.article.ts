import { Article } from '../index';

export const FUNDAMENTALS_CHANGE_DETECTION_REF: Article = {
  url: 'change-detection-ref',
  title: '@angular/core | ChangeDetectionRef',
  date: '2022-11-04',
  lastUpdate: '2022-11-04',
  elements: [
    {
      type: 'TITLE',
      content:
        'Introduction',
    },
    {
      type: 'TEXT',
      content:
        'Base class that provides change detection functionality.',
    },
    {
      type: 'TEXT',
      content:
        "To trigger change detection we can use <code>markForCheck()</code>.",
    },
    {
      type: 'CODE',
      content:
        "import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';\n\n@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class MyComponent {\n  constructor(private cdr: ChangeDetectorRef) {\n    cdr.markForCheck();\n  }\n}",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TITLE',
      content:
        'Prerequisites',
    },
    {
      type: 'TEXT',
      content:
        "<code>ChangeDetectorRef</code> is part of the <code>@angular/core</code> package.",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Methods',
    },
    {
      type: 'TEXT',
      content: "Test methods in StackBlitz example project => <a href='https://stackblitz.com/edit/angular-change-detector-ref-example?file=src%2Fapp%2Fapp.component.ts' target='_blank' rel='noopener noreferrer'>https://stackblitz.com/edit/angular-change-detector-ref-example?file=src%2Fapp%2Fapp.component.ts</a>."
    },
    {
      type: 'LIST',
      list: [
        "<code>markForCheck()</code> => explicitly marks the view as changed so it be checked again",
        "<code>detectChanges()</code> => checks this view and its children, use in combination with <code>detach</code> to implement custom change detection checks",
        "<code>detach()</code> => deactivate checks by detach the view from the change detection tree",
        "<code>reattach()</code> => activate checks by reattach the view to the change detection tree",
        "<code>checkNoChanges()</code> => checks the change detector and its children, noop in production, only development purposes to verify that running change detection doesn't introduce other changes",
      ]
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "ChangeDetectorRef#usage-notes | 2022-11-04 | <a href='https://angular.io/api/core/ChangeDetectorRef#usage-notes' target='_blank' rel='noopener noreferrer'>https://angular.io/api/core/ChangeDetectorRef#usage-notes</a>",
      ],
    },
  ],
};
