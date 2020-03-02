import React, {PureComponent} from 'react';
import {Marker} from 'react-map-gl';

class MapMarker extends PureComponent {
    render() {
      const {data} = this.props;
      return data.map(
        city => <Marker key={city.name} longitude={city.longitude} latitude={city.latitude}>
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
        </Marker>
      )
    }
  }

export default MapMarker;