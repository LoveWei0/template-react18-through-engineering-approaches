### 第一步

```js
pnpm add mobx --save
pnpm add mobx-react-lite --save
```

### 第二步

```ts
// mobx.ts
import { makeAutoObservable } from 'mobx'

export class User {
  name = 'Hello Mobx'
  age = 18
  constructor() {
    makeAutoObservable(this)
  }
  addition() {
    this.age += 1
  }
}
```

### 第三步

```tsx
// ShowMobx.tsx
import React from 'React'

const ShowMobx = observer(({ store }) => {
  return (
    <>
      <div>mobx</div>
      <p>{store.name}</p>
      <button>增加年龄{store.age}</button>
    </>
  )
})
```

### 第四步

```tsx
// App.tsx
import React from 'react'
// component
import ShowMob from './pages/showMobs'
import { user } from './mobx'

export default function App() {
  return (
    <>
      <ShowMob store={user} />
    </>
  )
}
```
