import { NestedTreeControl } from '@angular/cdk/tree';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { TopicNode } from '../../models/angular-tree';

@Component({
  selector: 'ngnr-tree',
  templateUrl: './tree.component.html',
  standalone: true,
  imports: [MatTreeModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent implements OnInit {
  @Input() treeControl!: NestedTreeControl<TopicNode>;
  @Input() dataSource!: MatTreeNestedDataSource<TopicNode>;

  ngOnInit(): void {}

  hasChild = (_: number, node: TopicNode) =>
    !!node.children && node.children.length > 0;
}
