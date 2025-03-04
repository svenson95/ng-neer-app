import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <small class="font-semibold tracking-widest opacity-60">
      {{ currentYear }} ng-neer
    </small>

    <small class="font-semibold tracking-widest opacity-60">
      Made with <span class="font-mono">❤</span> in Magdeburg
    </small>
  `,
  selector: 'footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
