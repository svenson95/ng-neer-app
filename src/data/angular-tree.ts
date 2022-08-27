import { TopicNode } from 'src/app/core/models/angular-tree';

export const FUNDAMENTALS_DATA: TopicNode[] = [
  {
    name: '<a href="/articles/introduction-and-basics">Introduction & Basics</a>',
  },
  { name: 'Angular CLI' },
  { name: 'Project / Folder Structure' },
  { name: '<a href="/articles/angular-core-components">Components</a>' },
  { name: '<a href="/articles/angular-core-ngmodules">NgModules</a>' },
  {
    name: 'Pipes',
    children: [
      { name: 'Options' },
      { name: 'Pure function by default, for recurring tasks' },
    ],
  },
  {
    name: 'Directives',
    children: [
      {
        name: 'Component',
        children: [
          { name: 'logic binding for html elements' },
          {
            name: 'Class Binding [class.is-selected]="element.isSelected"',
          },
          { name: 'Attribute Binding [attr.colspan]="tableItem.colSpan"' },
          {
            name: 'Style Binding [style.background-color]="\'red\'"',
          },
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
    name: '<a href="/articles/angular-core-injectable-services">Services</a>',
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
];

export const ADVANCED_DATA: TopicNode[] = [
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
      { name: 'rxjs (Subjects)' },
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
  {
    name: 'Server-Side-Rendering (SSR)',
    children: [{ name: 'Angular Universal' }],
  },
  { name: 'Internationalization (i18n)' },
  { name: 'Accessibility' },
  { name: 'Unit and integration tests' },
];

export const ECOSYSTEM_DATA: TopicNode[] = [
  { name: 'State Management', children: [{ name: 'ngRx' }] },
  {
    name: 'Angular Material',
    children: [
      { name: '<a href="/articles/angular-material-theming">Theming</a>' },
      {
        name: 'Components',
        children: [
          {
            name: '<a href="/articles/angular-material-components-stepper">mat-stepper</a>',
          },
        ],
      },
    ],
  },
  {
    name: 'Testing',
    children: [{ name: 'Jasmine & Karma' }, { name: 'Protractor' }],
  },
  {
    name: 'Miscellaneous',
    children: [
      { name: 'Linting (ESLint)' },
      { name: "Angular's chrome dev tools plugin" },
    ],
  },
];
