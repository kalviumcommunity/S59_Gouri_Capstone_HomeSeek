import React from 'react'
import './homePage.scss'
import bg from "../../assets/bg.png"

function Homepage() {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>YOUR PARTNER IN PROPERTY</h1>
        <p>Where Every Listing Tells a Story</p>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt=''></img>
      </div>
    </div>
  )
}

export default Homepage