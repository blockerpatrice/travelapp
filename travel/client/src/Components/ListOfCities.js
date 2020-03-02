import React, {useState, useEffect} from 'react'
import axios from 'axios'


const ListOfCities = (props) => {

  const [cities, setCities] = useState ([])  

  useEffect(() => {
    axios.get("/api/Routes")
     .then(res => setCities (res.data))
     .catch(err => console.log(err))
})
        return(
            <div>
            
            </div>
        )
}

export default ListOfCities

