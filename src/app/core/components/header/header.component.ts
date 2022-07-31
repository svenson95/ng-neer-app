import { Component, Input } from '@angular/core';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AppIconComponent,
    ThemeToggleComponent,
  ],
})
export class HeaderComponent {
  @Input() isLoading!: boolean;
}
