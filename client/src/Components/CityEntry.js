import React, { useState } from 'react'
import Geosuggest from 'react-geosuggest'
import '../index.css'

const CityEntry = (props) => {
    const initInputs = {name:String, longitude:Number, latitude:Number}
    
    const [inputs, setInputs] = useState(initInputs)
    const [image, setImage] = useState("");

    const onSuggestSelect = (suggest) => {
      suggest ? 
      setInputs(prevInputs => ({...prevInputs,
        name:suggest.description,
        longitude:Math.trunc(suggest.location.lng),
        latitude:Math.trunc(suggest.location.lat)
      })) : 
   
      console.log(inputs)
    }

    const divStyle = {
      padding: "20px"
    };

    const onDrop = (imageDrop) => {

      setImage(imageDrop.target.files[0])

    }
    
    const handleChange = (e) =>{
      const {name,value} = e.target
      setInputs(prevInputs => ({...prevInputs, [name]:value}))
      console.log(setInputs)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
     // setInputs(initInputs)

      const formData = new FormData()
      formData.append('name', inputs.name)
      formData.append('longitude', inputs.longitude)
      formData.append('latitude',inputs.latitude)
      formData.append('cityImage',image)
    
      
      props.addCity(formData)
 
    }
        return (
          <div className="form-styles">
          <form onSubmit={handleSubmit}>
          
          <Geosuggest 
              placeholder="Input city name" 
              autoComplete="true"
              onSuggestSelect={onSuggestSelect}
            />

            <input type="file" onChange={onDrop}/> 
          
            <p></p>

            <div className="align-submit-bttn">
              <button className="button-style">Submit</button>
            </div>
          </form>
          
          </div>
        );
        
}

export default CityEntry