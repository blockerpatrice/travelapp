import React, { useState, useEffect} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {listLogEntries} from './functions';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  // componentDidMount = () => {
  //   listLogEntries();
  // }


useEffect (() => {
  (async() => {
    const logEntries = await listLogEntries()
    setLogEntries(logEntries)
    console.log(logEntries)
  })();
  
}, [])


  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/blockerbella/ck759dbd108ff1ip577hjsqqm"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}>

    {
      logEntries.map(entry => (
        <Marker 
        key = {entry._id}
        latitude={entry.latitude} 
        longitude={entry.longitude} 
        offsetLeft={-20} 
        offsetTop={-10}>
        >
        <div>
        <svg 
          //className="marker" 
          style={{
            width: '20px',
            height: '20px'
          }}
          viewBox="0 0 24 24" 
          stroke="#F0F0F0" 
          stroke-width="2" 
          fill="none" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        </Marker>
      ))
    }
    </ReactMapGL>
    
  );
}

export default App;
