import { Article } from '../index';

export const START_CLASSES: Article = {
  url: 'classes',
  title: 'Classes',
  date: '2023-10-31',
  lastUpdate: '2023-10-31',
  elements: [
    {
      type: 'TEXT',
      content: 'Use a props object in the constructor.',
    },
    {
      type: 'CODE',
      content:
        "interface IPerson {\n  name: string;\n  age: number;\n  }\n\nclass Person {\n  name: string;\n  age: number;\n\n  constructor(props: IPerson) {\n    this.name = props.name;\n    this.age = props.age;\n  }\n}",
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
