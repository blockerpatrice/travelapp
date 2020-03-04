import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker, WebMercatorViewport} from 'react-map-gl'
import MapMarker from './MapMarker'
import ListOfCities from './ListOfCities'
import CityEntry from './CityEntry'
import axios from 'axios'
import Header from './Header'
import '../index.css'


const Home = () => {
    

    const arrayOfCities = [
        {
            key:"New York",
            latitude: 40.748817,
            longitude: -73.985428
        },
        {
            key:"Tampa",
            latitude: 27.9506,
            longitude: -82.4572
        },
        {
            key:"Boise",
            latitude: 43.6150,
            longitude: -116.2023
        }
      ]

  const [cities, setCities] = useState([])

  const getCities = () => {
      axios.get('/cities')
        .then(res => setCities(res.data))
        .catch(err => console.log(err))
       console.log("cities fetched successfully")

  }
  const addCity = (newCity) =>{
    axios.post('/cities', newCity)
    .then(res => {setCities(prevCities => [...prevCities, res.data])})
    .catch(err => console.log(err))
  }

  const addMarkers = (markers) => {
    const parseLong = parseInt(markers.longitude)
    const parseLat = parseInt(markers.latitude)

    const addedCity = {
      key:markers.name,
      latitude:parseLat,
      longitude:parseLong
    }

    arrayOfCities.push(addedCity)
  }

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '550px',
    latitude: 43.6150,
    longitude: -116.2023,
    zoom: 2
  });

  useEffect(() => {
    getCities()
   },[])
 

   return (
    <div>
      <Header/>
    <div className="wrapper">

    <div className="map-styles">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/blockerbella/ck759dbd108ff1ip577hjsqqm"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}>
      {
        <MapMarker data={arrayOfCities} />
      }
      </ReactMapGL>
    </div>  
    <div className="city-names">
      <a>Places Traveled</a>
      <p> </p>
      {cities.map(cityName => <ListOfCities {...cityName} key={cityName.city}/>)}
    </div>

    <div className="form-entry">
      <CityEntry addCity={addCity} addMarkers={addMarkers}/>
    </div>
    
    </div>
      </div>
    
  );
}

export default Home