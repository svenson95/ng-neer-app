export const versions = [
  {
    title: 'AngularJS / Angular 1',
    date: '2010.10.20',
    description:
      'Introduced as an open-source, JavaScript-based frontend framework. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.',
    link: 'https://angularjs.org/',
    list: [
      'Based on a mix of <abbr title="Model-View-Controller">MVC</abbr> & <abbr title="Model-View-View-Model">MVVM</abbr> design',
      'Not built with mobile support in mind',
      'Mainly maintained by Google and a community of individuals and corporations',
      'Aims to simplify development and testing of applications',
      '<abbr title="Long-Term-Support">LTS</abbr> until December 31, 2021',
    ],
  },
  {
    title: 'Angular 2',
    date: '2016.09.20',
    description:
      'Complete rewrite of AngularJS to an TypeScript-based frontend framework.',
    link: null,
    list: [
      "Isn't really MVC or MVVM, it's a <i>Component-Based</i> architecture.",
      'Mobile oriented',
      'Provides more choice for languages (<abbr title="EcmaScript, also known as EcmaScript 2009">ES5</abbr>, <abbr title="EcmaScript, also known as EcmaScript 2015">ES6</abbr>, TypeScript or Dart)',
      'Written entirely in TypeScript (1.8)',
    ],
  },
  {
    title: 'Angular 3',
    date: null,
    description:
      'Skipped because of the version mismatch between @angular/core (v2), @angular/compiler (v2) and @angular/router (v3) libraries.',
    link: null,
    list: [
      "Releasing Angular as v3, with it's router on v4 could create confusion",
      'Decided to skip version 3 and release with version 4',
      'Every major dependency on the right track again',
    ],
  },
  {
    title: 'Angular 4',
    date: '2017.04.23',
    description:
      'This version is backwards compatible with 2 in the most cases. There are no major differences between Angular 2 and Angular 4.',
    link: 'https://blog.angular.io/angular-4-3-now-available-8d57b57eb5a8',
    list: [
      'No breaking changes from Angular 2 to Angular 4',
      'Emphasis on making angular apps more faster, compact',
      'New under-the-hood changes reduced the build size up to 60% in some cases',
      'Faster compilation',
      'TypeScript 2.1 and 2.2 compatibility',
      'Improved bug fixes alerts',
      '<code>Renderer2</code> replaced <code>Renderer</code>',
      'Added else condition for ngIf template bindings',
    ],
  },
  {
    title: 'Angular 5',
    date: '2017.11.01',
    description: 'Some smaller updates & refactoring.',
    link: 'https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced',
    list: [
      'Compiler Improvements',
      'Production builds will now apply the build optimizer by default',
      'Angular Universal State Transfer API and DOM Support',
      'RxJS 5.5 support',
      'Internationalized Number, Date, and Currency Pipes',
      'Deprecated HttpModule (@angular/http) replaced with <code>HttpClientModule</code> (@angular/common/http)',
      'Added <code>updateOn</code> property (<code>blur</code> & <code>submit</code>) for Forms',
      'New Router Lifecycle Events: <code>GuardsCheckStart</code>, <code>ChildActivationStart</code>, <code>ActivationStart</code>, <code>GuardsCheckEnd</code>, <code>ResolveStart</code>, <code>ResolveEnd</code>, <code>ActivationEnd</code>, <code>ChildActivationEnd</code>',
    ],
  },
  {
    title: 'Angular 6',
    date: '2018.05.03',
    description:
      'Released on May 2018 together with Angular CLI v6 and Material v6.',
    link: 'https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4',
    list: [
      'Synchronized the framework packages (core, common, compiler, ...), the Angular CLI and Angular Material + CDK to version 6',
      'New command-line scripts <code>ng update</code> and <code>ng add</code>',
      'CLI Workspaces for multiple projects / applications',
      'Introduced Material Starter Components',
      'Focused less on the underlying framework, and more on the toolchain',
      '<i>Tree Shakable Providers</i> to reduce the build size',
      'Moved from <i>modules referencing services</i> to <i> services referencing modules</i>, remove this polyfill can save approximately 47KB of bundle size, while increasing animations performance in Safari at the same time',
      'Expanded <abbr title="Long-Term-Support">LTS</abbr> for all major releases, each major release will be supported for 18 months',
    ],
  },
  {
    title: 'Angular 7',
    date: '2018.10.18',
    description:
      'Performance improvements and some new features. Synchronized released with Angular CLI 7 and Angular Material 7.',
    link: 'https://blog.angular.io/version-7-of-angular-cli-prompts-virtual-scroll-drag-and-drop-and-more-c594e22e7b8c',
    list: [
      'CLI Prompts to help you discover built-in features',
      'Angular Material & CDK - Virtual Scrolling & Drag-and-Drop',
      'Added support for TypeScript 3.1, RxJS 6.3 and Node 10',
      'CLI Prompts to help you discover built-in features',
    ],
  },
  {
    title: 'Angular 8',
    date: '2019.05.28',
    description:
      'Synchronized released with Angular CLI 8 and Angular Material 8.',
    link: 'https://blog.angular.io/version-8-of-angular-smaller-bundles-cli-apis-and-alignment-with-the-ecosystem-af0261112a27',
    list: [
      'Differential Loading by Default (browser chooses between modern or legacy JavaScript based on its own capabilities) - reduced bundle size',
      "Dynamic Imports for Route Configurations, migrated from <code>loadChildren: './my.module#MyModule'}</code> to <code> () => import(`./my.module`).then(m => m.MyModule) </code>",
      '<abbr title="Web workers allow you to offload work to a background thread">Web Worker</abbr> Support',
      'Builder APIs in CLI, added <code>ng build</code>, <code>ng test</code> and <code>ng run</code>',
      'Added <code>ng deploy</code> in Angular CLI 8.3',
      'Ivy compiler as opt-in mode (developer preview)',
    ],
  },
  {
    title: 'Angular 9',
    date: '2020.02.06',
    description:
      'Came up with the most awaited Ivy compiler. Synchronized major release with Angular CLI 9 and Angular Material 9.',
    link: 'https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3',
    list: [
      "<abbr title='Compilation and rendering pipeline'>Ivy Compiler</abbr> - faster build time, smaller bundle size, better performance & debugging",
      'Improved CSS class and style binding',
      "<abbr title='Ahead-of-time Compilation'>AOT</abbr> enabled by default (replaced <abbr title='Just-in-Time Compilation'>JIT</abbr>)",
      'New Options for <code>providedIn</code> property in <code>@Injectable</code> Decorator (<code>platform</code> & <code>any</code>)',
      'TypeScript 3.7 Support',
      'Improved type checking',
      '<i>Component harnesses</i>, which offer an alternative way to test components by abstracting implementation details',
      'New Material Components <i>YouTube player component</i> and <i>Google Maps Component</i>',
    ],
  },
  {
    title: 'Angular 10',
    date: '2020.06.25',
    description: 'Smaller release compared to other major releases.',
    link: 'https://blog.angular.io/version-10-of-angular-now-available-78960babd41',
    list: [
      'New Material Component <i>Date Range Picker</i>',
      'Warnings about CommonJS imports, which can cause larger and slower applications',
      '<i>Optional Stricter Settings</i> - using the flag <code>--strict</code> in <code>ng new</code> initializes your project with a few new settings that improve maintainability, help you catch bugs ahead of time and allow the CLI to perform advanced optimizations',
      'TypeScript 3.9 Support and TSLint updated to version 6',
      'Updated default browser configuration <code>.browserslistrc</code> to exclude older and less used browsers - side effect of disabling ES5 builds by default for new projects',
    ],
  },
  {
    title: 'Angular 11',
    date: '2020.11.11',
    description:
      'Released in Nov 2020 with a few popular bug fixes and some new features.',
    link: 'https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7',
    list: [
      'In v11.2 added support for Tailwind CSS',
      'Fixed incorrect <code>RouterLink</code> relative link if defined in component having empty path',
      '<code>FormGroup</code> & <code>FormControl</code> <code>statusChanges</code> are no longer emitted on creation',
      '<i>i18n</i>, use translation strings outside a template',
      '<i>Automatic font inlining</i>, during compilation Angular CLI download and inline fonts that are being used and linked in the application - speeding up the first contentful paint (FCP)',
      'Improved build and serve Reporting & Logging',
      'Added experimental support for Webpack 5',
      'TSLint is deprecated by the project creators who recommend migration to ESLint',
      'Removed Support of IE9/IE10 and IE Mobile',
    ],
  },
  {
    title: 'Angular 12',
    date: '2021.05.13',
    description:
      "New cool features, more focused on open-source aspects with new contributor's guide, some Pull Requests from the community been added.",
    link: 'https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49',
    list: [
      'Moving closer to Ivy everywhere, View Engine is now deprecated',
      '<code>ng build</code> now defaults to production',
      'Strict mode is enabled by default in the CLI - helps catch errors earlier in the development cycle',
      'The Ivy-based Language Service is moving from opt-in to on by default',
      'Nullish Coalescing in templates to simplify complex conditionals',
      'Transitioning from legacy i18n message ids, legacy message ids are fragile as problems can arise based on whitespace and the formatting templates and ICU expressions',
      'Styling Improvements, support inline Sass in the styles field of the <code>@Component</code> decorator',
      "Angular CDK and Angular Material have internally adopted Sass's new module system, additionally exposed a new Sass API surface designed for consumption with the new <code>@use</code> syntax",
      'Production ready version of Webpack 5 support',
      'Support TypeScript 4.2',
      'Deprecating Support for IE11',
      "Changes & improvements to angular documentation, new contributor's guide",
    ],
  },
  {
    title: 'Angular 13',
    date: '2021.11.03',
    description: 'Expansion of Ivy-based features and optimizations',
    link: 'https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296',
    list: [
      'View Engine is no longer available',
      'Streamlined and modernized Angular Package Format (APF), standardized on more modern JS formats such as ES2020',
      'Component API updates, dynamically creating components simplified, no need for <code>ComponentFactoryResolver</code> being injected',
      'End of IE11 support, apps will be smaller and load faster, removes the need for differential loading',
      'Improvements to the Angular CLI, supports the use of persistent build cache by default',
      'RxJS 7.4, projects with RxJS v6.x will have to manually update',
      'Support for TypeScript 4.4',
      'Improvements to Angular tests, <code>TestBed</code> better in tearing down test modules and environments after each test, DOM is cleaned after every test',
      'Meaningful improvements and changes to Angular Material components',
      'Improved a11y / accessibility standards on areas such as contrast, touch targets, ARIA, and more',
      'Support <i>Automatic font inlining</i> for Adobe Fonts',
      'Community contributions, Dynamically enable/disable validators, Restore history after canceled navigation',
    ],
  },
  {
    title: 'Angular 14',
    date: '2022.06.02',
    description:
      'From typed forms and standalone components to new primitives in the Angular <abbr title="Component Dev Kit">CDK</abbr>. This release includes many features and bug fixes directly contributed by community members, from adding router strong typing to more tree-shakable error messages.',
    link: 'https://blog.angular.io/angular-v14-is-now-available-391a6db736af',
    list: [
      'Simplifying Angular with Standalone Components (<abbr title="Not a stable API">developer preview</abbr>), reducing the need for <code>NgModule</code>\'s, imports directly in your <code>@Component()</code>',
      'Typed Angular Forms, implementing strict typing for the Angular Reactive Forms package',
      'Streamlined page title accessibility, <code>Route.title</code> now requires no additional imports and is strongly typed',
      'Extended developer diagnostics, more insight into your templates, compile-time warnings with precise, actionable suggestions',
      'Catch nullish coalescing on non-nullable values',
      'Tree-shakeable error messages',
      'More built-in improvements - Support TypeScript 4.7, ES2020 by default, ship smaller code',
      'Bind to protected component members directly from templates',
      '<code>NgModel</code> changes are now reflected in the UI for <code>OnPush</code> components',
      'Angular CLI enhancements, removed deprecated camel case arguments support and added support for combined aliases usage',
      'New CLI commands <code>ng completion</code> for <i>Real-time type-ahead autocompletion</i>',
      '<code>ng analytics</code> to control analytics settings and print analytics information',
      '<code>ng cache</code> to control and print cache information from the command line (enable, disable or delete from disk, and print statistics and information)',
      'Angular DevTools is available offline and in Firefox',
      'Experimental ESM Application Builds - which compiles pure ESM output',
    ],
  },
];
