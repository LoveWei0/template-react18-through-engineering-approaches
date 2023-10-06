- pnpm add pdfjs-dist@3.4.120
- pnpm add @react-pdf-viewer/core@3.12.0

> - import { Worker } from '@react-pdf-viewer/core';

```tsx
 <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

    <!-- The viewer component will be put here -->
    ...

 </Worker>
```

### 完整示例

```tsx
import React from 'react'
import { Button } from 'antd'
// Import the main component
import { Viewer, Worker } from '@react-pdf-viewer/core'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css'

export default function App() {
  return (
    <div>
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
    </div>
  )
}
```

> - fileUrl是路径
