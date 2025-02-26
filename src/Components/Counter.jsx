import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount]=useState(0);
   
  return (
    <div>
      <h1>
        Counter: {Count}

      </h1>
      <button onClick={()=>setCount(Count + 1)}>Increment</button>
      
      </div>
  )
}

export default Counter