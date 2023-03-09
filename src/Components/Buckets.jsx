import React from 'react'
import Bucket from './Bucket'
import "./Style/Buckets.css"
// import { Link } from 'react-router-dom'
// import Astronauts from './Astronauts'
// import Food from './Food'

function Buckets() {
  return (
    <div className="buckets">
        <Bucket asset = "rocket" color="greenyellow" name="Rockets" tagline="Chariots of fire"/>
        <Bucket asset="restaurant" color="orange" name="Food" tagline="your hunger extinguisher"/>
        <Bucket asset="group" color="violet" name="Astronauts" tagline="bravest of all humankind"/>
    </div>
  )
}

export default Buckets