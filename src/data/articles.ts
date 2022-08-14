import { PostElement } from 'src/app/core/models/post/element';

export interface Article {
  _id?: string;
  url: string;
  title: string;
  date: string;
  lastUpdate: string;
  elements: PostElement[];
}

export const testArticles: Array<Article> = [
  {
    url: 'angular-core-components',
    title: '@angular/core | Components',
    date: '2022-08-07',
    lastUpdate: '2022-08-07',
    elements: [
      {
        type: 'TEXT',
        content:
          'Architectural patterns like <abbr title="Model-View-View-Model">MVVM</abbr> and <abbr title="Model-View-Controller">MVC</abbr> describcing the way, how the different files (logic, template, style) of a component working together to keep changes between the view (template) and the state (logic) in sync. A lot of people on StackOverFlow say that angular is neither MVVC or MVC, it\'s more like a <i>component-based</i> architecture.',
      },
      {
        type: 'CODE',
        content:
          "@Component({\n  selector: 'app-title',\n  templateUrl: './title.component.html',\n  // template: `<h1>My App</h1>`,\n  styleUrls: ['./title.component.css'],\n  // standalone: true,\n  // changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class TitleComponent {}",
      },
      {
        type: 'TEXT',
        content:
          'Angular applications consists at least of one component, the <code>AppComponent</code> as the entry component loaded into the DOM by angular during the bootstrap process / application launch (<code>platformBrowserDynamic().bootstrapModule(AppModule)</code>) in <code>main.ts</code>. Each component contains metadata like <code>styles</code>, the <code>templateUrl</code> or <code><a href="/articles/angular-animations" target="_blank" rel="noopener noreferrer">animations</a></code>.',
      },
      {
        type: 'HINT',
        content:
          'Components are the main building block for Angular applications.',
      },
      {
        type: 'TEXT',
        content:
          'A component must belong to an NgModule in order for it to be available to another component or application. Components can be created with <code>ng generate component</code> or shortcut <code>ng g c</code> (Angular CLI needed) or manually. A angular component uses the <code>@Component</code> decorator, with the meta data (selector, templateUrl, ...) as arguments.',
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
                content: 'TypeScript class that defines behavior / logic',
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
              { content: 'Defines a unit test for component', align: 'left' },
            ],
          },
          {
            type: 'default',
            columns: [
              { content: 'app.<b>module.ts</b>', align: 'left' },
              {
                content: 'The Module defines how to assemble the component',
                align: 'left',
              },
            ],
          },
        ],
      },
      {
        type: 'TEXT',
        content:
          "Metadata, Property Binding (<code>@Input</code>'s/<code>@Output</code>'s), Template: Reference Variables, Interpolation, Event Binding, Two-way Binding",
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
  },
  {
    url: 'angular-core-modules',
    title: '@angular/core | NgModules',
    date: '2022-08-14',
    lastUpdate: '2022-08-15',
    elements: [
      {
        type: 'TEXT',
        content:
          'Modules are a great way to organize an application and extend it with capabilities from external libraries. NgModules consolidate components, directives, and pipes into cohesive blocks of functionality, each focused on a feature area, application business domain, workflow, or common collection of utilities.',
      },
      {
        type: 'HINT',
        content:
          'NgModules configure the injector and the compiler and help organize related things together.',
      },
      {
        type: 'CODE',
        content:
          '@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [ /* add modules here so Angular knows to use them */\n    BrowserModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}',
      },
      {
        type: 'TEXT',
        content: 'Preloading Strategy.',
      },
      {
        type: 'LINE',
        content: '<hr/>',
      },
      {
        type: 'LIST',
        content: 'References:',
        list: [
          "NgModules | 2022-08-14 | <a href='https://angular.io/guide/ngmodules' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/ngmodules</a>",
          "NgModule | 2022-08-14 | <a href='https://angular.io/api/core/NgModule' target='_blank' rel='noopener noreferrer'>https://angular.io/api/core/NgModule</a>",
        ],
      },
    ],
  },
  {
    url: 'angular-core-injectable-services',
    title: '@angular/core | Injectable Services',
    date: '2022-08-14',
    lastUpdate: '2022-08-15',
    elements: [
      {
        type: 'TEXT',
        content:
          'Services in Angular let you define states & methods that are accessible to either your whole application (<code>root</code>) or to an specific part / module - like a admin panel - of your application.',
      },
      {
        type: 'CODE',
        content:
          "@Injectable({\n  providedIn: 'root'\n  // providedIn: AdminModule\n})\nexport class ThemeService {}",
      },
      {
        type: 'TEXT',
        content:
          'Dependency Injection & Providing Services. HTTP Requests. Class with a well-defined purpose, Angular distinguishes components from services to increase modularity and reusability.',
      },
      {
        type: 'LINE',
        content: '<hr/>',
      },
      {
        type: 'LIST',
        content: 'References:',
        list: [
          "title | 2022-08-30 | <a href='https://angular.io/guide/file-structure' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/file-structure</a>",
        ],
      },
    ],
  },
  {
    url: 'angular-animations',
    title: '@angular/animations',
    date: '2022-05-20',
    lastUpdate: '2022-07-29',
    elements: [
      {
        type: 'TEXT',
        content:
          "When you surf through the web, you'll often see some animated visually changes, for example when you hover over some elements with your mouse and the background color of that button changes a bit. Especially most of the social media & streaming platforms take advantage of animations, cause it's improves the <abbr title=\"\">UX</abbr> by drawing the user's attention to a certain part of the application for instance.",
      },
      {
        type: 'TEXT',
        content:
          'Angular has a built-in animations builder, providing methods for defining web animation sequences, especially for complex animations with multiple transitions. Well-designed animations can make your application feel more straightforward to use.',
      },
      {
        type: 'HINT',
        content:
          'Motion is scientifically proven to attract attention, animations during a interactive process can improve the usability and user experience.',
      },
      {
        type: 'TEXT',
        content:
          '@angular/animations uses the Web Animations API and CSS as a fallback, so why should we use this library? In the end it\'s a question about your own preference and the animation you want to create. It is a choice between using JavaScript or CSS for defining animations, you\'ll find an interesting discussion on StackOverFlow about <a href="https://stackoverflow.com/questions/49628726/what-is-the-purpose-of-angular-animations" target="_blank">the purpose of the Angular animations system compared to CSS animations</a>.',
      },
      {
        type: 'TEXT',
        content:
          'To trigger and select the proper HTML elements we need to add the animations directive <code>@slideIn</code> in component.html, related to the components.ts where we defined the animations.',
      },
      {
        type: 'TEXT',
        content:
          'You can even trigger a animation through a condition variable connected with the animation directly <code>[@slideIn]="onSuccess"</code>. You don’t have to set and remove css classes conditionally, then write some keyframes and styling in css.',
      },
      {
        type: 'TEXT',
        content:
          "For more information check the article from the auth0 team <a href='https://auth0.com/blog/get-better-angular-ux-using-animation-techniques/#Brief-Overview-of-Angular-Animations' target='_blank'>Brief Overview of Angular Animations</a>.",
      },
      {
        type: 'LINE',
        content: '<hr/>',
      },
      {
        type: 'SUBTITLE',
        content: 'Dependencies',
      },
      {
        type: 'TEXT',
        content:
          'Enable <strong>@angular/animations</strong> by adding <code>BrowserAnimationsModule</code> to the <code>app.module.ts</code> of your project.',
      },
      {
        type: 'TEXT',
        content:
          '<code>@angular/animations/browser</code> <br/> Provides infrastructure for cross-platform rendering of animations in a browser.',
      },
      {
        type: 'TEXT',
        content:
          '<code>@angular/animations/browser/testing</code> <br/> Provides infrastructure for testing of the Animations browser subsystem.',
      },
      {
        type: 'LINE',
        content: '<hr/>',
      },
      {
        type: 'SUBTITLE',
        content: 'Setup',
      },
      {
        type: 'TEXT',
        content:
          'Add your animations to the components metadata, you even can add a host property to set the trigger tag on the component itself. The trigger name binds the animation to a specific element in the HTML Template, in this example the background-color of the component will change in 300ms. The transition event <code>* => *</code> ensures to execute the animation on every state change of earth.',
      },
      // {
      //   type: 'CODE',
      //   language: 'javascript',
      //   content:
      //     "@Component({\n  selector: ‘<app-foo>’,\n  templateUrl: ..., \n  host: { myAnimation: “earth === ‘round’ ? ‘VISIBLE’ : ‘HIDDEN’” },\n  animations: [\n    trigger(myAnimation, [\n      state('HIDDEN', style({ backgroundColor: 'transparent' })),\n      state('VISIBLE', style({ backgroundColor: 'red' })),\n      transition('* => *', animate('300ms ease-in-out')),\n    ]),],})",
      // },
      {
        type: 'LINE',
        content: '<hr/>',
      },
      {
        type: 'SUBTITLE',
        content: 'Understanding state transitions',
      },
      {
        type: 'TEXT',
        content:
          'With animations we aim to guide users between views, draw attention to some parts of application, increase spacial awareness, indicate if data is being loaded and probably the most important point - <strong>smoothly transition users between states</strong>.',
      },
      {
        type: 'HINT',
        content:
          'A transition is the process or a period of changing from one state or condition to another.',
      },
      // {
      //   type: 'CODE',
      //   language: 'javascript',
      //   content:
      //     "@Component({\n  selector: ‘<app-foo>’,\n  templateUrl: ..., \n  host: { myAnimation: “earth === ‘round’ ? ‘VISIBLE’ : ‘HIDDEN’” },\n  animations: [\n    trigger(myAnimation, [\n      state('HIDDEN', style({ backgroundColor: 'transparent' })),\n      state('VISIBLE', style({ backgroundColor: 'red' })),\n      transition('* => *', animate('300ms ease-in-out')),\n    ]),],})",
      // },
      {
        type: 'LINE',
        content: '<hr/>',
      },
      {
        type: 'LIST',
        content: 'References:',
        list: [
          "Introduction to Angular animations | 30.07.2022 | <a href='https://angular.io/guide/animations' target='_blank' rel='noopener noreferrer'>https://angular.io/guide/animations</a>",
          "A web animations deep dive with Angular | 30.07.2022 | <a href='https://blog.thoughtram.io/angular/2017/07/26/a-web-animations-deep-dive-with-angular.html' target='_blank' rel='noopener noreferrer'>https://blog.thoughtram.io/angular/2017/07/26/a-web-animations-deep-dive-with-angular.html</a>",
          "A guide to Animations in Angular | 30.07.2022 | <a href='https://blog.knoldus.com/a-guide-to-animations-in-angular/' target='_blank' rel='noopener noreferrer'>https://blog.knoldus.com/a-guide-to-animations-in-angular/</a>",
          "CSS Transitions made simple with Angular Animations | 01.08.2022 | <a href='https://blog.mimacom.com/css-transitions-made-simple-with-angular-animations/' target='_blank' rel='noopener noreferrer'>https://blog.mimacom.com/css-transitions-made-simple-with-angular-animations/</a>",
          "In-Depth guide into animations in Angular | 01.08.2022 | <a href='https://indepth.dev/posts/1285/in-depth-guide-into-animations-in-angular' target='_blank' rel='noopener noreferrer'>https://indepth.dev/posts/1285/in-depth-guide-into-animations-in-angular</a>",
        ],
      },
    ],
  },
  {
    url: 'angular-material-theming',
    title: '@angular/material/theming',
    date: '2022-08-10',
    lastUpdate: '2022-08-29',
    elements: [
      {
        type: 'TEXT',
        content:
          "Angular Material's theming system - based on <a href='https://material.io/design/material-theming/overview.html' target='_blank'>Google's Material Design specification</a> - lets you customize colors and typography styles for your application. Built with Sass under-the-hood, using color palettes instead of color values like rgb or hex to define theme colors. A palette is a collection of colors representing a portion of color space.",
      },
      {
        type: 'SUBTITLE',
        content: 'Typography',
      },
      {
        type: 'TEXT',
        content: '<h4 class="mat-display-4">mat-display-4</h4>',
      },
      {
        type: 'TEXT',
        content: '<h3 class="mat-display-3">mat-display-3</h3>',
      },
      {
        type: 'TEXT',
        content: '<h2 class="mat-display-2">mat-display-2</h2>',
      },
      {
        type: 'TEXT',
        content: '<h1 class="mat-display-1">mat-display-1</h1>',
      },
      {
        type: 'TEXT',
        content: '<h2 class="mat-headline">mat-headline</h2>',
      },
      {
        type: 'TEXT',
        content: '<h2 class="mat-title">mat-title</h2>',
      },
      {
        type: 'TEXT',
        content: '<h3 class="subheading-2">subheading-2</h3>',
      },
      {
        type: 'TEXT',
        content: '<h4 class="subheading-1">subheading-1</h4>',
      },
      {
        type: 'TEXT',
        content: '<p class="mat-body">mat-body</p>',
      },
      {
        type: 'TEXT',
        content: '<p class="mat-body-strong">mat-body-strong</p>',
      },
      {
        type: 'TEXT',
        content: '<p class="mat-small">mat-small</p>',
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
          "Customizing Typography | 2022-07-30 | <a href='https://material.angular.io/guide/typography' target='_blank' rel='noopener noreferrer'>https://material.angular.io/guide/typography</a>",
        ],
      },
    ],
  },
];
