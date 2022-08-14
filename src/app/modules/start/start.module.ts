import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.component';
import { TreeComponent } from 'src/app/core/components/tree/tree.component';

@NgModule({
  declarations: [StartComponent],
  exports: [StartComponent],
  imports: [CommonModule, MatTabsModule, StartRoutingModule, TreeComponent],
})
export class StartModule {}
