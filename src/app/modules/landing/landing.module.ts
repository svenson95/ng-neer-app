import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LandingComponent],
  exports: [LandingComponent],
  imports: [CommonModule, MatTreeModule, MatIconModule, LandingRoutingModule],
})
export class LandingModule {}
