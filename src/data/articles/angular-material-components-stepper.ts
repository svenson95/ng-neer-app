import { Article } from '.';

export const ANGULAR_MATERIAL_COMPONENTS_STEPPER: Article = {
  url: 'angular-material-components-stepper',
  title: '@angular/material/stepper',
  date: '2022-08-27',
  lastUpdate: '2022-08-29',
  elements: [
    {
      type: 'TEXT',
      content:
        "Angular Material's theming system - based on <a href='https://material.io/design/material-theming/overview.html' target='_blank'>Google's Material Design specification</a> - lets you customize colors and typography styles for your application. Built with Sass under-the-hood, using color palettes instead of color values like rgb or hex to define theme colors. A palette is a collection of colors representing a portion of color space.",
    },
    {
      type: 'SUBTITLE',
      content: 'Dependency',
    },
    {
      type: 'TEXT',
      content:
        "<code>import { MatStepperModule } from '@angular/material/stepper';",
    },
    {
      type: 'TEXT',
      content:
        "By default, the stepper will render all of it's content when it's initialized. If you want to render the content when the step is opened, you can put it inside <code>ng-template</code> with the <code>matStepContent</code> attribute.",
    },
    {
      type: 'CODE',
      content:
        '// eagerly rendered\n<mat-step label="First step">\n  <div>...</div>\n</mat-step>\n\n// lazy rendered\n<mat-step>\n  <ng-template matStepLabel>First step</ng-template>\n  <ng-template matStepContent>\n    <div>...</div>\n  </ng-template>\n</mat-step>',
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
      ],
    },
  ],
};
