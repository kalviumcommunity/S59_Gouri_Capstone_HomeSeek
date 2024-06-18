import React, { useState } from 'react'
import "./slider.scss"
import arrow from "../../assets/arrow.png";

function Slider({images}) {

  const[imageIndex,setImageIndex]=useState(null);

  const changeSlide=(direction)=>{
    if(direction==="left"){
      if(imageIndex===0)
        {
          setImageIndex(images.length-1)
        }
        else{
           setImageIndex(imageIndex-1)
        }

    }
    else{
      if(imageIndex===images.length-1)
        {
          setImageIndex(0)
        }

    
    else{
      setImageIndex(imageIndex+1)

    }

  }
}

  return (
    <div className="slider">
    { imageIndex!==null &&( <div className="fullSlider">
        <div className="arrow" onClick={()=>changeSlide("left")}>
          <img src={arrow} alt="arrow"/>
        </div>
        <div className="imgContainer">
          <img src={images[imageIndex]} alt="image"/>
        </div>
        <div className="arrow">
          <img src={arrow} className='right' alt="arrow" onClick={()=>changeSlide("right")}/>
        </div>

        <div className="close"
         onClick={()=>setImageIndex(null)}>X</div>
      </div>
      )}

      <div className="bigImages">
        <img src={images[0]} alt='big-image' onClick={()=>setImageIndex(0)}/>
      </div>

      <div className="smallImages">
        {images.slice(1).map((image,index) => (
          <img src={image} 
          alt='small-images' 
          key={index} 
          onClick={()=>setImageIndex(index+1)}
           />
        ))}
      </div>
    </div>
  )
}

export default Slider