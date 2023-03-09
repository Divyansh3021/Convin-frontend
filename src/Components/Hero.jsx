import React from 'react'
import "./Style/Hero.css"

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-info'>
        <div className="hero-head">
          Our goal
        </div>
        <div className='hero-content'>
          Bring home a new best friend by Adopting
        </div>
      </div>

      <div className="video">
        <div className="video-head">
          Our program
        </div>
        <div className="video-content">
          From caves to cosmos, from candles to stars, we are with you.
        </div>

        <div className='play'>
          <img src={require("./Assets/play_circle.png")} alt="" className='play-btn'/>
          <div className="content">Watch our Plan of Action</div> 
        </div>
      </div>
    </div>
  )
}

export default Hero