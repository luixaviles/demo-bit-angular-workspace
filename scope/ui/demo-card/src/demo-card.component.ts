import { Component } from '@angular/core';

@Component({
  selector: 'demo-card',
  template: `
    <div class="demo-card">
        <ng-content></ng-content>
    </div>
`,
  styleUrls: ['./demo-card.component.scss']
})
export class DemoCardComponent {
  constructor() {}
}
