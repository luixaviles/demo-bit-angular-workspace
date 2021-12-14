---
labels: ['angular', 'typescript', 'demo-card']
description: 'A `demo-card` component.'
---

# DemoCard documentation

Import `DemoCardModule` into your application:

```ts
import { DemoCardModule } from './demo-card.module';

// add it to your module imports
@NgModule({
  imports: [
    DemoCardModule
  ]
})
export class AppModule {}
```

Use `DemoCardComponent` in your templates:

```html
<demo-card></demo-card>
```
