import { Component } from '@angular/core';

@Component({
  selector: 'demo-card-title',
  template: `
    <h4>
        <ng-content></ng-content>
    </h4>
`,
  styleUrls: ['./demo-card-title.component.scss']
})
export class DemoCardTitleComponent {
  constructor() {}
}
