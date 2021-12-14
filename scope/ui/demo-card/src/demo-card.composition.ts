import { Component, NgModule } from '@angular/core';
import { DemoCardModule } from './demo-card.module';

@Component({
  selector: 'demo-card-composition-cmp',
  template: `DemoCard composition: <demo-card></demo-card>`
})
class DemoCardCompositionComponent {}

@NgModule({
  declarations: [DemoCardCompositionComponent],
  imports: [DemoCardModule],
  bootstrap: [DemoCardCompositionComponent]
})
export class DemoCardCompositionModule {}
