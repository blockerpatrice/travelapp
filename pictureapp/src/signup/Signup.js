import React, { Component } from "react";
import "./Signup.css";
import {withProvider} from "../GlobalProvider.js"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "", 
            password: "", 
            
        }
        
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    updateUser = (event) => {
        this.setState({
          username: event.target.value
        });
    }

    updatePass = (event) => {
        this.setState({
          password: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/"));
            
    }
    
    render() { 
        return ( 
            <div className="container">
                <div className="text"> Sign Up</div>
                <form onSubmit={this.handleSubmit} className="form-submit">
                    <input value={this.state.username} name="username" type="text" placeholder="Enter Username" autoComplete="off" className="form-control" onChange={this.updateUser}/>      
                     <input type="password" onChange={this.updatePass} value={this.state.password} autoComplete="off" className="form-control" placeholder="Enter Password"/>
                    
                     <button type="submit" className="button-submit">Submit</button>
                     {/* <input type="submit"/> */}
                </form>
           </div> 

           
        );
    }
}
 
export default withProvider(Signup);