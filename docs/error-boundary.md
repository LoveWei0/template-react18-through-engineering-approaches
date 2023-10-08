- pnpm add -D react-error-boundary

### 第一步

```tsx
// error-boundary
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
```

### 第二步

```tsx
function MyFallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>出错啦</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>点击重试</button>
    </div>
  )
}
```

### 第三步

```tsx
// 可能会抛出javascript错误的一些组件逻辑
function MyComponent() {
  return (
    <>
      <h3 className="text-blue-600">App</h3>
      <Button>hello</Button>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          className="w-auto,h-auto"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '650px'
          }}
        >
          <Viewer fileUrl="../public/work.pdf" theme={{ theme: 'dark' }} />
        </div>
      </Worker>
    </>
  )
}
```

### 第四步

```tsx
export default function App() {
  const [someKey, setSomeKey] = useState(null)
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => setSomeKey(null)}
      resetKeys={['someKey']}
    >
      <MyComponent someKey={someKey} />
    </ErrorBoundary>
  )
}
```

## 异步边界处理

> - 在 handleSubmit() 函数中发生的错误不会被 React 呈现生命周期捕获。因此，我们使用 React -error-boundary 的 useErrorHandler() 提供的 handleError 函数在 React 生命周期中重新抛出错误，以便最近的 ErrorBoundary 可以捕获它。

```tsx
// 例子
import { useErrorHandler } from 'react-error-boundary'

function Greeting() {
  const [greeting, setGreeting] = React.useState(null)
  const handleError = useErrorHandler()

  function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    fetchGreeting(name).then(
      newGreeting => setGreeting(newGreeting),
      error => handleError(error)
    )
  }

  return greeting ? (
    <div>{greeting}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input id="name" />
      <button type="submit">get a greeting</button>
    </form>
  )
}
```
