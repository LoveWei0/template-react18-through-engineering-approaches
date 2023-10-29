### 第一步

```js
pnpm add @wangeditor/editor -D
pnpm add @wangeditor/editor-for-react -D
```

### 第二步

```tsx
// 新建RichText.tsx
export default function RichText() {
  return <></>
}
```

### 使用wangeditor

```tsx
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import type {
  IDomEditor,
  IEditorConfig,
  IToolbarConfig
} from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
export default function RichText() {
  // 初始化editor实例
  const [editor, setEditor] = useState<IDomEditor | null>(null)
  // 编辑器初始化内容
  const [html, setHtml] = useState(`h`)
  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...'
  }
  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          mode="default"
          editor={editor}
          defaultConfig={toolbarConfig}
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          onCreated={setEditor}
          onChange={editor => setHtml(editor?.getHtml())}
          defaultConfig={editorConfig}
          value={html}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>{html}</div>
    </>
  )
}
```
