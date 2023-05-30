import coldDay from './images/cold.jpg';
import sunnyDay from './images/sunny.jpg'

import React, { useEffect, useState } from 'react';
import Conditions from './components/Conditions';
import { getWeatherData } from './weatherApiService';

interface WeatherState {
  description: string;
  iconURL: string;
  temp: number;
  feels_like: string;
  temp_min: string;
  temp_max: string;
  pressure: string;
  humidity: string;
  speed: string;
  country: string;
  name: string;
}
const weatherState = {
  description: '',
  iconURL: '',
  temp: 1,
  feels_like: '',
  temp_min: '',
  temp_max: '',
  pressure: '',
  humidity: '',
  speed: '',
  country: '',
  name: '',
};

function App() {
  const [weather, setWeather] = useState<WeatherState>(weatherState);

  useEffect(() => {
    const fetchWeatherData =async () => {
      const data = await getWeatherData('istanbul');
      setWeather(data);
    }

    fetchWeatherData();
  }, []);
  return (
    <div className='App' style={{ backgroundImage: `url(${coldDay})` }}>
      <div className='overlay'>
        {
        weather && (
          <div className='container'>
            <div className='content content_input'>
              <input type='text' name='city' placeholder='Enter city...' />
              <button>°F</button>
            </div>
            <div className='content content_temperature'>
              <div className='icon'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt='icon' width={80}/>
                <h3>{weather.description}</h3>
              </div>
              <div className='temperature'>
                <h3>{`${weather.temp.toFixed()} °C`}</h3>
              </div>
            </div>
            <Conditions />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
