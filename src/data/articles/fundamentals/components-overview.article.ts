import { Article } from '../index';

export const FUNDAMENTALS_COMPONENTS: Article = {
  url: 'components-overview',
  title: '@angular/core | Components',
  date: '2022-08-07',
  lastUpdate: '2022-08-07',
  elements: [
    {
      type: 'TITLE',
      content:
        'Introduction',
    },
    {
      type: 'TEXT',
      content:
        'A component represent\'s a certain section of an application, the header for instance.',
    },
    {
      type: 'HINT',
      content:
        'Components are the main building block for Angular applications. Since version 14 we can use standalone components, which allows module imports in the component itself.',
    },
    {
      type: 'TEXT',
      content:
        "To instantiate a component add the <code>@Component({ ... })</code> decorator to a class. All component's must be declared in a NgModule in <code>declarations: []</code> as a part of the module, alternatively component's can be imported in <code>imports: []</code> from another module.",
    },
    {
      type: 'CODE',
      content:
        "@Component({ ... })\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        'Angular applications consists at least of one component, <code>AppComponent</code> is the entry point loaded into the DOM by angular during the bootstrap process in <code>main.ts</code>.',
    },
    {
      type: 'CODE',
      content:
        'platformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .catch((err) => console.error(err));',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TITLE',
      content:
        'Requirements',
    },
    {
      type: 'TEXT',
      content:
        "To use the component decorator <code>@angular/core</code> package must be imported.",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'SUBTITLE',
      content: 'Component Files',
    },
    {
      type: 'TABLE',
      rows: [
        {
          type: 'default',
          columns: [
            { content: 'app.component.<b>ts</b>', align: 'left' },
            {
              content: 'Defines behavior / logic as a JavaScript class',
              align: 'left',
            },
          ],
        },
        {
          type: 'default',
          columns: [
            { content: 'app.component.<b>html</b>', align: 'left' },
            {
              content: 'Defines the HTML template / what renders on the page',
              align: 'left',
            },
          ],
        },
        {
          type: 'default',
          columns: [
            { content: 'app.component.<b>css</b>', align: 'left' },
            {
              content:
                'Defines the stylesheet (can be <code>css</code>, <code>scss</code> or <code>sass</code>)',
              align: 'left',
            },
          ],
        },
        {
          type: 'default',
          columns: [
            { content: 'app.component.<b>spec.ts</b>', align: 'left' },
            { content: 'Defines unit tests for component', align: 'left' },
          ],
        },
        {
          type: 'default',
          columns: [
            { content: 'app.<b>module.ts</b>', align: 'left' },
            {
              content: 'Defines how to assemble the component',
              align: 'left',
            },
          ],
        },
      ],
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
      content:
        "The basic metadata for a component are <code>selector</code>, <code>templateUrl</code> and <code>styleUrls</code>. The <code>selector</code> attribute defines the template reference for the component, like a h1 tag with the class 'title' (h1.title) or just by a id (#title).",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  selector: 'app-title', // or 'h1.title' or '#title'\n  templateUrl: './title.component.html',\n  styleUrls: ['./title.component.css']\n})\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        "Templates can be defined as inline html in <code>template</code> or refer to a different file with <code>templateUrl</code>.",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  template: `<h1>My Component</h1>`\n})\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        "Alternatively to <code>styleUrls</code> we can use <code>styles</code> to inline styling as well.",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  styles: ['h1 { color: blue; }']\n})\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        "With <code>changeDetection</code> we can configure to update the component only on changes.",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        "Animations created with angular's integrated animation builder can be added in <code><a href=\"/articles/angular-animations\" target=\"_blank\" rel=\"noopener noreferrer\">animations</a></code>.",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  animations: [...]\n})\nexport class MyComponent {}",
    },
    {
      type: 'TEXT',
      content:
        "Since version 14 component's can be declared as standalone.",
    },
    {
      type: 'CODE',
      content:
        "@Component({\n  standalone: true,\n  imports: [CommonModule, RouterModule]\n})\nexport class MyComponent {}",
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'LIST',
      content: 'References:',
      list: [
        "Workspace and project file structure | 2022-08-07 | <a href='https://angular.io/guide/file-structure' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/file-structure</a>",
        "Angular Components Overview | 2022-08-07 | <a href='https://angular.io/guide/component-overview' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/component-overview</a>",
      ],
    },
  ],
};
