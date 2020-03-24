import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker,Popup} from 'react-map-gl'
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


  const [showPopup,setShowPopup] = useState({})

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
        cities.map(entry => (
          <React.Fragment key={entry._id}>

            <Marker
              latitude={entry.latitude}
              longitude={entry.longitude}
              >
              <div
                onClick={() => setShowPopup({
                  // ...showPopup,
                  [entry._id]: true,
                })}
              >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="#F0F0F0" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="feather feather-map-pin">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
              </div>
            </Marker>
            {
              
              showPopup[entry._id] ? (
                <Popup
                
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top" >
                  <div className="popup">
                    <h3>{entry.name}</h3>
                    <p>{entry.comments}</p>
                    
                    {entry.image && <img src={entry.image} alt={entry.title} className="img"/>}
                  </div>
                </Popup>
              ) : null
              
            }


          </React.Fragment>  
        ))
      }
      
       
      </ReactMapGL>
    </div>  
{/* 
    <div className="wrapper">
        <p> </p>
        <div className="city-flex">
          {cities.map(cityName => <ListOfCities {...cityName} key={cityName.city} deleteCity={deleteCity}/>)}
        </div>
        
        
    </div> */}

    <div className="wrapper-form">
      <CityEntry addCity={addCity} />
    </div>
    </div>

    
    
  );
}

export default Home