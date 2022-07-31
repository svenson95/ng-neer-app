import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  standalone: true,
})
export class FooterComponent implements OnInit {
  public links = [{ href: 'https://github.com/svenson95', label: 'github' }];

  constructor() {}

  ngOnInit(): void {}
}
