import React from 'react'
import Card from './Card'
import "./Style/Rocket.css"
import data from "../JSONs/Foodcards.json"

function Food() {
  return (
    <div className='bucket-container' >
        <div className="head-info">
            <h3>Food</h3>
            <h2>Your hunger extinguisher and source of energy.</h2>
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

        <div className="style_container" style={{backgroundColor: "orange"}}>
            <div className="cards-up" style={{borderLeft: "20px solid orange"}}></div><div className="cards-down"></div>
        </div>

        <div className="cards_container" style={{backgroundColor: "orange"}}>

            <h1 className='cards-h1'>Food</h1>
            <hr style={{height: "4px", width: "85%", alignSelf: "flex-start", marginLeft: "3.5vw"}} />


            {
            data.map((element) => <Card id={element.id} thumb={element.thumb} category = {element.category} name = {element.name} link = {element.link}/>)
            }
        </div>
    </div>
  )
}

export default Food