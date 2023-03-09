import React from 'react'
import Card from './Card'
import "./Style/Rocket.css"
import data from "../JSONs/Rocketcards"

function Rocket() {

  // var category = "Rocket";
  // var parent = document.getElementById("rocket-cards");
  // const populate_rocket = data.forEach((element) => {
  //   if (element.category == category){

      
  //     var card = <Card category = {element.category} name = {element.name} link = {element.link}/>;
  //     parent.appendChild(card);
  //     console.log("heheh");
  //   }  
  // });

  // function addDynamicCard(){
  //   const [val, setVal] = useState([]);
  //   const handleAdd = ()=>{
  //     const abc = [...val,[]]
  //     setVal(abc);
  //   }
  //   const handleChange=()=>{

  //   }
  // }



  return (
    <div className='bucket-container' >
        <div className="head-info">
            <h3>Rockets</h3>
            <h2>Ride the chariots of fire and return to the stars.</h2>
            <iframe width="560" height="315" style={{marginTop: "5vh"}} src="" id='video-frame' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

        <div className="style_container" style={{backgroundColor: "greenyellow"}}>
            <div className="cards-up"></div><div className="cards-down"></div>
        </div>

        <div className="cards_container" id='rocket-cards'>

            <h1 className='cards-h1'>Rockets</h1>
            <hr style={{height: "4px", width: "85%", alignSelf: "flex-start", marginLeft: "3.5vw"}} />

            {
              data.map((element) => <Card id={element.id} thumb={element.thumb} category = {element.category} name = {element.name} link = {element.link}/>)
            }
            {/* <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/>
            <Card category = "Rockets" name = "Thunder bird" link = "https://www.youtube-nocookie.com/embed/i8eBBG46H8A"/> */}
        </div>
    </div>
  )
}

export default Rocket