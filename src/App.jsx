import React from 'react'
import Person from './Person'
import Product from './Product'

const App = () => {
  return (<div>
  <Person name="Priyanshu" age={21} />
  <Product name="Iphone" price={799}/>
  </div>
  )
}

export default App