import React from 'react'
const Move=()=>{
  const mouseMove=()=>{
  alert("Mouse Movement Found");
  console.log("Mouse Movement Detected");
  }
  return(
    <p onMouseMove={mouseMove}></p>
  )
}
const App = () => {
  return (
    <div>App</div>
  )
}

export default App