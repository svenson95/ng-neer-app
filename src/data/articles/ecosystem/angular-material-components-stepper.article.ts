import { Article } from '../index';

export const ECOSYSTEM_ANGULAR_MATERIAL_COMPONENTS_STEPPER: Article = {
  url: 'angular-material-components-stepper',
  title: '@angular/material/stepper',
  date: '2022-08-27',
  lastUpdate: '2022-08-29',
  elements: [
    {
      type: 'SUBTITLE',
      content: 'Introduction',
    },
    {
      type: 'TEXT',
      content:
        "Use angular material's stepper component to create a workflow view.",
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
        "<code>MatStepperModule<code/> is part of the <code>@angular/material/stepper</code> package.",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Lazy loading stepper content',
    },
    {
      type: 'TEXT',
      content:
        "By default, the stepper will render all of it's content when it's initialized.",
    },
    {
      type: 'CODE',
      content:
        '<mat-step label="First step">\n  <div>...</div>\n</mat-step>',
    },
    {
      type: 'TEXT',
      content:
        "To render the content when the step is opened, put it inside <code>ng-template</code> with the <code>matStepContent</code> attribute.",
    },
    {
      type: 'CODE',
      content:
        '<mat-step>\n  <ng-template matStepLabel>First step</ng-template>\n  <ng-template matStepContent>\n    <div>...</div>\n  </ng-template>\n</mat-step>',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "Stepper documentation | 2022-11-03 | <a href='https://material.angular.io/components/stepper/overview' target='_blank' rel='noopener noreferrer'>https://material.angular.io/components/stepper/overview</a>",
      ],
    },
  ],
};
