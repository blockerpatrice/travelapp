import React, { Component } from 'react'
import Home from './Components/Home'
import {Switch,Route} from "react-router-dom"
import CityEntry from './Components/CityEntry'
import { GoogleApiWrapper } from 'google-maps-react';

class App extends Component {

  render() {
      return(
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={CityEntry}/>
        </Switch>
      )
  }
}


export default GoogleApiWrapper({apiKey:`${process.env.REACT_APP_GOOGLE_API_KEY}`})(App);
