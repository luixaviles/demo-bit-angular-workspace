import { Component, NgModule } from '@angular/core';
import { DemoCardTitleModule } from './demo-card-title.module';

@Component({
  selector: 'demo-card-title-composition-cmp',
  template: `DemoCardTitle composition: <demo-card-title></demo-card-title>`
})
class DemoCardTitleCompositionComponent {}

@NgModule({
  declarations: [DemoCardTitleCompositionComponent],
  imports: [DemoCardTitleModule],
  bootstrap: [DemoCardTitleCompositionComponent]
})
export class DemoCardTitleCompositionModule {}
