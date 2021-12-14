import { Component } from '@angular/core';

@Component({
  selector: 'demo-card-content',
  template: `
    <p class="demo-card-content">
    <slot></slot>
    </p>
`,
  styleUrls: ['./demo-card-content.component.scss']
})
export class DemoCardContentComponent {
  constructor() {}
}
