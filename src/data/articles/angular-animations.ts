import { Article } from '.';

export const ANGULAR_ANIMATIONS: Article = {
  url: 'angular-animations',
  title: '@angular/animations',
  date: '2022-05-20',
  lastUpdate: '2022-07-29',
  elements: [
    {
      type: 'TEXT',
      content:
        "When you surf through the web, you'll often see some animated visually changes, for example when you hover a button and the background color of that button changes. Nowadays a lot of applications take advantage of animations, cause it's improves the <abbr title=\"\">UX</abbr> by drawing the user's attention to a certain part of the application for instance.",
    },
    {
      type: 'HINT',
      content:
        'Motion is scientifically proven to attract attention, animations during a interactive process can improve the usability and user experience.',
    },
    {
      type: 'TEXT',
      content:
        'Angular has a built-in animations builder, providing methods for defining web animation sequences, especially for complex animations with multiple transitions. Well-designed animations can make your application feel more straightforward to use.',
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
        '@Component({\n  ...\n  animations: [...]\n})\nexport class TitleComponent {}',
    },
    {
      type: 'LINE',
      content: '<hr/>',
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
};
