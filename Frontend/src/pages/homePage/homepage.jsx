import React from 'react'
import './homePage.scss'
import bg from "../../assets/bg.png"
import SearchBar from '../../components/searchBar/SearchBar'

function Homepage() {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>YOUR PARTNER IN PROPERTY</h1>
        <p>Where Every Listing Tells a Story</p>
        <SearchBar/>
        <div className="boxes">
          <div className="box"></div>
          <h1>120k </h1>
          <h2> people believe in our service</h2>

          <div className="box"></div>
          <h1>3000 </h1>
          <h2> Property and house ready for occupancy</h2>
          
        </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt=''></img>
      </div>
    </div>
  )
}

export default Homepage