import React, { Component } from 'react'
import Map from './Components/Map'
import {Switch,Route} from "react-router-dom"


class App extends Component {

  render() {
      return(
        <Switch>
          <Route exact path="/" component={Map} />
        </Switch>
          
      )
  }
}
export default App;
