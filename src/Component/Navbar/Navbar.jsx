import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 style={{color: "white", margin: '0 0 0 30px'}}>Anonime</h1>
      <ul>
        <li>Home</li>
        <li>List anime</li>
      </ul>
      <div className='searchbox'>
        <input type="text" placeholder='Search anime or movie'/>
      </div>
    </div>
  )
}

export default Navbar
