import React from 'react'
import { Link} from 'react-router-dom'

function Bucket(props) {
  return (
    <div className='bucket' style={{backgroundColor : props.color}}>
        <div className="bucket-logo">
            <img src={require("./Assets/"+props.asset+".png")} alt="" />
        </div>
        <div className="bucket-content">
            <h3 className='bucket-name'>{props.name}</h3>
            <div className="tag-and-arrow">
                <h5 className='bucket-tagline'>{props.tagline}</h5>
                <Link to={"/"+props.asset}><img src={require("./Assets/arrow.png")} className="arrow" alt="" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Bucket