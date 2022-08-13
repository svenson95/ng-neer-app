import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TopicNode } from 'src/app/core/models/angular-tree';
import { TREE_DATA } from 'src/data/angular-tree';
@Component({
  selector: 'ngnr-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  treeControl = new NestedTreeControl<TopicNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TopicNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TopicNode) =>
    !!node.children && node.children.length > 0;
}
