import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { TopicNode } from '@core/models';

const MAT_MODULES = [MatTreeModule, MatIconModule];

@Component({
  selector: 'ngnr-tree',
  templateUrl: './tree.component.html',
  standalone: true,
  imports: [...MAT_MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent implements OnInit {
  @Input() treeControl!: NestedTreeControl<TopicNode>;
  @Input() dataSource!: MatTreeNestedDataSource<TopicNode>;

  ngOnInit(): void {}

  hasChild = (_: number, node: TopicNode) =>
    !!node.children && node.children.length > 0;
}
