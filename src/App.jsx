import React from 'react'
import Weather from './Components/Weather'


const App = () => {
  return (
    <div>
      <h1>
        <Weather temperature={26}/>
      </h1>
    </div>
  )
}

export default App