import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { RouterModule } from '@angular/router';
import { AppIconComponent, ThemeToggleComponent } from '@core/components';

const MAT_MODULES = [MatButtonModule, MatProgressSpinnerModule,]

const STANDALONE_COMPONENTS = [AppIconComponent, ThemeToggleComponent,]

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ...MAT_MODULES,
    ...STANDALONE_COMPONENTS
  ],
})
export class HeaderComponent {
  @Input() isLoading!: boolean;
}
