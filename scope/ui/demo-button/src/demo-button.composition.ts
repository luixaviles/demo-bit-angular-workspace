import { Component, NgModule } from '@angular/core';
import { DemoButtonModule } from './demo-button.module';
import { DemoThemeModule } from '@luixaviles/demo-angular.ui.demo-theme';
@Component({
  selector: 'demo-button-composition-cmp',
  template: `
  <section>
    DemoButton with Default Theme: 
    <div>
      <demo-button>Click Me</demo-button>
    </div>
  </section>
  <section>
    DemoButton with Dark Theme: 
    <demo-theme>
      <demo-button>Click Me</demo-button>
    </demo-theme>
  </section>
  `
})
class DemoButtonCompositionComponent {}

@NgModule({
  declarations: [DemoButtonCompositionComponent],
  imports: [DemoButtonModule, DemoThemeModule],
  bootstrap: [DemoButtonCompositionComponent]
})
export class DemoButtonCompositionModule {}
