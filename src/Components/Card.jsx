import React from 'react'
import "./Style/Card.css"

function Card(props) {

  function play_video(){
    console.log("huh");
    var element = document.getElementById("video-frame");
    element.src = props.link;
  }

  function deletecard(){
    // document.addEventListener(e);
    var element = document.getElementById(props.id);
    element.remove();
  }
  return (
    <div className='card' id={props.id}>

      <div className="left">
        <img src={require("./Assets/scifi_astronaut.jpg")} className = "card_thumb" alt="" />
      </div>

      <div className='card-info'>
        <h4 className='card-category'>{props.category}</h4>
        <h3 className='bucket-card-name'>{props.name}</h3>
        <h5 className="bucket-card-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eveniet?</h5>
        <button  className='card-link' onClick = {play_video}>Watch</button>

        {/* <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <header class="w3-container w3-teal"> 
              <span onclick="document.getElementById('id01').style.display='none'" 
              class="w3-button w3-display-topright">&times;</span>
              <h2>Modal Header</h2>
            </header>
            <div class="w3-container">
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <footer class="w3-container w3-teal">
              <p>Modal Footer</p>
            </footer>
          </div>
        </div> */}

        {/* <button type="button" class="btn card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Watch
        </button>


        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{props.link+"/embed"}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <iframe width="560" height="315" src="#" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div> */}

        
      </div>

      <div className="card-tools">
        <img src={require("./Assets/delete.png")} alt="" className="tool" onClick={deletecard}/>
        <img src={require("./Assets/edit.png")} alt="" className="tool" />
      </div>
        
    </div>
  )
}

export default Card