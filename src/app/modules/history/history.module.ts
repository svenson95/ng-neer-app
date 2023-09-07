import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
  imports: [CommonModule, HistoryRoutingModule, MatButtonModule],
})
export class HistoryModule {}
