import { TopicNode } from "@modules/roadmap/models";

export const START_DATA: TopicNode[] = [
  { name: 'Concepts', url: 'concepts' },
  { name: 'Init project', url: 'init-project' },
  { name: 'Project Structure' },
  { name: 'Classes', url: 'classes' },
];

export const FUNDAMENTALS_DATA: TopicNode[] = [
  {
    name: 'Modules',
    children: [
      { name: "Overview", url: 'modules' }
    ]
  },
  {
    name: 'Components',
    children: [
      { name: "Overview", url: 'components-overview' },
      { name: "Life-Cycles", url: 'components-life-cylces' },
    ]
  },
  {
    name: 'Pipes',
    children: [
      { name: 'Overview' },
      { name: 'Pure function by default, for recurring tasks' },
    ],
  },
  {
    name: 'Directives',
    children: [
      { name: 'Overview' },
      {
        name: 'Component',
        children: [
          { name: 'CommonModule' },
          { name: 'Class Binding [class.is-selected]="element.isSelected"' },
          { name: 'Attribute Binding [attr.colspan]="tableItem.colSpan"' },
          { name: 'Style Binding [style.background-color]="\'red\'"' },
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
  { name: 'Services', url: 'services' },
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
  { name: 'Animations', url: 'animations' },
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
      { name: 'Theming', url: 'angular-material-theming' },
      {
        name: 'Components',
        children: [
          { name: 'mat-stepper', url: 'angular-material-components-stepper' },
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
