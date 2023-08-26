import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TopicNode } from '@core/models';
import { ADVANCED_DATA, ECOSYSTEM_DATA, FUNDAMENTALS_DATA } from "@data/angular-tree";

interface TreeData {
  control: NestedTreeControl<TopicNode>;
  data: MatTreeNestedDataSource<TopicNode>;
}

@Component({
  selector: 'ngnr-start',
  templateUrl: './start.component.html',
})
export class StartComponent {
  fundamentals: TreeData = this.setTreeData(FUNDAMENTALS_DATA);
  advanced: TreeData = this.setTreeData(ADVANCED_DATA);
  ecosystem: TreeData = this.setTreeData(ECOSYSTEM_DATA);

  private setTreeData(tree: any): TreeData {
    const control = new NestedTreeControl<TopicNode>((node) => node.children);
    const dataSource = new MatTreeNestedDataSource<TopicNode>();
    dataSource.data = tree;
    return { control, data: dataSource };
  }
}
