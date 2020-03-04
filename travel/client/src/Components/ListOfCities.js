import React from 'react'
import '../index.css'

const ListOfCities = (props) => {
    return(
      <div>
        <div className="city-styles">{props.name}, Rating: {props.rating}</div>
        <div>Comments: {props.comments}</div>
      </div>
    )
}
export default ListOfCities

