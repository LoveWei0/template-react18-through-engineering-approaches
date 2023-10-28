import React from 'react'
// import PdfCom from './components/PdfCoM'
import ErrorComponent from './utils/errorManage'

const dd = () => {
  return <div>d</div>
}
export default function App() {
  return <>{ErrorComponent(dd)}</>
}
