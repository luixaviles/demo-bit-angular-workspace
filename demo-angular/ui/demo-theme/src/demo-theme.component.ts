import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-theme',
  template: `
    <div class="dark">
      <ng-content></ng-content>
    </div>
`,
  styleUrls: ['./demo-theme.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoThemeComponent {
  constructor() {}
}
