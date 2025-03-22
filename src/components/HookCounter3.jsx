import React, { useState } from 'react'

function HookCounter3() {
    const [name, setname] = useState({firstName: '' , secondName: ''})
  return (
    <div>
      <form action="">
        <input type="text" value={name.firstName} onChange={e => setname({...name,firstName: e.target.value})} />
        <input type="text" value={name.lastName}  onChange={e=> setname({...name,lastName: e.target.value})}/>
      </form>
      <h2>your firstName : {name.firstName}</h2>
      <h2>your lastname : {name.lastName}</h2>
    </div>
  )
}

export default HookCounter3
