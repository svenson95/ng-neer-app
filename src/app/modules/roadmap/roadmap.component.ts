import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TopicNode, RoadmapCategory } from '@modules/roadmap/models';
import { ADVANCED_DATA, ECOSYSTEM_DATA, FUNDAMENTALS_DATA, START_DATA } from "@data/roadmap-tree";

interface TreeData {
  control: NestedTreeControl<TopicNode>;
  data: MatTreeNestedDataSource<TopicNode>;
}

@Component({
  selector: 'ngnr-roadmap',
  templateUrl: './roadmap.component.html',
})
export class RoadmapComponent {
  protected readonly RoadmapCategory = RoadmapCategory;

  private initTreeDataFrom = (data: TopicNode[]): TreeData => {
    const control = new NestedTreeControl<TopicNode>((node) => node.children);
    const dataSource = new MatTreeNestedDataSource<TopicNode>();
    dataSource.data = data;
    return { control, data: dataSource };
  }

  readonly start: TreeData = this.initTreeDataFrom(START_DATA);
  readonly fundamentals: TreeData = this.initTreeDataFrom(FUNDAMENTALS_DATA);
  readonly advanced: TreeData = this.initTreeDataFrom(ADVANCED_DATA);
  readonly ecosystem: TreeData = this.initTreeDataFrom(ECOSYSTEM_DATA);
}
