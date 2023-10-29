import React, { useState, useEffect } from 'react'
// 富文本样式
import '@wangeditor/editor/dist/css/style.css'
// @wangeditor/editor-for-react
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
// @wangeditor
import type {
  IDomEditor,
  IEditorConfig,
  IToolbarConfig
} from '@wangeditor/editor'

export default function RichText() {
  // editor实例
  const [editor, setEditor] = useState<IDomEditor | null>(null)
  // 编辑器内容
  const [html, setHtml] = useState(`<div>H</div>`)
  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...'
  }
  // 模拟异步请求的数据
  useEffect(() => {
    setTimeout(() => {
      setHtml(`hello World`)
    }, 1000)
  }, [])
  // 及时销毁(很重要)
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])
  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          onCreated={setEditor}
          onChange={editor => setHtml(editor?.getHtml())}
          defaultConfig={editorConfig}
          value={html}
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>{html}</div>
    </>
  )
}
