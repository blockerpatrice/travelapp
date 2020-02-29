import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import MapMarker from './MapMarker'
import ListOfCities from './ListOfCities'

const CITIES = [
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

const Map = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: '70vw',
    height: '80vh',
    latitude: 43.6150,
    longitude: -116.2023,
    zoom: 2
  });


  return (
    <div>
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/blockerbella/ck759dbd108ff1ip577hjsqqm"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}>

    {
        <MapMarker data={CITIES}/>
    }
    </ReactMapGL>

    <ListOfCities/>
    </div>
  );
}




export default Map;
