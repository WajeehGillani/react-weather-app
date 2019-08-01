import React from 'react';
const Weather = ({city, country, temp, description, humidity, windSpeed, error}) => (

    <>
    <div className='center-align'>
        <strong>{error}</strong>
        <p>Temperature: <strong>{temp}</strong></p>
        <p>Location: <strong>{city}, {country}</strong></p>
        <p>Description: <strong>{description}</strong></p>
        <p>Humidity: <strong>{humidity}%</strong></p>
        <p>Wind Speed: <strong>{windSpeed}Km/h</strong></p>
    </div>
    
    </>
    
);
export default Weather;