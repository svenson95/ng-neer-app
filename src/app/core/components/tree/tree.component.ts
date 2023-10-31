import { NestedTreeControl } from '@angular/cdk/tree';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { RouterLink } from "@angular/router";
import { ROADMAP_CATEGORIES } from "@data/articles";
import { RoadmapCategory, TopicNode } from "@modules/roadmap/models";

const MAT_MODULES = [MatTreeModule, MatIconModule];

@Component({
  selector: 'ngnr-tree',
  templateUrl: './tree.component.html',
  standalone: true,
  imports: [CommonModule, ...MAT_MODULES, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() treeControl!: NestedTreeControl<TopicNode>;
  @Input() dataSource!: MatTreeNestedDataSource<TopicNode>;
  @Input() category!: RoadmapCategory;

  hasChild = (_: number, node: TopicNode) =>
    !!node.children && node.children.length > 0;

  routerLinkFrom(url: string | null): string | null {
    const category = ROADMAP_CATEGORIES[this.category];
    return !!url ? `article/${category}/${url}` : null;
  }
}
