import React, {Component} from 'react'
import '../index.css'


const ListOfCities = (props) => {

  const {name, rating, comments, _id, image} = props
    return(
        <div className="city-styles">
          
          <img src={props.image} className="images"/>
          <p className="city">{props.name}, Rating: {props.rating}</p>
          
          <p className="comments">Comments: {props.comments}</p>
          
          
          <button 
            className="button-style" 
            onClick={() => props.deleteCity(_id)}>Delete</button>
          
        </div>  

    )
}

export default ListOfCities

