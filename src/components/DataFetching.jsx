import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetching() {
    const [post,setPost] = useState([])
    const [id, setId] = useState(1)
    const [buttonClickId,setButtonClickId] = useState(1)

    const handleClick = ()=>{
        setButtonClickId(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[buttonClickId])
  return (
    <div>
        <input type="text" value={id} onChange={(e)=> setId(e.target.value)}/>
        <button onClick={handleClick}>fetch item</button>
        <li>{post.title}</li>
      {/* <ul>
        {
            posts.map((post)=> <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
