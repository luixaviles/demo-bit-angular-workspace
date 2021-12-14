import { Component } from '@angular/core';

@Component({
  selector: 'demo-button',
  template: `
    <button class="demo-button">
      <ng-content></ng-content>
    </button>
`,
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent {
  constructor() {}
}
