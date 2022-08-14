import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.component';
import { TreeComponent } from 'src/app/core/components/tree/tree.component';

@NgModule({
  declarations: [LandingComponent],
  exports: [LandingComponent],
  imports: [CommonModule, MatTabsModule, LandingRoutingModule, TreeComponent],
})
export class LandingModule {}
