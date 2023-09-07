import { Article } from '.';

export const ANGULAR_CORE_CHANGE_DETECTION_STRATEGY: Article = {
  url: 'angular-core-change-detection-strategy',
  title: '@angular/core | ChangeDetectionStrategy',
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
        'By default angular performs change detection on in a component and his child components every time something changes, a components property for example.',
    },
    {
      type: 'HINT',
      content:
        'Change detection is very performant, but as an app grows and gets more complex, change detection will have to perform more and more work.',
    },
    {
      type: 'TEXT',
      content:
        "To avoid unnecessary change detections use the <code>OnPush</code> strategy for specific components, or all components in gerenal as a convention.",
    },
    {
      type: 'CODE',
      content:
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        "By default the value is <code>ChangeDetectionStragety.Default</code>. With <code>OnPush</code> the component is updated only if a <code>@Input</code> inside changes.",
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
        "To use <code>OnInit</code>, <code>OnDestroy</code> and the other life-cycle hooks <code>@angular/core</code> package must be imported.",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Manually trigger change detection',
    },
    {
      type: 'TEXT',
      content:
        "The basic metadata for a component are <code>selector</code>, <code>templateUrl</code> and <code>styleUrls</code>. The <code>selector</code> attribute defines the template reference for the component, like a h1 tag with the class 'title' (h1.title) or just by a id (#title).",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  selector: 'app-title', // or 'h1.title' or '#title'\n  templateUrl: './title.component.html',\n  styleUrls: ['./title.component.css']\n})\nexport class MyComponent {}",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "How To Use Change Detection Strategy in Angular | 2022-11-04 | <a href='https://www.digitalocean.com/community/tutorials/angular-change-detection-strategy' target='_blank' rel='noopener noreferrer'>https://www.digitalocean.com/community/tutorials/angular-change-detection-strategy</a>",
        "Lifecycle hooks - Defining custom change detection | 2022-11-04 | <a href='https://angular.io/guide/lifecycle-hooks#defining-custom-change-detection' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/lifecycle-hooks#defining-custom-change-detection</a>",
      ],
    },
  ],
};
