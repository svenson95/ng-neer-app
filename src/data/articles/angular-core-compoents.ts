import { Article } from './articles';

export const ANGULAR_CORE_COMPONENTS: Article = {
  url: 'angular-core-components',
  title: '@angular/core | Components',
  date: '2022-08-07',
  lastUpdate: '2022-08-07',
  elements: [
    {
      type: 'TEXT',
      content:
        'Components are the main building block for Angular applications.',
    },
    {
      type: 'TEXT',
      content:
        'Architectural patterns like <abbr title="Model-View-View-Model">MVVM</abbr> and <abbr title="Model-View-Controller">MVC</abbr> describcing the way, how multiple files - the model (logic) and the view (template) - of a component working together to keep changes in the view (template) and the model (logic) update-to-date. A lot of people on StackOverFlow say that angular is neither MVVC or MVC, it\'s more like a <i>component-based</i> architecture. Whereas a component represent\'s a certain section of an application, for example the header, or a login form with e-mail & password inputs plus a button.',
    },
    {
      type: 'TEXT',
      content:
        "To create a component you'll need to add the <code>@Component({ ... })</code> flag above an class. A component must belong to an NgModule in order for it to be available to another components, the component either must be declared in <code>declarations: []</code> as a part of the module or must be imported in <code>imports: []</code> from another module.",
    },
    {
      type: 'HINT',
      content:
        'Since version 14 we can alternatively use standalone components, which allows module imports in the component itself.',
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
        "@Component({\n  selector: 'app-title', // or 'h1.title', '#title'\n  templateUrl: './title.component.html',\n  // template: `<h1>My App</h1>`,\n  styleUrls: ['./title.component.css'],\n  // styles: ['h1 { color: blue; }'],\n  // changeDetection: ChangeDetectionStrategy.OnPush\n  // animations: [...],\n  // standalone: true,\n  // imports: [CommonModule, RouterModule],\n})\nexport class TitleComponent {}",
    },
    {
      type: 'TEXT',
      content:
        'The <code>selector</code> property defines either the HTML tag, the class (<i>h1.title</i>) or id (<i>#title</i>) selector used for this component.',
    },
    {
      type: 'TEXT',
      content:
        'In <code>templateUrls</code> and <code>styleUrls</code> we can set paths to files, otherwise we can set the template and styles inline via <code>template</code> and <code>styles</code>.',
    },
    {
      type: 'TEXT',
      content:
        'If you want <code><a href="/articles/angular-animations" target="_blank" rel="noopener noreferrer">animations</a></code> you can create some with angular\'s built-in animations builder.',
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
      content: 'Bootstrapping',
    },
    {
      type: 'TEXT',
      content:
        'Angular applications consists at least of one component, <code>AppComponent</code> is the entry point loaded into the DOM by angular during the bootstrap process / application launch in <code>main.ts</code>.',
    },
    {
      type: 'CODE',
      content:
        'platformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .catch((err) => console.error(err));',
    },
    {
      type: 'TEXT',
      content:
        'Components can be created with <code>ng generate component</code> or shortcut <code>ng g c</code> (Angular CLI needed) or manually. A angular component uses the <code>@Component</code> decorator, with the meta data (selector, templateUrl, ...) as arguments.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TEXT',
      content:
        "Notes: Metadata, Property Binding (<code>@Input</code>'s/<code>@Output</code>'s), Template: Reference Variables, Interpolation, Event Binding, Two-way Binding",
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
