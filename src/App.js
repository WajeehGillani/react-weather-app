import React, { Component } from 'react';
import Weather from './components/weather';
import Form from './components/form';
import Navbar from './components/nav-bar/';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import './img/background.jpg'


const API_KEY = '4e0e2efd5e4619d0f430fd65b9599152';
class App extends Component {
  state ={
    city : '',
    country : '',
    temp : '',
    description :'',
    humidity : '',
    windSpeed: '',
    error : ''
    }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const unit = e.target.elements.unit.value;

    //Current WEATHER FORECAST_API
    const CURRENT_API = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${unit}`);
    const data = await CURRENT_API.json();

    if(!city || !country){
      this.setState({
        ...this.state,
        error: "Not Found...."
      });
    }
    else{
   
      this.setState({
        city : data.name,
        country: data.sys.country,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
        
      })
    }
    
    
    
    
  }
  render() {
  return (
    < >
      
    <Navbar/>
          <div className='container mt120'>
          <Form getWeather={this.getWeather}/>
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            description={this.state.description}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            error={this.state.error}
            />
            </div>
    </>
  )
}
}

export default App;
