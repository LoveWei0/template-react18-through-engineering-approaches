import React, { useState } from 'react'
// error-boundary
import { FallbackProps, ErrorBoundary } from 'react-error-boundary'
// antd
import { Button } from 'antd'

export function MyFallbackComponent({
  error,
  resetErrorBoundary
}: FallbackProps) {
  return (
    <div role="alert">
      <p>出错了</p>
      <pre className="bg-red-600">{error.message}</pre>
      <Button type="primary" danger onClick={resetErrorBoundary}>
        点击重试
      </Button>
    </div>
  )
}

export default function ErrorComponent(Com) {
  const [someKey, setSomeKey] = useState(null)
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => setSomeKey(null)}
      resetKeys={['someKey']}
    >
      <Com someKey={someKey} />
    </ErrorBoundary>
  )
}
