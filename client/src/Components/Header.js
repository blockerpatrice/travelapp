import '../index.css'
import React, {useState} from 'react'
import CityEntry from './CityEntry.js'
import AboutProject from './AboutProject.js'
import { Button, Popup } from 'semantic-ui-react'
import axios from 'axios'

const Header = () => {

    const [cities, setCities] = useState([]);

    const addCity = (newCity) =>{
        axios.post('/cities', newCity)
        .then(res => {setCities(prevCities => [...prevCities, res.data])})
        .catch(err => console.log(err))
      }


    return(
    <div className="header">
        <div className="logo"> <p>Patty's Travel Log </p></div>
        
        <div className="header-right">
                <div className="about-button">
                    <Popup
                        content={<AboutProject/>}
                        on='click'
                        pinned ='false'
                        position='bottom center'
                        size='small'
                        trigger={<Button className="popup-styles-about">About Project</Button>}
                    />   
                </div>

                <div className="add-city-button">
                    <Popup
                        content={<CityEntry addCity={addCity}/>}
                        on='click'
                        pinned ='false'
                        position='bottom center'
                        size='huge'
                        trigger={<Button className="popup-styles-addcity">New City</Button>}
                    />    
                </div>
            
        </div>
        
    </div>
    )
}
export default Header