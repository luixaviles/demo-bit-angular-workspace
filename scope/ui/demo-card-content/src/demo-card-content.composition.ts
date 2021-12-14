import { Component, NgModule } from '@angular/core';
import { DemoCardContentModule } from './demo-card-content.module';

@Component({
  selector: 'demo-card-content-composition-cmp',
  template: `DemoCardContent composition: <demo-card-content></demo-card-content>`
})
class DemoCardContentCompositionComponent {}

@NgModule({
  declarations: [DemoCardContentCompositionComponent],
  imports: [DemoCardContentModule],
  bootstrap: [DemoCardContentCompositionComponent]
})
export class DemoCardContentCompositionModule {}
