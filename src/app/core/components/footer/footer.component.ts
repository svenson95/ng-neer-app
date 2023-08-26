import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  standalone: true,
})
export class FooterComponent {
  public links = [{ href: 'https://github.com/svenson95', label: 'github' }];
}
