import { Component, NgModule } from '@angular/core';
import { DemoButtonModule } from './demo-button.module';

@Component({
  selector: 'demo-button-composition-cmp',
  template: `DemoButton composition: <demo-button></demo-button>`
})
class DemoButtonCompositionComponent {}

@NgModule({
  declarations: [DemoButtonCompositionComponent],
  imports: [DemoButtonModule],
  bootstrap: [DemoButtonCompositionComponent]
})
export class DemoButtonCompositionModule {}
