import React from 'react'
import search from "../../assets/search.png"
import "./filter.scss";



function Filter() {
  return (
    <div className="filter">
      <h1>Search results for <b>Agra</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location'/>
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>

          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
          <option value="">any</option>
            <option value="apartmet">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>     
         </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='any'/>
        </div>
        <div className="item">
        <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id='maxPrice' name='maxPrice' placeholder='any'/>
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id='bedroom' name='bedroom' placeholder='Any'/>
        </div>
        <button>
        <img src={search} alt='Search'/>
        </button>
      </div>
    </div>
  )
}

export default Filter