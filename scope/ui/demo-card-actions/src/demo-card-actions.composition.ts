import { Component, NgModule } from '@angular/core';
import { DemoCardActionsModule } from './demo-card-actions.module';

@Component({
  selector: 'demo-card-actions-composition-cmp',
  template: `DemoCardActions composition: <demo-card-actions></demo-card-actions>`
})
class DemoCardActionsCompositionComponent {}

@NgModule({
  declarations: [DemoCardActionsCompositionComponent],
  imports: [DemoCardActionsModule],
  bootstrap: [DemoCardActionsCompositionComponent]
})
export class DemoCardActionsCompositionModule {}
