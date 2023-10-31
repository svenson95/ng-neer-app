import { Article } from '../index';

export const START_CONCEPTS: Article = {
  url: 'concepts',
  title: 'Concepts',
  date: '2023-10-31',
  lastUpdate: '2023-10-31',
  elements: [
    {
      type: 'TEXT',
      content: 'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page applications. You should already have a basic understanding of TypeScript or JavaScript, HTML & CSS.',
    },
    {
      type: 'LIST',
      content: 'Angular is a …',
      list: [
        "- development platform, built on TypeScript",
        "component based-framework with well-integrated libraries, including routing, forms management and more",
        "suite of developer tools to help you develop, build, test and update your code",
      ],
    },
    {
      type: 'TEXT',
      content: 'Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with minimal effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.',
    },
    {
      type: 'HINT',
      content: 'With Angular, you\'re taking advantage of a platform that can scale from single-developer projects to enterprise-level applications',
    },
    {
      type: 'TEXT',
      content: 'The basic building blocks of the Angular framework are Angular components that are organized into Modules. Modules collect related code into functional sets; an Angular application is defined by a set of NgModules.',
    },
    {
      type: 'LINE',
      content: '<hr/>',
    },
    {
      type: 'TITLE',
      content: 'Essentials',
    },
    {
      type: 'LIST',
      content: '<b>Components</b> are the building blocks that compose an application. A component includes a TypeScript class with a @Component()decorator, including metadata which associates it with a template and style files, and other data like a selector.',
      list: [
        "Components define <i>views</i>, which are sets of screen elements that Angular can choose among and modify according to your program logic and data",
        "Components use <i>services</i>, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.",
      ],
    },
    {
      type: 'TEXT',
      content: 'Every component has an HTML <b>template</b> that declares how that component renders. You define this template either inline or by file path.',
    },
    {
      type: 'TEXT',
      content: 'A <b>Service</b> is a broad category encompassing any value, function, or feature that an application needs. It should do something specific and do it well. Angular distinguishes components from services to increase modularity and reusability.',
    },
    {
      type: 'TEXT',
      content: '<b>Dependency injection</b> lets you declare the dependencies of your TypeScript classes without taking care of their instantiation. Instead, Angular handles the instantiation for you.',
    },
    // {
    //   type: 'LINE',
    //   content: '<hr/>',
    // },
    // {
    //   type: 'LIST',
    //   content: 'References:',
    //   list: [
    //     "Theming Angular Material | 2022-07-30 | <a href='https://material.angular.io/guide/theming' target='_blank' rel='noopener noreferrer'>https://material.angular.io/guide/theming</a>",
    //     "Customizing Typography | 2022-07-30 | <a href='https://material.angular.io/guide/typography' target='_blank' rel='noopener noreferrer'>https://material.angular.io/guide/typography</a>",
    //   ],
    // },
  ],
};
