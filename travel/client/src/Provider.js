import React, {Component} from 'react';
import axios from 'axios';

const MyContext = React.createContext();

class Provider extends Component {
    constructor() {
        super()
        this.state = {
            name:"",
            longitude:"",
            latitude:" "
        }
    }
}

export default Provider;

export const data = C => props => (
    <MyContext.Consumer>
        {value => <C {...value} {...props}/>}
    </MyContext.Consumer>
)