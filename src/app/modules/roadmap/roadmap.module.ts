import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutingModule } from './roadmap-routing.component';
import { TreeComponent } from 'src/app/core/components/tree/tree.component';

@NgModule({
  declarations: [RoadmapComponent],
  exports: [RoadmapComponent],
  imports: [CommonModule, MatTabsModule, RoadmapRoutingModule, TreeComponent],
})
export class RoadmapModule {}
