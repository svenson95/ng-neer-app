import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
