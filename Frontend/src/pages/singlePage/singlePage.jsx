import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/Slider'
import Map from "../../components/map/Map"
import {singlePostData, userData} from "../../lib/dummydata";
import pin from "../../assets/pin.png";
import save from "../../assets/save.png";
import chat from "../../assets/chat.png";
import pet from "../../assets/pet.png";
import utility from "../../assets/utility.png";
import fee from "../../assets/fee.png";
import bedroom from "../../assets/bedroom.png";
import bathroom from "../../assets/bathroom.png";
import size from "../../assets/size.png";






function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} alt='pin'/>
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ${singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt='img'/>
                <span>
                  {userData.name}
                </span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
     <div className="features">
      <div className="wrapper">
        <p className='title'>General</p>
        <div className="listVertical">
          <div className="feature">
            <img src={utility} alt="utility"/>
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src={pet} alt="petPolicy"/>
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pets allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src={fee} alt="fee"/>
            <div className="featureText">
              <span>Fee Policy</span>
              <p>Varied Property Fee</p>
            </div>
          </div>
        </div>
        <p className='title'> Room Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src={size} alt='size'/>
            <span>80 sqf</span>
          </div>
          <div className="size">
            <img src={bedroom} alt='size'/>
            <span>2 Beds</span>
          </div>
          <div className="size">
            <img src={bathroom} alt='size'/>
            <span>1 Bathroom</span>
          </div>
        </div>
        <p className='title'>Nearby Places</p>
        <div className="listHorizontal">
        <div className="feature">
        <img src={utility} alt="utility"/>
        <div className="featureText">
              <span>School</span>
              <p>150m away</p>
            </div>
          </div>
          <div className="feature">
          <img src={pet} alt="petPolicy"/>
          <div className="featureText">
              <span>Bus Stop</span>
              <p>90m away</p>
            </div>
          </div>
          <div className="feature">
          <img src={fee} alt="fee"/>
          <div className="featureText">
              <span>Restuarant</span>
              <p>250m aaway</p>
            </div>
          </div>
        </div>
        <p className='title'>Location</p>
        <div className="mapContainer">
          <Map items={[singlePostData]}/>
        </div>
        <div className="buttons">
          <button>
            <img src={chat} alt="chat"/>
            Send a Message
          </button>
          <button>
            <img src={save} alt="save"/>
            Save the Place         
          </button>
        </div>


      </div>
     </div>

    </div>
  )
}

export default SinglePage