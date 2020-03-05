import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker, WebMercatorViewport} from 'react-map-gl'
import MapMarker from './MapMarker'
import ListOfCities from './ListOfCities'
import CityEntry from './CityEntry'
import axios from 'axios'
import Header from './Header'
import '../index.css'


const Home = () => {

  const [cities, setCities] = useState([]);

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

  const deleteCity = (cityId) =>{
    axios.delete(`/cities/${cityId}`)
    .then(res => {setCities(prevCities => prevCities.filter(city => city._id !== cityId))})
    .catch(err => console.log(err))
  }


  console.log(cities)

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 43.6150,
    longitude: -116.2023,
    zoom: 3
  });

  useEffect(() => {
    getCities()
   },[])


   return (
    <div className="parent-wrapper">
      {/* <Header/> */}
    

    <div className="map-styles">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/blockerbella/ck759dbd108ff1ip577hjsqqm"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange ={setViewport}
        >
      {
        <MapMarker data={cities} />
      }
      </ReactMapGL>
    </div>  

    <div className="wrapper">
        <p> </p>
        <div className="city-flex">
          {cities.map(cityName => <ListOfCities {...cityName} key={cityName.city} deleteCity={deleteCity}/>)}
        </div>
        
        <CityEntry addCity={addCity} />
        
     
    </div>
    
    </div>
    
  );
}

export default Home