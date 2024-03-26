import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <ComponentA />
      <ComponentB />
    </div>
  )
}

export default App
