import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.component';
import { TreeComponent } from 'src/app/core/components/tree/tree.component';

@NgModule({
  declarations: [StartComponent],
  exports: [StartComponent],
  imports: [CommonModule, MatTabsModule, StartRoutingModule, TreeComponent],
})
export class StartModule {}
