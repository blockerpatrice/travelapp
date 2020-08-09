import React, { useState } from 'react'
import Geosuggest from 'react-geosuggest'
import '../index.css'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import FileUpload from './FileUpload';

const CityEntry = (props) => {
    const initInputs = {name:String, comments:"", longitude:Number, latitude:Number, cityImage:{}}
    
    const [inputs, setInputs] = useState(initInputs)
    const [image, setImage] = useState([]);


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
      setImage(imageDrop)

      props.addImage(image);
    
      // image ? 
      // setInputs(prevInputs => ({...prevInputs,
      //   cityImage:image
      // })) :
      // console.log(image)

    }
    
    const handleChange = (e) =>{
      const {name,value} = e.target
      setInputs(prevInputs => ({...prevInputs, [name]:value}))

      console.log(setInputs)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setInputs(initInputs)

      props.addCity(inputs)
 
    }


        return (
          <div className="form-styles">
          <form onSubmit={handleSubmit}>
          <Geosuggest 
                    placeholder="Input city name" 
                    autoComplete="true"
                    onSuggestSelect={onSuggestSelect}
                />
          <FileUpload/>
          {/* <ImageUploader
                {...props}
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                labelStyles={divStyle}
                singleImage={true}
            />       */}
          
            <p></p>
            {/*<p></p>
            <input type="text" autoComplete="off" placeholder="Image link" name="image" value={inputs.image} onChange={handleChange} />
            <p></p>           */}
            {/* <input type="number" step="0.0001" placeholder="Lat" name="latitude" value={inputs.latitude} onChange={handleChange} />
            <p></p>
            <input type="number" step="0.0001" placeholder = "Long (include ' - ' in front)" name="longitude" value={inputs.longitude} onChange={handleChange} />
            <p></p> */}
            <div className="align-submit-bttn">
              <button className="button-style">Submit</button>
            </div>
          </form>
          
          </div>
        );
        
}

export default CityEntry