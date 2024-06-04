import React from 'react'
import {Link} from "react-router-dom";
import "./card.scss";
import pin from "../../assets/pin.png";
import bedroom from "../../assets/bedroom.png";
import bathroom from "../../assets/bathroom.png";
import save from "../../assets/save.png";
import chat from "../../assets/chat.png";


function Card({item}) {
  return (
    <div className="card">
      <Link to={`${item.id}`} className='imageContainer'>
        <img src={item.img} alt="img"/>
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
        <img src={pin} alt="img"/>
        <span>{item.address}</span>

        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bedroom}  alt='bedroom'/>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bathroom}  alt='bathroom'/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
            <img src={save}  alt='save'/>  
            </div>
            <div className="icon">
            <img src={chat}  alt='chat'/>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card