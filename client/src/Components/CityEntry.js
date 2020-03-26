import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'


const CityEntry = (props) => {
    const initInputs ={name:"", rating:"", comments:"", longitude:Number, latitude:Number, image:""}
    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (e) =>{
      const {name,value} = e.target
      setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      props.addCity(inputs)
      
      setInputs(initInputs)
    }


        return (
          <div className="form-styles">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a City" name="name" value={inputs.name} onChange={handleChange} />
            <p></p>
          
            <input type="text" placeholder="Comments about the city?" name="comments" value={inputs.comments} onChange={handleChange} />
            <p></p>
            <input type="text" placeholder="Image link" name="image" value={inputs.image} onChange={handleChange} />
            <p></p>          
            <input type="number" step="0.0001" placeholder="Latitude" name="latitude" value={inputs.latitude} onChange={handleChange} />
            <p></p>
            <input type="number" step="0.0001" placeholder = "Longitude" name="longitude" value={inputs.longitude} onChange={handleChange} />
            <p></p>
            <div className="align-submit-bttn">
              <button className="button-style">Submit</button>
            </div>
          </form>
          
          
          </div>
        );
        
}

export default CityEntry