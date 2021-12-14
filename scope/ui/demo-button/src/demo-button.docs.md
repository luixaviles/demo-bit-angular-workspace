---
labels: ['angular', 'typescript', 'demo-button']
description: 'A `demo-button` component.'
---

# DemoButton documentation

Import `DemoButtonModule` into your application:

```ts
import { DemoButtonModule } from './demo-button.module';

// add it to your module imports
@NgModule({
  imports: [
    DemoButtonModule
  ]
})
export class AppModule {}
```

Use `DemoButtonComponent` in your templates:

```html
<demo-button></demo-button>
```
