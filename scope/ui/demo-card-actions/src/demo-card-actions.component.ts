import { Component } from '@angular/core';

@Component({
  selector: 'demo-card-actions',
  template: `
    <div class="demo-card-actions">
      <slot></slot>
    </div>
`,
  styleUrls: ['./demo-card-actions.component.scss']
})
export class DemoCardActionsComponent {
  constructor() {}
}
