---
labels: ['angular', 'typescript', 'demo-theme']
description: 'A `demo-theme` component.'
---

# DemoTheme documentation

Import `DemoThemeModule` into your application:

```ts
import { DemoThemeModule } from './demo-theme.module';

// add it to your module imports
@NgModule({
  imports: [
    DemoThemeModule
  ]
})
export class AppModule {}
```

Use `DemoThemeComponent` in your templates:

```html
<demo-theme></demo-theme>
```
