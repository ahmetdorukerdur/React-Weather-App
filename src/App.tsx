import coldDay from './images/cold.jpg';
import sunnyDay from './images/sunny.jpg'

import React, { useEffect, useState } from 'react';
import Conditions from './components/Conditions';
import { getWeatherData } from './weatherApiService';

interface WeatherResponse {
  description: string;
  iconURL: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  speed: number;
  country: string;
  name: string;
}

function App() {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [units, setUnits] = React.useState('metric');
  const [city, setCity] = useState();
  const [background, setBackground] = React.useState(sunnyDay);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city, units);
      setWeather(data);

      const changeBackground = units === 'metric' ? 20 : 60;
      if(data.temp <= changeBackground) setBackground(coldDay);
      else setBackground(sunnyDay)
    }

    fetchWeatherData();
  }, [city, units]);

  const handleOnClick = (e: any) => {
    const button = e.currentTarget;
    const unit = button.innerText.slice(1);
    const celcius = unit === 'C';
    button.innerText = celcius ? '°F' : '°C';
    setUnits(celcius ? 'metric' : 'imperial');
  };

  const enterPressed = (e: any) => {
    if(e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className='App' style={{ backgroundImage: `url(${background})` }}>
      <div className='overlay'>
        {weather && (
          <div className='container'>
            <div className='content content_input'>
              <input onKeyDown={enterPressed} type='text' name='city' placeholder='Enter city...' />
              <button onClick={(e) =>handleOnClick(e)}>°F</button>
            </div>
            
            <div className='content content_temperature'>
              <div className='icon'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt='icon' width={80}/>
                <h3>{weather.description}</h3>
              </div>
              <div className='temperature'>
                <h3>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h3>
              </div>
            </div>
            <Conditions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
