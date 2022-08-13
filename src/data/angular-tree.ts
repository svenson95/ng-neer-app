import { TopicNode } from 'src/app/core/models/angular-tree';

export const TREE_DATA: TopicNode[] = [
  {
    name: 'Fundamentals',
    children: [
      { name: 'Angular CLI' },
      { name: 'Project Structure' },
      { name: 'NgModules' },
      { name: '<a href="/articles/angular-core-components">Components</a>' },
      {
        name: 'Pipes',
        children: [{ name: 'Options' }],
      },
      {
        name: 'Directives',
        children: [
          {
            name: 'Component',
            children: [
              { name: 'Class Binding' },
              { name: 'Style Binding' },
              {
                name: 'Interaction',
                children: [
                  { name: 'Input' },
                  { name: 'Output' },
                  { name: 'Lifecycle Methods' },
                ],
              },
            ],
          },
          {
            name: 'Structural',
            children: [
              { name: '*ngIf' },
              { name: '*ngSwitch' },
              { name: '*ngFor' },
            ],
          },
        ],
      },
      {
        name: 'Services',
        children: [
          { name: 'HTTP Requests' },
          { name: 'Dependency Injection & Providing Services' },
        ],
      },
      {
        name: 'Routing',
        children: [
          { name: 'RouterModule' },
          { name: 'Configuring Routes' },
          { name: 'RouterOutlet' },
          { name: 'routerLink' },
          { name: 'Wildcard Routes' },
          { name: 'Redirecting Routes' },
          { name: 'Route Parameters' },
          { name: 'Nested Routes' },
          { name: 'Relative Paths' },
          { name: 'Lazy Loading' },
          { name: 'Route Guards' },
        ],
      },
    ],
  },
  {
    name: 'Advanced',
    children: [
      {
        name: 'HTTP',
        children: [
          { name: 'HttpClient' },
          { name: 'Typed Response' },
          { name: 'Error Handling' },
          { name: 'Interceptors' },
        ],
      },
      {
        name: 'Observables',
        children: [
          { name: 'Creating Observables' },
          { name: 'Subscribing to Observables' },
          { name: 'Executing Observables' },
          { name: 'Disposing Observables' },
          { name: 'Operators' },
        ],
      },
      {
        name: 'Template Driven Forms',
        children: [
          { name: 'FormsModule' },
          { name: 'NgForm' },
          { name: 'NgModel' },
          { name: 'NgModelGroup' },
          { name: 'Tracking State & Validty' },
          { name: 'Validation & Error messages' },
          { name: 'ngSubmit' },
        ],
      },
      {
        name: 'Reactive Forms',
        children: [
          { name: 'ReactiveFormsModule' },
          { name: 'FormGroup' },
          { name: 'FormControl' },
          { name: 'FormArray' },
          { name: 'setValue & patchValue' },
          { name: 'FormBuilder' },
          { name: 'Validation' },
          { name: 'ngSubmit' },
        ],
      },
      {
        name: '<a href="/articles/angular-animations">Animations</a>',
      },
    ],
  },
  {
    name: 'Ecosystem',
    children: [
      { name: 'State Management', children: [{ name: 'ngRx' }] },
      {
        name: 'Angular Material',
        children: [
          { name: '<a href="/articles/angular-material-theming">Theming</a>' },
        ],
      },
      {
        name: 'Server-Side-Rendering',
        children: [{ name: 'Angular Universal' }],
      },
      {
        name: 'Testing',
        children: [{ name: 'Jasmine & Karma' }, { name: 'Protractor' }],
      },
      {
        name: 'Miscellaneous',
        children: [
          { name: 'i18n' },
          { name: 'Accessibility' },
          { name: 'Linting (ESLint)' },
        ],
      },
    ],
  },
];
