import React from 'react'
import './ComponentA.css'

const style = {
    color: "white",
    margin: '30px 0px 30px 200px',
  };

const style2 = {
  color: "white",
  margin: '0 0 20px 50px'
}
const ComponentA = () => {
  return (
    <>
      <h1 style={style}>Explore</h1>
      <p style={style}>What are you gonna watch today?</p>
      <div className='pic'>
        <div className='text'>
          <h1 style={style2}>Weather with you </h1>
          <p style={style2}>Corrupt politicians, frenzied nationalists, and other warmongering<br></br> 
          forces constantly jeopardize the thin veneer of peace between <br></br>
          neighboring countries Ostania and Westalis. 
          </p>
        </div>
      </div>
    </>
  )
}

export default ComponentA
