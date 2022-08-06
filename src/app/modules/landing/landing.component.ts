import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fundamentals',
    children: [
      { name: 'Angular CLI' },
      { name: 'NgModules' },
      {
        name: 'Components',
        children: [
          { name: 'Class' },
          { name: 'Template' },
          { name: 'Metadata' },
        ],
      },
      {
        name: 'Template Syntax',
        children: [
          { name: 'Interpolation' },
          { name: 'Property Binding' },
          { name: 'Event Binding' },
          { name: 'Two-way Binding' },
          { name: 'Pipes' },
          { name: 'Template Reference Variables' },
        ],
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
          {
            name: 'Attribute',
            children: [{ name: 'NgClass' }, { name: 'NgStyle' }],
          },
        ],
      },
    ],
  },
  {
    name: 'Advanced',
    children: [
      {
        name: 'Services',
        children: [
          { name: 'Dependency Injection' },
          { name: 'Providing Services' },
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
        name: 'HTTP',
        children: [
          { name: 'HttpClient' },
          { name: 'Typed Response' },
          { name: 'Error Handling' },
          { name: 'Interceptors' },
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
          { name: '<code>ReactiveFormsModule</code>' },
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
        name: 'Routing',
        children: [
          { name: '<code>RouterModule</code>' },
          { name: 'Configuring Routes' },
          { name: 'RouterOutlet' },
          { name: '<code>routerLink</code>' },
          { name: 'Wildcard Routes' },
          { name: 'Redirecting Routes' },
          { name: 'Route Parameters' },
          { name: 'Nested Routes' },
          { name: 'Relative Paths' },
          { name: 'Lazy Loading' },
          { name: 'Route Guards' },
        ],
      },
      {
        name: 'Animations',
        children: [{ name: '@angular/animations' }],
      },
    ],
  },
  {
    name: 'Ecosystem',
    children: [
      { name: 'State Management', children: [{ name: 'ngRx' }] },
      { name: 'UI Library', children: [{ name: 'Angular Material' }] },
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
        children: [{ name: 'i18n' }, { name: 'Accessibility' }],
      },
    ],
  },
];

@Component({
  selector: 'ngnr-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;
}
