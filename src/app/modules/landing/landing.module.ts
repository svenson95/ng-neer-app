import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.component';

@NgModule({
  declarations: [LandingComponent],
  exports: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
