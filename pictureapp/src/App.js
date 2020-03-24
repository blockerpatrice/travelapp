import React from "react";
import { Route, Switch } from "react-router-dom";
import MyNavbar from "./navbar/MyNavbar.js";
import Home from "./homepage/Home.js";
import Signup from "./signup/Signup.js";
import SearchPage from "./search/SearchPage.js";
import Login from "./login/Login.js";




function App () {
    return(
        <div>
            <MyNavbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/search" component={SearchPage} />
                <Route path="/login" component={Login} />
             
            </Switch>
        </div>
    )
}

export default App;