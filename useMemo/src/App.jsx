import { useMemo, useState } from 'react'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {

    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {

  // const magical = nums.find(i => i.isMagical)
  const magical = useMemo(() => nums.find(i => i.isMagical), [nums])

  return (
    <>
     <span>magical number is {magical.index}</span>
    </>
  )
}

export default App
