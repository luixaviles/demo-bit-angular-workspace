import { Component, NgModule } from '@angular/core';
import { DemoThemeModule } from './demo-theme.module';

@Component({
  selector: 'demo-theme-composition-cmp',
  template: `DemoTheme composition: <demo-theme></demo-theme>`
})
class DemoThemeCompositionComponent {}

@NgModule({
  declarations: [DemoThemeCompositionComponent],
  imports: [DemoThemeModule],
  bootstrap: [DemoThemeCompositionComponent],
})
export class DemoThemeCompositionModule {}
