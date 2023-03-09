import React from 'react'
import Card from './Card'
import "./Style/Rocket.css"

function Astronauts() {
  return (
    <div className='bucket-container' >
        <div className="head-info">
            <h3>Astronauts</h3>
            <h2>The most brave humans earth has to offer.</h2>
            <iframe width="560" height="315" style={{marginTop: "5vh"}} src="" id='video-frame' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* <div className="rockets-types">
              <h2>Types of rockets</h2>
              <h4>Which one is best among these? </h4>

              <div className="rocket-options">
                <img src={require("./Assets/rocket_launch.png")} alt="" className="rockets-types" />
                <img src={require("./Assets/rocket_launch.png")} alt="" className="rockets-types" />
                <img src={require("./Assets/rocket_launch.png")} alt="" className="rockets-types" />
                <img src={require("./Assets/rocket_launch.png")} alt="" className="rockets-types" />
              </div>
            </div> */}
        </div>

        <div className="style_container" style={{backgroundColor: "violet"}}>
            <div className="cards-up" style={{borderLeft: "20px solid violet"}}></div><div className="cards-down"></div>
        </div>

        <div className="cards_container" style={{backgroundColor: "violet"}}>

            <h1 className='cards-h1'>Astronauts</h1>
            <hr style={{height: "4px", width: "85%", alignSelf: "flex-start", marginLeft: "3.5vw"}} />


            <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/>
            <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/>
            <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/>
            <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/>
            <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/>
        </div>
    </div>
  )
}

export default Astronauts