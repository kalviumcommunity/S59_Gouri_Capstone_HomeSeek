import React from 'react'
import "./listPage.scss"
import { listData } from '../../lib/dummydata'

function ListPage() {

  const data=listData;
  return (
    <div className="listPage">
      <div className="listContainer">List</div>
      <div className="mapContainer">Map</div>
    </div>
  )
}

export default ListPage