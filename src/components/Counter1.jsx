import React, { use, useEffect, useState } from 'react'

function Counter1() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('')

  useEffect(()=>{
    document.title =`you clicked ${count}`
    console.log('useEffect - updating document title')
  },[count])   //conditonal render
  return (
    <div>
        <input type="text" onChange={(e)=> setName(e.target.value)} />
      <button onClick={()=> setCount(count+1)}>add item {count}</button>
    </div>
  )
}

export default Counter1
