import React from 'react'
import { observer } from 'mobx-react-lite'

const ShowMob = observer(({ store }) => {
  return (
    <>
      <div>Mobx{store.age}</div>
      <p>{store.name}</p>
      <button onClick={() => store.addition()}>按钮</button>
    </>
  )
})

export default ShowMob
