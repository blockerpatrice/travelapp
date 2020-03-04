import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'


const CityEntry = (props) => {
    const initInputs ={name:"", rating:"", comments:"", longitude:"", latitude:""}
    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (e) =>{
      const {name,value} = e.target
      setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      props.addCity(inputs)
      props.addMarkers(inputs)
      setInputs(initInputs)
    }

        return (
          <div className="field">
          <form onSubmit={handleSubmit}>
            <label>
              Enter a new city:
              <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            </label> <br/>
            
            <label>
              Enter Rating, 1-10:
              <input type="text" name="rating" value={inputs.rating} onChange={handleChange} />
            </label> <br/>

            <label>
              Comments about the city?:
              <input type="text" name="comments" value={inputs.comments} onChange={handleChange} />
            </label> <br/>
        
            <label>
              Enter longitude:
              <input type="text" name="longitude" value={inputs.longitude} onChange={handleChange} />
            </label> <br/>

            <label>
              Enter latitude
              <input type="text" name="latitude" value={inputs.latitude} onChange={handleChange} />
            </label> <br/>
          
            <input type="submit" value="Submit" />
          </form>
          
          </div>
        );
        
}

export default CityEntry