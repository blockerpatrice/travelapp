import React, { Component } from 'react'
import Home from './Components/Home'
import {Switch,Route} from "react-router-dom"


class App extends Component {

  render() {
      return(
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      )
  }
}
export default App;
