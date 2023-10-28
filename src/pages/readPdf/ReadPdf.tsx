import React from 'react'

import { Button } from 'antd'
// Import the main component
import { Viewer, Worker } from '@react-pdf-viewer/core'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css'
// error-boundary
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>出错啦</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>点击重试</button>
    </div>
  )
}

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

export default function ReadPdf() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      resetKeys={['someKey']}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}
