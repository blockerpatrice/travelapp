import React, {Component} from 'react'
import '../index.css'


const ListOfCities = (props) => {

  const {name, rating, comments, _id, image} = props
    return(
        <div className="city-styles">
          <div className="grid-item">
          <p>{props.name}, Rating: {props.rating}</p>
          
          <p>Comments: {props.comments}</p>
          
          <img src={props.image} className="images"/>
          <button 
            className="button-style" 
            onClick={() => props.deleteCity(_id)}>Delete</button>
          </div>
        </div>  

    )
}

export default ListOfCities

