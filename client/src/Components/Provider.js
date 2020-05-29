import React, {useState} from 'react';

const MyContext = React.createContext();

class Provider extends React.Component{
    constructor(){
        super();
        this.state = {
            lat:0,
            long:0
        }
    }

    saveLat = newValue => {
        this.setState({lat:newValue})
    }

    saveLong = newValue => {
        this.setState({long:newValue});
    }

    render(){
        return(
            <MyContext.Provider
                value={{
                    ...this.state,
                    saveLat:this.saveLat,
                    saveLong:this.saveLong
                 }}
            >
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default Provider;

export const data = C => props => (
    <MyContext.Consumer>
        {value => <C {...value} {...props}/>}
    </MyContext.Consumer>
)