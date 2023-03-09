import React from 'react'
import { Link } from 'react-router-dom'
import "./Style/Navbar.css"
// import Rocket_data from "../JSONs/Rocketcards.json"

function Navbar() {


  return (
    <div id='navbar-body'>
        <Link to="/" style={{textDecoration: "none", color: "whitesmoke"}}><h2>CONVIN</h2></Link>

        <div className="navb-items">
            <h3 className='navb-item'>Portfolio</h3>
            <h3 className='navb-item'>Products</h3>
            <h3 className='navb-item'>Solutions</h3>
        </div>

        <button type="button" class="btn card-create-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Create a card
        </button>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="/" method="get" id='create-card-form'>

                    <h6 className='modal-card-name-inp'>Card name</h6>
                    <input type="text" name="card_name" id="card_name" />
                    <br />

                    <h6 className="modal-card-link-inp">Video link</h6>
                    <input type="text" name="video_link" id="video_link" />
                    <br />

                    <h6 className="modal-card-cate-inp">Category</h6>
                    <input type="text" name="card_category" id="card_category" />
                    
                    <button type="submit">Create</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" >Create</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar