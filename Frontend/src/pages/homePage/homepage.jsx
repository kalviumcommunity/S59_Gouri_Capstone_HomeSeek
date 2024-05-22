import React from 'react'
import './homePage.scss'
import bg from "../../assets/bg.png"

function Homepage() {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <h1>YOUR PARTNER IN PROPERTY</h1>
      </div>
      <div className="imgContainer">
        <img src={bg} alt=''></img>
      </div>
    </div>
  )
}

export default Homepage