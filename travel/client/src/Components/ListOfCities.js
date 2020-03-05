import React, {Component} from 'react'
import '../index.css'


const ListOfCities = (props) => {

  const {name, rating, comments, _id, image} = props
    return(
        <div className="city-styles">
          
          <div className="image-wrapper">
            <div className ="content-div">
          <img src={props.image} className="images"/>
            <p className="city">{props.name}, Rating: {props.rating}</p>
            <p className="comments">Comments: {props.comments} 
              
            <button 
              className="button-delete" 
              onClick={() => props.deleteCity(_id)}>Delete</button>
            </p>
            </div>
          </div>
        
        </div>  

    )
}

export default ListOfCities

