import React, { Component } from 'react'
import axios from 'axios'
import '../index.css'

class CityEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          city: '',
          longitude: Number,
          latitude: Number,
          date:Date
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
  
      }
    
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        window.location.reload(false)
        event.preventDefault();
      }
    
      render() {
        return (
          <div className="field">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter a new city:
              <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
            </label> <br/>
            <label>
              Enter longitude:
              <input type="number" name="longitude" value={this.state.longitude} onChange={this.handleInputChange} />
            </label> <br/>
            <label>
              Enter latitude
              <input type="number" name="latitude" value={this.state.latitude} onChange={this.handleInputChange} />
            </label> <br/>
            <label>
              Enter date visited:
              <input type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
            </label> <br/>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
        }

}

export default CityEntry