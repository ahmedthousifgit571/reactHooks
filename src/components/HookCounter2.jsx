import React, { useState } from 'react'

function HookCounter2() {
  let initalCount = 0
  const [count,setCount] = useState(initalCount)
  return (
    <div>
      count : {count}
      <button onClick={()=> setCount(initalCount)}>reset</button>
      <button onClick={()=> setCount(prevState => prevState + 1)}>+</button>
      <button onClick={()=> setCount(prevState => prevState - 1 )}>-</button>

    </div>
  )
}

export default HookCounter2
