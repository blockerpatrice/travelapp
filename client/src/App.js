import React, { Component } from 'react'
import Home from './Components/Home'
import {Switch,Route} from "react-router-dom"
import CityEntry from './Components/CityEntry'
import { GoogleApiWrapper } from 'google-maps-react';

require('dotenv').config()

let key = process.env.REACT_APP_GOOGLE_API_KEY

class App extends Component {

  render() {
      return(
        <Home/>
      )
  }
}


export default GoogleApiWrapper({apiKey:key})(App);
