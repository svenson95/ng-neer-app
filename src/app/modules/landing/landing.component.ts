import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TopicNode } from 'src/app/core/models/angular-tree';
import {
  ADVANCED_DATA,
  ECOSYSTEM_DATA,
  FUNDAMENTALS_DATA,
} from 'src/data/angular-tree';

interface TreeData {
  control: NestedTreeControl<TopicNode>;
  data: MatTreeNestedDataSource<TopicNode>;
}
@Component({
  selector: 'ngnr-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  fundamentals: TreeData = this.setTreeData(FUNDAMENTALS_DATA);
  advanced: TreeData = this.setTreeData(ADVANCED_DATA);
  ecosystem: TreeData = this.setTreeData(ECOSYSTEM_DATA);

  private setTreeData(tree: any): TreeData {
    const control = new NestedTreeControl<TopicNode>((node) => node.children);
    const dataSource = new MatTreeNestedDataSource<TopicNode>();
    dataSource.data = tree;
    return { control, data: dataSource };
  }

  hasChild = (_: number, node: TopicNode) =>
    !!node.children && node.children.length > 0;
}
