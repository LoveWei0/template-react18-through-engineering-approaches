import React from 'react'
// import PdfCom from './components/PdfCoM'
// import ErrorComponent from './utils/errorManage'
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
