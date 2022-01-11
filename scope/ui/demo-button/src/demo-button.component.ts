import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'demo-button',
  template: `
    <button class="demo-button">
      <ng-content></ng-content>
    </button>
`,
  styleUrls: ['./demo-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoButtonComponent {
  constructor() {}
}
