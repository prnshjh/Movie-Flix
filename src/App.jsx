import React, { useState } from 'react'
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';

const App = () => {
    const [count, setCount]=useState(0);
  return (
    <div>
        <ComponentOne count={count} onClickHandler={()=>setCount(count+1)}></ComponentOne>
        <ComponentTwo count={count} onClickHandler={()=>setCount(count+1)}></ComponentTwo>
    </div>
  )
}

export default App