import React from 'react'
import '../index.css'

const AboutProject = () => {
    return(
        <div className="about-project">
            <p>
                Patty's travel log is a full stack application that uses the Mongodb, Express.js, React.js and Node.js (MERN) stack, 
                along with react-map-gl. React-map-gl is a React wrapper component for the Mapbox API, and is 
                part of Uber visualization's framework suite. Plane markers are added to map 
                once adding a new city.
            </p>
            <p>
                To test, Google lat & long (in Google search, the first number is the latitiude and 
                the second number is the longitude.)
                add a "-" in front of the longitude.
            </p>

            <p>An image link must be used. This can also be found by searching the city name in Google, then images</p>
        </div>
    )
}

export default AboutProject