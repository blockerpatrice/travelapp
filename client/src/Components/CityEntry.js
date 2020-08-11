import React, { useState } from 'react'
import Geosuggest from 'react-geosuggest'
import '../index.css'

const CityEntry = (props) => {
    const initInputs = {name:String, longitude:Number, latitude:Number, comments:String}
    
    const [inputs, setInputs] = useState(initInputs)
    const [image, setImage] = useState("");

    const onSuggestSelect = (suggest) => {
      suggest ? 
      setInputs(prevInputs => ({...prevInputs,
        name:suggest.description,
        longitude:suggest.location.lng,
        latitude:suggest.location.lat
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
      formData.append('comments',inputs.comments)
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
            <div className="comments">
              <input type="text" autoComplete="off" placeholder="Comments" name="comments" onChange={handleChange} />
            </div>
            
            <div className="img-upload">
              <input type="file" onChange={onDrop} className="img-input"/> 
            </div>
  
          
            <p></p>

            <div className="align-submit-bttn">
              <button className="button-style">Submit</button>
            </div>
          </form>
          
          </div>
        );
        
}

export default CityEntry